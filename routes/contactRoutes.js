const mongoose = require('mongoose');

const User = mongoose.model('User');
const Contact = mongoose.model('Contact');

//  Authenication for user if in session to access or change data
// const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    // Get All Contats
    app.get('/api/contacts', async (req, res) => {
        // console.log("contact Routes")
        const contacts = await Contact.find();
        res.send(contacts);
    });

    
    // Grab all USERS in DB
    app.get('/api/users', async (req, res) => {
        // console.log("contact Routes")
        const user = await User.find();
        res.send(user);
    });


    // Create Contact
    app.post('/api/contacts', async (req, res) => {
        const { firstName, lastName, phoneNumber } = req.body;
        const contact = new Contact({ 
            firstName,
            lastName,
            phoneNumber,
        });

        try {
            await contact.save();
            // console.log("saving new contact", contact);
            res.send(contact);
        } catch (err) {
            res.status(422).send(err);
        }
    }); 
    

    // Find a Contact
    app.get('/api/contacts/:contactId', async (req, res) => {
        // console.log(req.params.id)
        const oneContact = await Contact.findById(req.params.id);
        // console.log(oneContact);
        res.send(oneContact);

    })


    // Update a Contact
    app.get('/api/:contactId/edit', async (req, res) => {
        const updateContact = await Contact.findById(req.params.id);
        if (!updateContact) {
             res.status(404).send("data is not found");
        } 
        else {
                updateContact.firstName = req.body.firstName;
                updateContact.lastName = req.body.lastName;
                updateContact.phoneNumber = req.body.phoneNumber;
                try {
                    await updateContact.save();
                    // console.log("updating contact", updateContact);
                    res.send(updateContact);
                } catch (err) {
                    res.status(422).send(err);
                }
        }
    });


    // Delete Contact
    app.delete('/api/delete/:contactId', async (req, res) => {
        const deleteContact = await Contact.findById(req.params.id);
        res.send(deleteContact);
        // console.log('deleting contact success');
    })
};