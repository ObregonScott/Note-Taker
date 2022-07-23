const router = require('express').Router();
const path = require('path');

// GET notes HTML page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
 });
router.get('*', (req, res) => {
    res.sendFile(__dirname, ".s/Develop/public/index.html");
})

module.exports = router;