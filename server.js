//Dependencies
const express = require('express')
const fs = require("fs");
const util = require("util");

// HTML routes
const htmlRoutes = require("./routes/htmlRoutes");
// API routes
const apiRoutes = require("./routes/apiRoutes");

//Setting Up Server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Middleware
app.use(express.static("./develop/public"));


// API Route | Get&Post&DELETE request
app.use("/api", apiRoutes);
// HTML Routes
app.use("/", htmlRoutes);
// Server listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});