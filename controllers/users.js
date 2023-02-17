import { request, response } from 'express'; // To use autocomplete(suggest functions of req and res)
import bcryptjs from 'bcryptjs';

import User from '../models/user.js'; // Will allow to create instances of the model

const usersGet = async (req = request, res = response) => {

    const { limit = 5, from = 0 } = req.query;
    const where = { status: true };

    // const users = await User.find(where)
    //     .skip(from)
    //     .limit(limit);

    // const total = await User.countDocuments(where);

    const [total, users] = await Promise.all([
        User.countDocuments(where),
        User.find(where)
            .skip(from)
            .limit(limit)
    ]);

    res.json({
        total,
        users
    });
};

const usersPost = async (req, res = response) => {
    // The Content-Type of the request must be json
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });

    // Encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    // Save the data in MongoDB
    await user.save();

    res.json(user);
};

export {
    usersGet,
    usersPost
};