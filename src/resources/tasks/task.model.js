const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: String,
    userId: String,
    priority: String,
    description: String,
    _id: {
      type: String,
      default: uuidv4
    }
  },
  { versionKey: false }
);

taskSchema.statics.toResponse = task => {
  const { id, title, userId, priority, description } = task;
  return { id, title, userId, priority, description };
};

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
