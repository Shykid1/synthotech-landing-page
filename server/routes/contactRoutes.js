const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.post("/create", contactController.createContact);
router.get("/", contactController.getContacts);

module.exports = router;
