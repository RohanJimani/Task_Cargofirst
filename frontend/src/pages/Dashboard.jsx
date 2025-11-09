import React, { useState } from "react";
import axios from "axios";
import { Briefcase, Plus } from "lucide-react";
import "../styles/Dashboard.css";
import { AppSidebar } from "../components/AppSidebar";
import API from "../api/api";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [lastDate, setLastDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jobTitle || !jobDescription || !companyName || !lastDate) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const { data } = await API.post("/jobs", {
        jobTitle,
        jobDescription,
        companyName,
        lastDate,
      });

      alert("Job posted successfully!");
      console.log("New Job:", data);
      setJobTitle("");
      setJobDescription("");
      setCompanyName("");
      setLastDate("");
    } catch (error) {
      console.error("Error posting job:", error);
      alert(error.response?.data?.message || "Error posting job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <AppSidebar />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <Briefcase className="header-icon" />
          <h1>Job Recruitment Portal</h1>
        </header>

        <div className="dashboard-content">
          <div className="welcome-section">
            <h2>Welcome Back!</h2>
            <p>Post a new job opening and manage your listings</p>
          </div>

          <div className="job-card">
            <div className="job-card-header">
              <Plus className="plus-icon" />
              <div  className="Fill">
                <h3>Post a New Job</h3>
                <p>Fill in the details below to create a new job posting</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="job-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title *</label>
                  <input
                    id="jobTitle"
                    type="text"
                    placeholder="Senior Frontend Developer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Tech Corp Inc."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="jobDescription">Job Description *</label>
                <textarea
                  id="jobDescription"
                  placeholder="Describe the role, responsibilities, and requirements..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastDate">Last Date for Application *</label>
                <input
                  id="lastDate"
                  type="date"
                  value={lastDate}
                  onChange={(e) => setLastDate(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Posting..." : "Post Job"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
