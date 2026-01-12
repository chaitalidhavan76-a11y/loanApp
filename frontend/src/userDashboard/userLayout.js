import Sidebar from "./components/sidebar.js";
import Dashboard from "./components/user.js";
import Profile from "./components/profile.js";
import "../userDashboard/user.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="dashboard-container">
      <Sidebar setPage={setPage} />

      <div className="dashboard-page">
        <div className="dashboard-inner">
          {page === "dashboard" && <Dashboard />}
          {page === "profile" && <Profile />}
        </div>
      </div>
    </div>
  );
}

export default App;

