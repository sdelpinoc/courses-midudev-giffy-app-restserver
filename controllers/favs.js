import { request, response } from 'express'; // To use autocomplete(suggest functions of req and res)
// import bcryptjs from 'bcryptjs';

import Fav from '../models/fav.js'; // Will allow to create instances of the model

const favsGet = async (req = request, res = response) => {
    const [favRegisters] = await Promise.all([
        // Fav.countDocuments(),
        Fav.find()
    ]);

    const favsId = favRegisters.map(favs => favs.id);

    // Return a array of favs id
    res.json({ favs: favsId });
};

const favsPost = async (req, res = response) => {
    // The Content-Type of the request must be json
    const { id } = req.params;

    const fav = new Fav({ id });

    // Save the data in MongoDB
    await fav.save();

    const [favRegisters] = await Promise.all([
        // Fav.countDocuments(),
        Fav.find()
    ]);

    const favsId = favRegisters.map(favs => favs.id);

    // Return a array of favs id
    res.json({ favs: favsId });
};

const favsDelete = async (req, res = response) => {
    // The Content-Type of the request must be json
    const { id } = req.params;

    // Delete the data in MongoDB
    const favs = await Fav.findOne({ id });
    // console.log(favs);

    if (favs) {
        await Fav.findByIdAndDelete(favs._id);
    }

    const [favRegisters] = await Promise.all([
        // Fav.countDocuments(),
        Fav.find()
    ]);

    const favsId = favRegisters.map(favs => favs.id);

    // Return a array of favs id
    res.json({ favs: favsId });
};

export {
    favsDelete,
    favsGet,
    favsPost
};