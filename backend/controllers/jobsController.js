const Job = require("../models/Job");

// Get all jobs
const getJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user._id }).sort({ createdAt: -1 });
  res.json(jobs);
};

// Create job
const createJob = async (req, res) => {
  const { jobTitle, jobDescription, companyName, lastDate } = req.body;
  const job = await Job.create({
    jobTitle,
    jobDescription,
    companyName,
    lastDate,
    createdBy: req.user._id,
  });
  res.status(201).json(job);
};

// Delete job
const deleteJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });

  if (job.createdBy.toString() !== req.user._id.toString())
    return res.status(401).json({ message: "Not authorized" });

  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job removed" });
};

// Update job
const updateJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });

  if (job.createdBy.toString() !== req.user._id.toString())
    return res.status(401).json({ message: "Not authorized" });

  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedJob);
};

module.exports = { getJobs, createJob, deleteJob, updateJob };
