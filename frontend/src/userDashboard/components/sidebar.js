import { FiHome, FiUser, FiLogOut } from "react-icons/fi";

const Sidebar = ({ setPage }) => {
  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <aside className="usersidebar">
      <div className="sidebar-menu">
        <div
          className="sidebar-item"
          onClick={() => setPage("dashboard")}
        >
          <FiHome /> Dashboard
        </div>

        <div
          className="sidebar-item"
          onClick={() => setPage("profile")}
        >
          <FiUser /> Profile
        </div>
      </div>

      <div className="sidebar-logout-text" onClick={handleLogout}>
        <FiLogOut /> Logout
      </div>
    </aside>
  );
};

export default Sidebar;
