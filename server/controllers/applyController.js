const Application = require('../models/applyModel');

// Create Application
exports.createApplication = async (req, res) => {
    const {first_name, last_name, email, phone, service} = req.body;
    try {
        const newApplication = new Application({
            first_name,
            last_name,
            email,
            phone,
            service
        });
        await newApplication.save();
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(500).json({ error: 'Failed to Apply' })
    }
}

// Get all Applications
exports.getAllApplications = async (req, res) => {
    try {
        const applicaion = await Application.find();
        res.status(200).json(applicaion);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch applications' })
    }
}