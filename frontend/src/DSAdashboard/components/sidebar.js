import { FaHome, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ setPage, activePage }) => {
 const handleLogout = () => {
  localStorage.removeItem("dsaAuth");
  window.location.href = "/dsa/login";
};

  return (
    <aside className="dsa-sidebar">
      <h2 className="dsalogo">DSA Dashboard</h2>

      <div className="dsamenu">
        <button
          className={`dsamenu-item ${activePage === "dsa" ? "active" : ""}`}
          onClick={() => setPage("dsa")}
        >
          <FaHome />
          Dashboard
        </button>

        <button
          className={`dsamenu-item ${activePage === "applications" ? "active" : ""}`}
          onClick={() => setPage("applications")}
        >
          <FaFileAlt />
          Applications
        </button>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
