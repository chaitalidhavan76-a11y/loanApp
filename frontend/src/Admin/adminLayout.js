import "../Admin/admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../Admin/components/sidebar';
import Applications from '../Admin/pages/applications';
import Queries from '../Admin/pages/contactQuery';
import Overview from '../Admin/pages/overview';
import Settings from '../Admin/pages/settings';

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminLayout() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: "240px" }}>
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="applications" element={<Applications />} />
          <Route path="query" element={<Queries />} />
          <Route path="settings" element={<Settings theme={theme} setTheme={setTheme} />} />
          <Route path="*" element={<Navigate to="overview" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminLayout;
