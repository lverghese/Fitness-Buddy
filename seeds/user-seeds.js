const { User } = require('../models');

const userData = [
    {
        id: '1',
        username: 'tim',
        email: 'tim@gmail.com',
        password: 'tim3'
    },
    {
        id: '2',
        username: 'jim',
        email: 'jim@gmail.com',
        password: 'jim3'
    },
    {
        id: '3',
        username: 'wim',
        email: 'wim123@gmail.com',
        password: 'wim3'
    }
]

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;