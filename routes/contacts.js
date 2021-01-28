const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route GET api/contacts
// @desc  Get all users contacts ( current user)
// @access Private ( need to be logged in as user to interact)
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST Add contact
// @desc  Add new contact
// @access Private ( user should be logged in to interact)
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
   async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {name,email,phone,type} = req.body;
    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();

        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
  }
);

// @route PUT api/contacts/:id
// @desc  Update contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

// @route Delete request
// @desc  Delete Contact
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
