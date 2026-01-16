import Sidebar from "./components/sidebar.js";
import Dashboard from "./components/Dsa.js";
import Applications from "./components/dsaApplications.js";
import "../DSAdashboard/dsa.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";


function DsaLayout() {
  const [page, setPage] = useState("dsa");
  const isAuth = localStorage.getItem("dsaAuth");

  if (!isAuth) {
    return <Navigate to="/dsa/login" />;
  }



  return (
    <div className="dsa-layout">
      <Sidebar setPage={setPage} activePage={page} />

      <div className="dsa-page">
        <div className="dsa-inner">
          {page === "dsa" && <Dashboard />}
          {page === "applications" && <Applications />}
        </div>
      </div>
    </div>
  );
}

export default DsaLayout;
