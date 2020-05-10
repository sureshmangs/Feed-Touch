const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

signToken = user => {
    return JWT.sign({
        iss: 'Food4Poor',
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, process.env.JWT_SECRET);
}

module.exports = {
    googleOAuth: async (req, res, next) => {
        // Generate token
        console.log('In google auth');
        const token = signToken(req.user);
        res.status(200).json({ token });
    },

    dashboard: async (req, res, next) => {
        console.log('I managed to get here in dashboard');
        res.json({
            secret: req.user.local.name,
            methods: req.user.methods
        });
    },

    checkAuth: async (req, res, next) => {
        console.log('We managed to get here!');
        res.json({ success: true });
    }
}