const tasksRepo = require('./task.db.repository');

const getAll = () => tasksRepo.getAll();

const getById = id => tasksRepo.getById(id);

const createTask = params => {
  const { title, userId, priority, description } = params;
  return tasksRepo.createTask({ title, userId, priority, description });
};

const updateTaskById = (id, params) => {
  const { title, userId, priority, description } = params;
  return tasksRepo.updateTaskById({ id, title, userId, priority, description });
};

const deleteTaskById = async id => {
  return tasksRepo.deleteTaskById(id);
};

module.exports = {
  getAll,
  getById,
  createTask,
  updateTaskById,
  deleteTaskById
};
