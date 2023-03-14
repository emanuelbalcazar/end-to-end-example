const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    return res.json({ nombre: 'emanuel' });
});

router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    return res.json({ id: id });
});

router.post('/users', (req, res) => {
    const user = req.body;
    return res.json(user);
});

router.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    return res.json({ id: id, update: user });
});

router.delete('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});

module.exports = router;