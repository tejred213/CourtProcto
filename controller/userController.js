// const User = require('../models/userModel');
// const authMiddleware = require('../middleware/authMiddleware');
// const bcrypt = require('bcryptjs'); // To hash passwords
// const jsonwebtoken = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Temporary User Schema for unapproved users
// const tempUserSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: String,
//     role: String,
//     isApproved: { type: Boolean, default: false }
//   });
  
//   // Main User Schema for approved users
//   const userSchema = new mongoose.Schema({
//     name: String,
//     email: { type: String, unique: true },
//     password: String,
//     role: String,
//   });
  
// // TempUser model
// const TempUser = mongoose.models.TempUser || mongoose.model('TempUser', tempUserSchema);

// // User model
// const ConfirmUser = mongoose.models.User || mongoose.model('ConfirmUser', userSchema);

//   // JWT Secret
//   const JWT_SECRET = 'your_secret_key'; // Store in environment variable for production
  
//   // Middleware to protect routes
//   const authenticateToken = (req, res, next) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '');
  
//     if (!token) {
//       return res.status(401).json({ message: 'Access denied. No token provided.' });
//     }
  
//     try {
//       const verified = jwt.verify(token, JWT_SECRET);
//       req.user = verified; // Add user info to request
//       next();
//     } catch (error) {
//       res.status(400).json({ message: 'Invalid token' });
//     }
//   };
  
//   // Function to validate email format
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };
  
//   // Signup route
//   app.post('/signup', async (req, res) => {
//     const { name, email, password, role } = req.body;
  
//     // Validate email format
//     if (!validateEmail(email)) {
//       return res.status(400).json({ message: 'Invalid email format' });
//     }
  
//     try {
//       // Check if the email already exists in the User collection
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ message: 'User already exists' });
//       }
  
//       // Check if the email exists in the TempUser collection
//       const existingTempUser = await TempUser.findOne({ email });
//       if (existingTempUser) {
//         return res.status(200).json({ message: 'User already exists in TempUser' });
//       }
  
//       // If no existing user, create a new TempUser
//       const hashedPassword = await bcrypt.hash(password, 12);
//       const newTempUser = new TempUser({
//         name,
//         email,
//         password: hashedPassword,
//         role: role || 'user', // Default role as 'user'
//       });
  
//       await newTempUser.save();
//       res.status(201).json({ message: 'User created successfully, waiting for approval' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error creating user' });
//     }
//   });
  
//   // Login route
//   app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       // Find the user in the main User collection
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }
  
//       // Check if the password matches
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }
  
//       // Generate JWT token
//       const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  
//       // Send token and user info
//       res.json({ token, user });
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
  
//   // Route to check if the user exists in the TempUser collection
//   app.post('/api/check-temp-user', async (req, res) => {
//     const { email } = req.body;
  
//     try {
//       const tempUser = await TempUser.findOne({ email });
//       if (!tempUser) {
//         return res.status(404).json({ message: 'User not found in TempUser' });
//       }
  
//       res.status(200).json({ message: 'User found in TempUser collection' });
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
  
//   // Route to get all users in the TempUser collection (protected)
//   app.get('/api/temp-users', authenticateToken, async (req, res) => {
//     try {
//       const tempUsers = await TempUser.find({});
//       res.status(200).json(tempUsers);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching temp users' });
//     }
//   });
  
//   // Route to approve a temp user (move to main User collection)
//   app.post('/api/approve-user', authenticateToken, async (req, res) => {
//     const { id } = req.body;
    
//     try {
//       const tempUser = await TempUser.findById(id);
//       if (!tempUser) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       const newUser = new User({
//         name: tempUser.name,
//         email: tempUser.email,
//         password: tempUser.password,
//         role: tempUser.role,
//       });
  
//       await newUser.save();
//       await TempUser.findByIdAndDelete(id);
  
//       res.status(200).json({ message: 'User approved successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error approving user' });
//     }
//   });
  
//   // Route to reject a temp user (delete from TempUser collection)
//   app.post('/api/reject-user', authenticateToken, async (req, res) => {
//     const { id } = req.body;
  
//     try {
//       const tempUser = await TempUser.findById(id);
//       if (!tempUser) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       await TempUser.findByIdAndDelete(id);
//       res.status(200).json({ message: 'User rejected and deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error rejecting user' });
//     }
//   });


//   module.exports = { signup, login, getUserData, getAllUsers };




// Signup functionality
const signup = async (req, res) => {
    try {
        const { email, password, fullName } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password before saving the user
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            email,
            password: hashedPassword,
            fullName
        });

        await newUser.save();

        // Optionally, generate a JWT token upon signup
        const token = authMiddleware.generateToken({
            email: newUser.email,
            id: newUser._id
        });

        res.status(201).json({ message: 'Signup successful', token });
    } catch (error) {
        console.error('Signup error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if the password is correct
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = authMiddleware.generateToken({
            email: user.email,
            id: user._id
        });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const getUserData = async (req, res) => {
    try {
        const userEmail = req.decodedToken.email;
        const user = await User.findOne({
            email: userEmail
        });
        res.status(200).json({
            type: 'Success',
            data: user
        });
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Unauthorized' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error('Error retrieving users:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Export the signup function along with other functions
module.exports = { signup, login, getUserData, getAllUsers };







// const User = require('../models/userModel');
// const authMiddleware = require('../middleware/authMiddleware');


// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find the user by email
//         const user = await User.findOne({ email });

//         if (!user || user.password !== password) {
//             return res.status(401).json({ error: 'Invalid credentials' });
//         }

//         // Generate a JWT token
//         const token = authMiddleware.generateToken({
//             email: user.email,
//             id: user._id
//         });

//         res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//         console.error('Login error:', error.message);
//         res.status(500).json({ error: 'Server error' });
//     }
// };



// const getUserData = async (req, res) => {
//     try {
//         const userEmail = req.decodedToken.email;
//         const user = await User.findOne({
//             email: userEmail
//         });
//         res.status(200).json({
//             type: 'Success',
//             data: user
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(401).json({ error: 'Unauthorized' });
//     }
// };

// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.json(users);
//     } catch (error) {
//         console.error('Error retrieving users:', error.message);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// module.exports = { login, getUserData, getAllUsers };
