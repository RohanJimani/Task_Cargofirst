import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Users, TrendingUp, CheckCircle } from "lucide-react";
import "../styles/Index.css";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="index-container">
        {/* <AppSidebar /> */}
      {/* Hero Section */}
      <div className="hero">
        <div className="icon-wrapper">
          <Briefcase className="h-12 w-12 text-white" />
        </div>
        <h1>Job Recruitment Portal</h1>
        <p>
          Streamline your hiring process with our powerful recruitment management
          platform. Post jobs, track applications, and analyze your recruitment
          performance all in one place.
        </p>
        <button onClick={() => navigate("/auth")}>Get Started</button>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        <div className="feature-card">
          <div className="icon-wrapper feature-blue">
            <Briefcase className="h-8 w-8 text-blue-600" />
          </div>
          <h3>Easy Job Posting</h3>
          <p>Create and manage job listings with a simple, intuitive interface.</p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper feature-green">
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <h3>Applicant Tracking</h3>
          <p>Keep track of all applications and manage your hiring pipeline easily.</p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper feature-indigo">
            <TrendingUp className="h-8 w-8 text-indigo-600" />
          </div>
          <h3>Analytics Dashboard</h3>
          <p>Gain insights into your recruitment performance with detailed analytics.</p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits">
        <h2>Why Choose Our Platform?</h2>
        <div className="benefit-list">
          {[
            "Streamlined job posting process",
            "Real-time application tracking",
            "Comprehensive analytics and reporting",
            "User-friendly dashboard interface",
            "Secure and reliable platform",
          ].map((benefit, index) => (
            <div key={index} className="benefit-item">
              <CheckCircle className="h-5 w-5" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
        <div className="benefits-button">
          <button onClick={() => navigate("/auth")}>
            Start Recruiting Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
