import Sidebar from "../DSAdashboard/components/sidebar";
import Dashboard from "../DSAdashboard/components/Dsa";
import Applications from "../DSAdashboard/components/dsaApplications";
import "../DSAdashboard/dsa.css";
import { useState } from "react";

function DsaLayout() {
  const [page, setPage] = useState("dsa");

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
