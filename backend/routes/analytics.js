const express = require("express");
const router = express.Router();
const { getJobCount, getMonthlyApplications } = require("../controllers/analyticsController");
const { protect } = require("../middleware/authMiddleware");

router.get("/jobs/count", protect, getJobCount);
router.get("/applications/monthly", protect, getMonthlyApplications);

module.exports = router;
