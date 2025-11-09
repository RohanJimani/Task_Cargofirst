import React, { useState } from "react";
import { Briefcase, TrendingUp, Users, FileText } from "lucide-react";
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/Analytics.css";
import { AppSidebar } from "../components/AppSidebar";


// Dummy data for charts
const jobPostingsData = [
  { month: "Jan", count: 12 },
  { month: "Feb", count: 19 },
  { month: "Mar", count: 15 },
  { month: "Apr", count: 25 },
  { month: "May", count: 22 },
  { month: "Jun", count: 30 },
];

const applicationsData = [
  { month: "Jan", applications: 45 },
  { month: "Feb", applications: 52 },
  { month: "Mar", applications: 49 },
  { month: "Apr", applications: 68 },
  { month: "May", applications: 71 },
  { month: "Jun", applications: 85 },
];

const Analytics = () => {
  const [totalJobs, setTotalJobs] = useState(36); // Placeholder value

  return (
    <div className="analytics-container">
        <AppSidebar />
     

      <main className="analytics-main">
        <header className="analytics-header">
          <Briefcase className="header-icon" />
          <h1>Customer Analysis</h1>
          
        </header>

        <div className="analytics-content">
          <div className="welcome-section">
            <h2>Analytics Dashboard</h2>
            <p>Track your recruitment performance</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-header">
                <span>Total Jobs Posted</span>
                <FileText className="icon" />
              </div>
              <div className="stat-value">{totalJobs}</div>
              <div className="stat-sub">Active job listings</div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span>Total Applications</span>
                <Users className="icon" />
              </div>
              <div className="stat-value">370</div>
              <div className="stat-sub">
                <span className="text-success">+12%</span> from last month
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span>Avg. Applications/Job</span>
                <TrendingUp className="icon" />
              </div>
              <div className="stat-value">15.4</div>
              <div className="stat-sub">
                <span className="text-success">+8%</span> from last month
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="charts-grid">
            <div className="chart-card">
              <h3>Job Postings Over Time</h3>
              <p>Monthly job posting trends</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={jobPostingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#2563eb" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Applications Received</h3>
              <p>Monthly application trends</p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={applicationsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="applications" stroke="#16a34a" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
