const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Service = require("../models/serviceModel");
const serviceController = require("../controllers/serviceController");

const router = express.Router();

// Using multer middleware to save uploaded image to the uploads in the folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads/serviceimg");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + "_" + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.get("/", serviceController.getService);
router.get("/:id", serviceController.getServiceById);
router.get("/update/:id", serviceController.getupdatepage);
router.get("/delete/:id", serviceController.deleteById);

router.post("/update/:id", upload.single("image"), async (req, res) => {
  const { name, description } = req.body;
  const image = req.file ? req.file.filename : req.body.oldimage;
  const serviceId = req.params.id;
  try {
    const service = await Service.findById(serviceId);

    if (!service) {
      res.status(404).json(`Service Not found  `);
    }

    // Remove the old image if a new image is uploaded
    if (image && image !== service.image) {
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
    } else {
      service.name = name;
      service.description = description;
      service.image = image;

      await service.save();
      res.redirect("/api/service");
      console.log(`service updated successfully  `);
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/create", upload.single("image"), async (req, res) => {
  const { name, description } = req.body;
  const image = req.file.filename;

  try {
    const services = new Service({
      name: name,
      description: description,
      image: image,
    });

    await services.save();
    res.redirect("/api/service");
  } catch (error) {
    console.log(error);
    res.status(500).json(`fail to post services  `);
  }
});

module.exports = router;
