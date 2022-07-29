const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Patient = require('../models/Patient')

router.get("/", (req, res) => {
  res.render("index", { title: " Login" });
});

router.post("/", async (req, res) => {
    try {
      const newPatient = new Patient(req.body);
      await newPatient.save();
      console.log(newPatient);
    } catch (error) {
      res.status(400).send("failed to register Patient");
      console.log(error);
    }
    res.redirect('/patient');
  });

module.exports = router;