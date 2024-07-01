import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.MONGODB_CNN, { dbName: 'giffydb' }).then(db => {
            console.log('DB connected');

            return db
        });
    } catch (error) {
        console.log(error);
        throw new Error(`Error starting database`);
    }
};

export {
    dbConnection
}