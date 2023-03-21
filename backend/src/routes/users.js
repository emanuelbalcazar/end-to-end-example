const express = require('express');
const router = express.Router();
const service = require('../services/user.service');

router.get('/users', async (req, res) => {
    const users = await service.getUsers();
    return res.json(users);
});

router.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await service.getById(id);
    return res.json(user);
});

router.post('/users', async (req, res) => {
    try {
        const userData = req.body;
        const user = await service.store(userData);
        return res.json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const toUpdate = req.body;
    const user = await service.update(id, toUpdate);
    return res.json(user);
});

router.delete('/users/:id', async (req, res) => {
    return res.json(await service.delete(req.params.id));
});

module.exports = router;