import "../lendersDashboard/lender.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar";
import Applications from "./pages/applications";
import Queries from "./pages/contactQuery";
import Overview from "./pages/overview";
import Settings from "./pages/settings";

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LenderLayout() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const token = localStorage.getItem("lenderToken");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🔐 PROTECT ROUTE
  if (!token) {
    return <Navigate to="/lender-login" replace />;
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <Routes>
          {/* 🔥 DEFAULT DASHBOARD */}
          <Route index element={<Navigate to="overview" replace />} />

          <Route path="overview" element={<Overview />} />
          <Route path="applications" element={<Applications />} />
          <Route path="query" element={<Queries />} />
          <Route
            path="settings"
            element={<Settings theme={theme} setTheme={setTheme} />}
          />

          {/* 🔁 FALLBACK */}
          <Route path="*" element={<Navigate to="overview" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default LenderLayout;
