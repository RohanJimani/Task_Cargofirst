import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Calendar, Building2, Edit } from "lucide-react";
import "../styles/Jobs.css";
import { AppSidebar } from "../components/AppSidebar";
import API from "../api/api";
import { Briefcase, Plus } from "lucide-react";



const Jobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [editForm, setEditForm] = useState({
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    lastDate: "",
  });

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await API.get("/jobs");
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Delete job
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await API.delete(`/jobs/${id}`);
        setJobs(jobs.filter((job) => job._id !== id));
        alert("Job deleted successfully!");
      } catch (error) {
        alert(error.response?.data?.message || "Error deleting job");
      }
    }
  };

  // Start editing job
  const handleEdit = (job) => {
    setEditingJob(job._id);
    setEditForm({
      jobTitle: job.jobTitle,
      jobDescription: job.jobDescription,
      companyName: job.companyName,
      lastDate: new Date(job.lastDate).toISOString().split('T')[0], // Format for date input
    });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingJob(null);
    setEditForm({
      jobTitle: "",
      jobDescription: "",
      companyName: "",
      lastDate: "",
    });
  };

  // Update job
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.put(`/jobs/${editingJob}`, editForm);
      setJobs(jobs.map((job) => (job._id === editingJob ? data : job)));
      alert("Job updated successfully!");
      cancelEdit();
    } catch (error) {
      alert(error.response?.data?.message || "Error updating job");
    }
  };

  return (
    <div className="jobs-container">
      <AppSidebar />

      <main className="jobs-main">
        <header className="jobs-header">
        <Briefcase className="header-icon" />
          <h1>Posted Jobs</h1>
        </header>

        <div className="jobs-content">
          <div className="welcome-section">
            <h2>Your Job Postings</h2>
            <p>Manage all your active job listings</p>
          </div>

          {loading ? (
            <p className="loading">Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <div className="empty-card">
              <Briefcase className="empty-icon" />
              <p>No jobs posted yet</p>
              <button onClick={() => (window.location.href = "/dash")}>
                Post Your First Job
              </button>
            </div>
          ) : (
            <div className="jobs-grid">
              {jobs.map((job) => (
                <div key={job._id} className="job-card">
                  {editingJob === job._id ? (
                    <form onSubmit={handleUpdate} className="edit-form">
                      <div className="form-group">
                        <label>Job Title</label>
                        <input
                          type="text"
                          value={editForm.jobTitle}
                          onChange={(e) => setEditForm({ ...editForm, jobTitle: e.target.value })}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Company Name</label>
                        <input
                          type="text"
                          value={editForm.companyName}
                          onChange={(e) => setEditForm({ ...editForm, companyName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Job Description</label>
                        <textarea
                          value={editForm.jobDescription}
                          onChange={(e) => setEditForm({ ...editForm, jobDescription: e.target.value })}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Date</label>
                        <input
                          type="date"
                          value={editForm.lastDate}
                          onChange={(e) => setEditForm({ ...editForm, lastDate: e.target.value })}
                          required
                        />
                      </div>
                      <div className="form-actions">
                        <button type="submit" className="save-btn">Save</button>
                        <button type="button" onClick={cancelEdit} className="cancel-btn">Cancel</button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div className="job-card-header">
                        <div className="job-info">
                          <h3>{job.jobTitle}</h3>
                          <p>
                            <Building2 className="icon" />
                            {job.companyName}
                          </p>
                        </div>
                        <div className="job-actions">
                          <button className="edit-btn" onClick={() => handleEdit(job)}>
                            <Edit className="icon" />
                          </button>
                          <button className="delete-btn" onClick={() => handleDelete(job._id)}>
                            <Trash2 className="icon" />
                          </button>
                        </div>
                      </div>
                      <div className="job-card-content">
                        <p>{job.jobDescription}</p>
                        <p className="deadline">
                          <Calendar className="icon" />
                          Application Deadline:{" "}
                          {new Date(job.lastDate).toLocaleDateString()}
                        </p>
                        <span className="posted-date">
                          Posted on {new Date(job.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Jobs;
