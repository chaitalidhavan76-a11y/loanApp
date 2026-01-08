import { FaHome, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ setPage, activePage }) => {
  return (
    <aside className="dsa-sidebar">
      <h2 className="logo">DSA Dashboard</h2>

      <div className="menu">
        <button
          className={`menu-item ${activePage === "dsa" ? "active" : ""}`}
          onClick={() => setPage("dsa")}
        >
          <FaHome />
          Dashboard
        </button>

        <button
          className={`menu-item ${activePage === "applications" ? "active" : ""}`}
          onClick={() => setPage("applications")}
        >
          <FaFileAlt />
          Applications
        </button>
      </div>

      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
