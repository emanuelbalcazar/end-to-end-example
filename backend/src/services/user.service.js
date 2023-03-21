const User = require('../models/user');

class UserService {

    constructor() {
        
    }

    async getUsers() {
        return await User.find({});
    }

    async getById(id) {
        return await User.findById(id);
    }

    async store(user) {
        return await User.create(user);
    }

    async update(id, data) {
        return await User.findByIdAndUpdate(id, data);
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserService();