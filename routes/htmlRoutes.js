const router = require('express').Router();
const path = require('path');

// GET notes HTML page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

// GET the static index HTML page on http://localhost/ when no specific route is given
router.get('*', (req, res) => {
    res.sendFile(__dirname, "./Develop/public/index.html");
})

module.exports = router;