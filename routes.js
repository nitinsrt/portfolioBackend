const express = require("express");
const experienceController = require("./controllers/experienceController");
const educationController = require("./controllers/educationController");
const projectController = require("./controllers/projectsController");
const skillsController = require("./controllers/skillsController");
const healthController = require('./controllers/healthController')

const router = express.Router();

router.get("/experience", experienceController.getAllExperience);
router.get("/education", educationController.getEducation);
router.get("/projects", projectController.getAllProjects);
router.get("/skills", skillsController.getAllSkills);
router.get('/', healthController.getHealthStatus)

module.exports = router;
