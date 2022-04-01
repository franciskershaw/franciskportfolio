const express = require('express');
const router = express.Router()

router.post('/', (req, res) => {
    res.status(200).json({ message: 'This POST route will eventually be used to create admin users' })
})

router.post('/login', (req, res) => {
    res.status(200).json({message: 'This POST route will eventually be used to log admin users in'})
})

module.exports = router;