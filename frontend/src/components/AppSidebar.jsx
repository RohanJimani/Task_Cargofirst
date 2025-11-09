import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Briefcase, FileText, User, BarChart3, LogOut } from "lucide-react";
import "../styles/AppSidebar.css";
import API from "../api/api";

const items = [
  { title: "Dashboard", url: "/dash", icon: Briefcase },
  { title: "Job Posted", url: "/jobs", icon: FileText },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Customer Analysis", url: "/analytics", icon: BarChart3 },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🧹 Clear auth data
    localStorage.removeItem("user");
    sessionStorage.clear();

    alert("Logged out successfully!");

    // ✅ Client-side navigation (no backend call)
    navigate("/auth");
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && <h2>Navigation</h2>}
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "▶" : "◀"}
        </button>
      </div>

      <nav className="sidebar-menu">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? "active" : ""}`
              }
            >
              <Icon className="sidebar-icon" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-item logout" onClick={handleLogout}>
          <LogOut className="sidebar-icon" />
          {!collapsed && <span>Logout</span>}
        </div>
      </div>
    </aside>
  );
}
