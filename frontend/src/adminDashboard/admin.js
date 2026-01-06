import { useState } from "react";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Users from "./pages/user";
import Applications from "./pages/application";
import Lenders from "./pages/lender";
import Dsas from "./pages/dsa";
import Settings from "./pages/settings";
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
