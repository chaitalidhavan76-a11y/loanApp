import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FiSettings, FiLogOut } from "react-icons/fi";

export default function Sidebar({ setAuth }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.startsWith(path);

  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login"); 
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Lenders Dashboard</h2>

      <ul className="sidebar-menu">

        <li className={isActive("/admin/overview") ? "active" : ""}>
          <Link to="/admin/overview"><MdDashboard /> Overview</Link>
        </li>

        <li className={isActive("/admin/applications") ? "active" : ""}>
          <Link to="/admin/applications"><RiFileList2Line /> Applications</Link>
        </li>

        {/*<li className={isActive("/admin/query") ? "active" : ""}>
          <Link to="/admin/query"><BiMessageDetail /> Queries</Link>
        </li>*/}

        <li className={isActive("/admin/settings") ? "active" : ""}>
          <Link to="/admin/settings"><FiSettings /> Settings</Link>
        </li>

      </ul>

      <div className="sidebar-footer" onClick={logoutAdmin}>
        <FiLogOut /> Logout
      </div>
    </div>
  );
}
