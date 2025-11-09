const express = require("express");
const router = express.Router();
const { getJobs, createJob, deleteJob, updateJob } = require("../controllers/jobsController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getJobs).post(protect, createJob);
router.route("/:id").delete(protect, deleteJob).put(protect, updateJob);

module.exports = router;
