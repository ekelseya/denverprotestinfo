const express = require("express");
const router = express.Router();
const Organization = require("../models/org");

router.get("/", function (req, res) {
    res.render("landing")
});

router.get("/groups", function (req, res) {
    Organization.find({}, function (err, organization) {
        if (err) {
            console.log(err);
        } else {
            res.render("orgs/index", {organization: organization})
        }
    })
});

router.post("/groups", isLoggedIn, function (req, res) {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const contact = req.body.contact;

    const newOrganization = {name: name, image: image, description: description, contact: contact};
    Organization.create(newOrganization, function (err) {
        if (err){
            console.log(err);
        } else {
            res.redirect("/groups");
        }
    })
});

router.get("/groups/new", isLoggedIn, function (req, res) {
    res.render("groups/new")
});

router.get("/groups/:id", function (req, res) {
    Organization.findById(req.params.id, function (err, requestedOrganization){
        if (err) {
            console.log(err);
        } else {
            res.render("groups/show", {organization: requestedOrganization})
        }
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next;
    }
    res.redirect("/login");
}

module.exports = router;