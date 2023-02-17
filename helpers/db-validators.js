import User from '../models/user.js';
import mongoose from 'mongoose';

const emailExists = async (email = '') => {
    const emailExistsDB = await User.findOne({email: email});
    
    if (emailExistsDB) {
        // return res.status(400).json({
        //     msg: 'Email is already in use'
        // });
        throw new Error(`The email ${email} is already in use`);
    }
}

const existsUserById = async (id = '') => {

    if (!mongoose.isValidObjectId(id)) {
        throw new Error(`Is not a valid id: ${id}`)
    }

    const userExistsDB = await User.findById(id);
    
    if (!userExistsDB) {
        throw new Error(`The user does not exits, id: ${id}`);
    }
}

export {
    emailExists,
    existsUserById
};