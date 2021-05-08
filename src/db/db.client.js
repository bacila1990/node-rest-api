const mongoose = require('mongoose');
const User = require('../resources/users/user.model');
const Task = require('../resources/tasks/task.model');

const users = [
  new User({ name: 'user1', login: 'admin1', password: 'password1' }),
  new User({ name: 'user2', login: 'admin2', password: 'password2' })
];

const tasks = [
  new Task({
    title: 'first',
    userId: '67cabe52-7b04-4037-804e-b9a5c3ace326',
    priority: 'urgent',
    description: 'fix bag'
  }),
  new Task({
    title: 'second',
    userId: 'c68c81e1-37fe-4599-9ced-cdcab36dab95',
    priority: 'medium',
    description: 'add function'
  })
];

const connectToDB = cb => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('we`re connected!');
    db.dropDatabase();
    users.forEach(user => user.save());
    tasks.forEach(task => task.save());
    cb();
  });
};

module.exports = { connectToDB };
