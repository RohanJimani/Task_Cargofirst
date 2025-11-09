const Job = require("../models/Job");

// Total jobs
const getJobCount = async (req, res) => {
  const count = await Job.countDocuments({ createdBy: req.user._id });
  res.json({ totalJobs: count });
};

// Monthly applications dummy data (can extend)
const getMonthlyApplications = async (req, res) => {
  // Here you can calculate real application stats if you have applications collection
  res.json([
    { month: "Jan", applications: 45 },
    { month: "Feb", applications: 52 },
    { month: "Mar", applications: 49 },
    { month: "Apr", applications: 68 },
    { month: "May", applications: 71 },
    { month: "Jun", applications: 85 },
  ]);
};

module.exports = { getJobCount, getMonthlyApplications };
