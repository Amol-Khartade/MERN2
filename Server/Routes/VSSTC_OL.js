const express = require("express")

const router = express.Router();

router.get("/OfferLetter", (req, res, next) => {});

router.post("/OfferLetter", (req, res, next) => {});

router.delete("/OfferLetter/:id", (req, res, next) => {})

module.exports = router;

const OfferLetter = require("../Models/VSSTC_OL");

router.get("/OfferLetter", (req, res, next) => {

    OfferLetter.find({}, "action")
    .then(data => res.json(data))
.catch(next)
});

router.post("/OfferLetter", (req, res, next) => {
    if(req.body.action){
        OfferLetter.create(req.body)
    .then(data => res.json(data))
    .catch(next)
    }else {
    res.json({
    error: 'The input field is empty'
    })
    }
    });

    router.delete("/OfferLetter/:id", (req, res, next) => {
        OfferLetter.findOneAndDelete({'_id': req.params.id})
        .then(data => res.json(data))
        .catch(next)
        })
