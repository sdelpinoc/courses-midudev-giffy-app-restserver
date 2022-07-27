import jwt from 'jsonwebtoken';

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid }; // object.uid

        jwt.sign(payload, process.env.SECRETORPRIVATE_KEY, {
            expiresIn: '4h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('Token could not be generated');
            } else {
                resolve(token);
            }
        });

        // jwt.sign({
        //     data: payload
        // }, process.env.PRIVATE_KEY, { 
        //     expiresIn: '4h' 
        // }, (error, token) => {
        //     if (error) {
        //         console.log(error);
        //         reject('Token could not be generated');
        //     } else {
        //         resolve(token);
        //     }
        // });
    });
};

export {
    generateJWT
};