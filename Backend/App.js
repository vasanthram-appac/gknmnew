var dotenv = require('dotenv');
var path = require('path');
var cors = require('cors');
var express = require('express');
var app = express();

// Import routes
// const loginRoutes = require('./routes/register');
const adminbackendroute = require('../Backend/Admin/Route/adminbackendroute');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'Config', '.env') });

// Connect to the database
const connectDb = require('./Config/Connection');
connectDb();

// Middleware
app.use(cors());
app.use(express.json());



// Register routes
// app.use('/',productRoutes);
// app.use('/',loginRoutes);
app.use("/", adminbackendroute);


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
