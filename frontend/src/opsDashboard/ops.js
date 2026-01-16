import { useState } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../opsDashboard/components/sidebar.js";
import "../opsDashboard/ops.css";

import Dashboard from "../opsDashboard/pages/dashboard.js";
import Users from "../opsDashboard/pages/users.js";
import Lenders from "../opsDashboard/pages/lenders.js";
import DSA from "../opsDashboard/pages/dsa.js";
import Settings from "../opsDashboard/pages/settings.js";
import Applications from "./pages/applications.js";

const Ops = () => {
  const [page, setPage] = useState("dashboard");
  const isAuth = localStorage.getItem("opsAuth");

  if (!isAuth) {
    return <Navigate to="/ops/login" />;
  }

  const renderPage = () => {
    switch (page) {
      case "users":
        return <Users />;
      case "lenders":
        return <Lenders />;
      case "dsa":
        return <DSA />;
      case "settings":
        return <Settings />;
      case "applications":
        return <Applications />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Sidebar setPage={setPage} activePage={page} />

      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

export default Ops;
