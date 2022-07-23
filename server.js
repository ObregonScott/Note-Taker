//Dependencies
const fs = require('fs');
const express = require('express');

const path = require('path');
const util = require('util')

//Server SetUp
const app = express();
const PORT = process.env.PORT || 3001;