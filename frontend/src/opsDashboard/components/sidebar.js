import { FiHome, FiUsers, FiFileText, FiBriefcase, FiSettings, FiLogOut } from "react-icons/fi";

const Sidebar = ({ setPage, activePage }) => {
  const handleLogout = () => {
    localStorage.removeItem("opsAuth");
    window.location.href = "/ops/login";
  };

  return (
    <aside className="opsSidebar">
      <h2 className="logo">OPS Dashboard</h2>

      <nav className="menu">
        <button
          className={activePage === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          <FiHome /> Dashboard
        </button>

        <button
          className={activePage === "users" ? "active" : ""}
          onClick={() => setPage("users")}
        >
          <FiUsers /> Users
        </button>

        <button
          className={activePage === "applications" ? "active" : ""}
          onClick={() => setPage("applications")}
        >
          <FiFileText /> Applications
        </button>

        <button
          className={activePage === "lenders" ? "active" : ""}
          onClick={() => setPage("lenders")}
        >
          <FiBriefcase /> Lenders
        </button>

        <button
          className={activePage === "dsa" ? "active" : ""}
          onClick={() => setPage("dsa")}
        >
          <FiUsers /> DSAs
        </button>

        <button
          className={activePage === "settings" ? "active" : ""}
          onClick={() => setPage("settings")}
        >
          <FiSettings /> Settings
        </button>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        <FiLogOut /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
