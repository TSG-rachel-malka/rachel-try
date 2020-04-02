const express = require("express");


const IncidentController = require("../controllers/incident");

const router = express.Router();

router.post("", IncidentController.createIncident);

/*router.put("/:id", checkAuth, extractFile, PostController.editPost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);*/

module.exports = router;
