const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtValidation = (req, res, next) => {
    const token = req.headers['authorization']
    console.log(token)
    const jwtKey = process.env.JWTKEY;

    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    try {
        const payload = jwt.verify(token, jwtKey);
        next();
    } catch (error) {
        console.error(error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).send('Invalid token');
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).send('Token expired');
        } else {
            return res.status(500).send('Internal Server Error');
        }
    }
};

module.exports = jwtValidation;
