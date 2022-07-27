import { response } from 'express';
import bycryptjs from 'bcryptjs';

import User from '../models/user.js';

import { generateJWT } from '../helpers/generate-jwt.js';

const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        // Check is email exists
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                msg: `User / Password is incorrect - Email`
            });
        }

        // Check is user is active
        if (!user.status) {
            return res.status(400).json({
                msg: `User / Password is incorrect - status: false`
            });
        }
        
        // Check password
        const validPassword = bycryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: `User / Password is incorrect - password invalid`
            });
        }

        // Generate JWT
        const token = await generateJWT(user.id);
        
        res.json({
            user,
            token
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'An unexpected error has ocurred'
        });
    }
};

export {
    login
};