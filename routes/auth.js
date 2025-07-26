const express = require('express');
const { login, register } = require('../controllers/auth');
const jwtVerify = require('../middlewares/jwtVerify');
const jwt = require('jsonwebtoken');

const route = express.Router();

route.post('/login', login);
route.post('/register', register);

// Test endpoint to generate JWT token
// route.post('/test-token', (req, res) => {
//     try {
//         const testUser = {
//             id: '686e9520cbc7b761a34903be', // Use the ID from your logs
//             email: 'test@example.com'
//         };

//         const token = jwt.sign(
//             { id: testUser.id },
//             process.env.JWT_SECRET,
//             { expiresIn: '1h' }
//         );

//         res.json({
//             success: true,
//             message: 'Test token generated',
//             token: token,
//             user: testUser
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Error generating token',
//             error: error.message
//         });
//     }
// });

module.exports = route