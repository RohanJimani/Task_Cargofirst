import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";
import "../styles/Auth.css";
import API from "../api/api";

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(data));
      alert("Login successful!");
      navigate("/dash");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/auth/register", { fullName, email, password });
      localStorage.setItem("user", JSON.stringify(data));
      alert("Account created successfully!");
      setTab("signin");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
        {/* <AppSidebar /> */}
      <div className="auth-card">
        <div className="auth-header">
          <div className="icon-wrapper">
            <Briefcase className="icon" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
          </div>
          <h2>Job Recruitment Portal</h2>
          <p>Sign in to manage your job postings</p>
        </div>

        <div className="auth-tabs">
          <div
            className={`auth-tab signin ${tab === "signin" ? "active" : ""}`}
            onClick={() => setTab("signin")}
          >
            Sign In
          </div>
          <div
            className={`auth-tab signup ${tab === "signup" ? "active" : ""}`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </div>
        </div>

        {tab === "signin" && (
          <form onSubmit={handleSignIn} className="auth-form">
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        )}

        {tab === "signup" && (
          <form onSubmit={handleSignUp} className="auth-form">
            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
