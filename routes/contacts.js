const express = require('express');
const router = express.Router();


// @route GET api/contacts
// @desc  Get all users contacts ( current user)
// @access Private ( need to be logged in as user to interact)
router.get('/', (req, res) => {
    res.send('Get all contacts');
});



// @route POST Add contact
// @desc  Add new contact
// @access Private ( user should be logged in to interact)
router.post('/', (req, res) => {
    res.send('Add Contact');
});




// @route PUT api/contacts/:id
// @desc  Update contact
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update Contact');
});



// @route Delete request
// @desc  Delete Contact
router.delete('/:id', (req, res) => {
    res.send('Delete Contact');
});




module.exports = router;