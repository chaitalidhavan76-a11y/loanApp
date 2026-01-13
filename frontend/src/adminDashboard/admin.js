import { useState } from "react";
import Sidebar from "./components/sidebar.js";
import Dashboard from "./pages/dashboard.js";
import Users from "./pages/user.js";
import Applications from "./pages/application.js";
import Lenders from "./pages/lender.js";
import Dsas from "./pages/dsa.js";
import Settings from "./pages/settings.js";
import "./admin.css";

const AdminApp = () => {
  const [page, setPage] = useState("admin");

  const renderPage = () => {
    switch (page) {
      case "users": return <Users />;
      case "applications": return <Applications />;
      case "lenders": return <Lenders />;
      case "dsas": return <Dsas />;
      case "settings": return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="admin-container">
      <Sidebar setPage={setPage} />
      <div className="admin-main">
        <div className="admin-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default AdminApp;
