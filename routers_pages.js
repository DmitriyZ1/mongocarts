const express = require("express");
const router = express.Router();

router.get('/', function(req,res) {                   
    res.sendFile(__dirname +'/client/pages/index/in.html');
});

router.get('/edit/:id', function(req,res) {                   
    res.sendFile(__dirname +'/client/pages/edit/edit.html');
});

router.get('/new', function(req, res) {
    res.sendFile(__dirname + '/client/pages/newdoc/newdoc.html');
})

router.get('/del/:id', function(req, res) {
    res.sendFile(__dirname + '/client/pages/del/del.html');
})

module.exports = router;