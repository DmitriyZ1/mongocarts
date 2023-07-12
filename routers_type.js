const express = require("express");
const router = express.Router();

const Test = require("./models/test.js")

router.get('/carts', (req, res) => {
    Test
        .find()
        .then(data =>{            
            res
                .status(200)
                .json(data)
        })
        .catch(er => {
            res
                .status(500)
                .json({error: er})
        })
});

router.get('/edit/ed/:id', (req, res) => {
    Test
    .findById(req.params.id)
    .then((elem) => {
        res
        .status(200)
        .json(elem)
    })
    .catch(() => {
        res
        .status(500)
        .json({error: "fatal"})
    })
})

router.get('/name/:id', (req, res) => {
    Test
    .findById(req.params.id)
    .then((elem) => {
        const titledoc = elem.title;
        console.log(titledoc)
        res
        .status(200)
        .json(titledoc)
    })
    .catch(() => {
        res
        .status(500)
        .json({error: "fatal"})
    })
})

router.patch('/edit', (req, res) => {
    Test
        .findByIdAndUpdate(req.body.id, req.body)
        .then((result) => {
            res
            .status(200)
            .json(result)
        })
        .catch(() => {
            res
            .status(500)
            .json({error: "fatal"})
        })
})

router.post('/new', (req, res) => {
    const test = new Test(req.body);
    test
        .save()
        .then((result) => {
            res
            .status(200)
            .json(result)
        })
        .catch(() => {
            res
            .status(500)
            .json({error: "fatal"})
        })
})

router.delete('/del/:id', (req, res) => {
    Test
    .findByIdAndDelete(req.params.id)
    .then((elem) => {
        res
        .status(200)
        .json(elem)
    })
    .catch(() => {
        res
        .status(500)
        .json({error: "fatal"})
    })
})

module.exports = router;
