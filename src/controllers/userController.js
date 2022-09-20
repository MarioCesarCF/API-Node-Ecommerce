const UserService = require('../services/userService');

exports.create = async (req, res, next) => {
    try {
      const result = await UserService.createUser(req.body);
      res.status(201).json({ data: result, status: 'success' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.getAll = async (req, res, next) => {
    try {
      const products = await UserService.getAllUser();
      res.status(200).json({ data: products, status: 'success' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.getOne = async (req, res, next) => {
    try {
      const {id} = req.params;
      const result = await UserService.getUserById(id);
      res.status(200).json({ data: result, status: 'success' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.update = async (req, res, next) => {
    try {
      const {id} = req.params;
      const result = await UserService.putUserById(id, req.body);
      res.status(200).json({ data: result, status: 'success' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.delete = async (req, res, next) => {
    try {
      const {id} = req.params;
      const result = await UserService.deleteUserById(id);
      res.status(200).json({ data: result, status: 'success' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };