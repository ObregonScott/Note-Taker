//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
