import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

export default function Sidebar({ setAuth }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.startsWith(path);

  const logoutlender = () => {
    localStorage.removeItem("adminToken");
    navigate("/lender-login"); 
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Lenders Dashboard</h2>

      <ul className="sidebar-menu">

        <li className={isActive("/lender/overview") ? "active" : ""}>
          <Link to="/admin/overview"><MdDashboard /> Overview</Link>
        </li>

        <li className={isActive("/lender/applications") ? "active" : ""}>
          <Link to="/lender/applications"><RiFileList2Line /> Applications</Link>
        </li>

        <li className={isActive("/admin/users") ? "active" : ""}>
          <Link to="/admin/users"><FaUsers />Users</Link>
        </li>

        {/*<li className={isActive("/admin/query") ? "active" : ""}>
          <Link to="/admin/query"><BiMessageDetail /> Queries</Link>
        </li>*/}

        <li className={isActive("/lender/settings") ? "active" : ""}>
          <Link to="/lender/settings"><FiSettings /> Settings</Link>
        </li>

      </ul>

      <div className="sidebar-footer" onClick={logoutlender}>
        <FiLogOut /> Logout
      </div>
    </div>
  );
}
