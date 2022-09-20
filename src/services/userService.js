const User = require('../models/Usuario')
const conection = require('../config/conection');

conection();

exports.createUser = async (user) => {
    return await User.create(user);
};

exports.getAllUser = async () => {
    return await User.find();
};

exports.getUserById = async (id) => {
    return await User.findById(id);
};

exports.putUserById = async (id, newData) => {
    return await User.findByIdAndUpdate(id, newData);
};

exports.deleteUserById = async (id) => {
    return await User.findByIdAndDelete(id);
};