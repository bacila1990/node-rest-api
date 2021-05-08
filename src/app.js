const express = require('express');

const {
  requestLogger,
  errorLogger,
  processLogger
} = require('./logger/logger');

const userRouter = require('./resources/users/user.router');
const taskRouter = require('./resources/tasks/task.router');

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

process.on('unhandledRejection', err => {
  processLogger('unhandledRejection', err.message);
});

process.on('uncaughtException', err => {
  processLogger('uncaughtException', err.message);
  process.exitCode(500);
});

app.use(errorLogger);

module.exports = app;
