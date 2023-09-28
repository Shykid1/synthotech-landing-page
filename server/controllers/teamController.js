const Team = require("../models/teamModel");

exports.getteam = async (req, res) => {
    try {
      const team = await Team.find();
      res.render("index", { team: team });
    } catch (error) {
      console.log(error);
      // res.status(500).json(`fail to get teams  `)
    }
  };

exports.getteamById = async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      res.render("detail", { team: team });
    } catch (error) {
      res.status(500).json(`fail to get team  `);
    }
  };

exports.getupdatepage = async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      res.render("update", { team: team });
    } catch (error) {
      console.log(error);
    }
  };
  

exports.deleteById = async (req, res) => {
    try {
      // Find the team by ID in the database
      const team = await Team.findById(req.params.id);
  
      const imageFileName = team.image;
      const imagePath = path.join(
        __dirname,
        "../../public/uploads/teamimg/" + imageFileName
      );
  
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Image file deleted");
        }
      });
  
      // Find the team by ID and delete it
      await Team.findByIdAndDelete(req.params.id);
      res.redirect("/api/team");
    } catch (error) {
      res.status(500).json(`An error occured while deleting team ${error}`);
    }
  };
  