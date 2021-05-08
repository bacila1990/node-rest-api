const Task = require('./task.model');

const getAll = async () => {
  return Task.find({});
};

const getById = async id => {
  return Task.findOne({ _id: id });
};

const createTask = async task => {
  return Task.create(task);
};

const updateTaskById = async taskToUpdate => {
  return Task.findByIdAndUpdate({ _id: taskToUpdate.id }, taskToUpdate);
};

const deleteTaskById = async id => {
  return Task.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getById,
  createTask,
  updateTaskById,
  deleteTaskById
};
