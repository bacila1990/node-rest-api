const usersRepo = require('./user.db.repository');

const getAll = () => usersRepo.getAll();

const getById = id => {
  return usersRepo.getById(id);
};

const createUser = params => {
  const { name, login, password } = params;
  return usersRepo.createUser({ name, login, password });
};

const updateUserById = (id, params) => {
  const { name, login, password } = params;
  return usersRepo.updateUserById({ id, name, login, password });
};

const deleteUserById = async id => {
  return usersRepo.deleteUserById(id);
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUserById,
  deleteUserById
};
