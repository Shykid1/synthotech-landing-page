const Contact = require("../models/contactModel");

// Posting contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      message,
    });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: "Failed to send a Contact" });
  }
};

// Getting all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};
