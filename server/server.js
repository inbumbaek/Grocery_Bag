const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

require("./config/mongoose.config");

// const cookieParser = require('cookie-parser')
// require('dotenv').config();
// app.use(cors({credentials:true, origin:'http://localhost:3000'}));

app.use(express.json(), express.urlencoded({ extended: true }));
// app.use(cookieParser())
    
const GroceryRoutes = require("./routes/groceryRoutes");
GroceryRoutes(app);

// const UserRoutes = require('./routes/userRoutes');
// UserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));