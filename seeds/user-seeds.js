const { User } = require('../models');

const userData = [
    {
        username: 'tim',
        email: 'tim@gmail.com',
        password: 'tim3'
    },
    {
        username: 'jim',
        email: 'jim@gmail.com',
        password: 'jim3'
    },
    {
        username: 'wim',
        email: 'wim123@gmail.com',
        password: 'wim3'
    }
]

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;