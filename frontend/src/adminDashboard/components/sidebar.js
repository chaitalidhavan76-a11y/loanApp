import { FiHome, FiUsers, FiFileText, FiBriefcase, FiSettings, FiLogOut } from "react-icons/fi";

const Sidebar = ({ setPage }) => {
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/admin/login";
  };

  return (
    <aside className="admin-sidebar">
      <h2 className="logo">Admin</h2>

      <nav className="menu">
        <button onClick={() => setPage("dashboard")}><FiHome /> Dashboard</button>
        <button onClick={() => setPage("users")}><FiUsers /> Users</button>
        <button onClick={() => setPage("applications")}><FiFileText /> Applications</button>
        <button onClick={() => setPage("lenders")}><FiBriefcase /> Lenders</button>
        <button onClick={() => setPage("dsas")}><FiUsers /> DSAs</button>
        <button onClick={() => setPage("settings")}><FiSettings /> Settings</button>
      </nav>

      <button className="logout" onClick={handleLogout}>
        <FiLogOut /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
