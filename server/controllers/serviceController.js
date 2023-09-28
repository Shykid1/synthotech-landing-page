const Service = require("../models/serviceModel");
const path = require("path");
const fs = require("fs");

exports.getService = async (req, res) => {
  try {
    const services = await Service.find();
    res.render("index", { services: services });
  } catch (error) {
    console.log(error);
    // res.status(500).json(`fail to get services  `)
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.render("detail", { service: service });
  } catch (error) {
    res.status(500).json(`fail to get service  `);
  }
};
exports.getupdatepage = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.render("update", { service: service });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteById = async (req, res) => {
  try {
    // Find the service by ID in the database
    const service = await Service.findById(req.params.id);

    const imageFileName = service.image;
    const imagePath = path.join(
      __dirname,
      "../../public/uploads/serviceimg/" + imageFileName
    );

    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Image file deleted");
      }
    });

    // Find the service by ID and delete it
    await Service.findByIdAndDelete(req.params.id);
    res.redirect("/api/service");
  } catch (error) {
    res.status(500).json(`An error occured while deleting service ${error}`);
  }
};
