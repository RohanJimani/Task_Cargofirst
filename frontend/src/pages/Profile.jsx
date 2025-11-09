import React, { useState, useEffect } from "react";
import { User as UserIcon, Mail, Save } from "lucide-react";
import "../styles/Profile.css";
import { AppSidebar } from "../components/AppSidebar";
import { Briefcase, Plus } from "lucide-react";



const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setEmail(parsedUser.email);
      setFullName(parsedUser.fullName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Profile updated successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="profile-container">
        <AppSidebar />
      

      <main className="profile-main">
        <header className="profile-header">
          {/* <UserIcon className="header-icon" /> */}
          <Briefcase className="header-icon" />
          <h1>Profile</h1>
        </header>

        <div className="profile-content">
          <div className="welcome-section">
            <h2>Your Profile</h2>
            <p>Manage your account information</p>
          </div>

          <div className="profile-card">
            <div className="profile-card-header">
              <UserIcon className="card-icon" />

              <div>
                <h3>Personal Information</h3>
                <p>Update your profile details</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="email-label">
                  <Mail className="icon" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  disabled
                  className="disabled-input"
                />
                <p className="email-note">Email cannot be changed</p>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                <Save className="icon-btn" />
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
