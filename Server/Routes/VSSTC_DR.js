const express = require("express")

const router = express.Router();

router.get("/DemoRecord", (req, res, next) => {});

router.post("/DemoRecord", (req, res, next) => {});

router.delete("/DemoRecord/:id", (req, res, next) => {})

module.exports = router;

const DemoRecord = require("../Models/VSSTC_DR");

router.get("/DemoRecord", (req, res, next) => {

    DemoRecord.find({}, "action")
    .then(data => res.json(data))
.catch(next)
});

router.post("/DemoRecord", (req, res, next) => {
    if(req.body.action){
        DemoRecord.create(req.body)
    .then(data => res.json(data))
    .catch(next)
    }else {
    res.json({
    error: 'The input field is empty'
    })
    }
    });

    router.delete("/DemoRecord/:id", (req, res, next) => {
        DemoRecord.findOneAndDelete({'_id': req.params.id})
        .then(data => res.json(data))
        .catch(next)
        })