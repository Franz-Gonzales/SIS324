const { Router } = require('express');
const router = Router();

const User = require('../models/usuario');

const faker = require('faker');

router.get('/api/users', async (req, res)=>{

    const users = await User.find();
    res.json(users);
    // res.json('User list');
});

router.get('/api/users/create', async (req, res)=>{

    for(let i = 0; i < 2; i++){
        await User.create({
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            avatar: faker.image.avatar(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            rol: 'USER_ROLE'
        });
    }

    res.json({message: '2 Users created'});
});

module.exports = router;