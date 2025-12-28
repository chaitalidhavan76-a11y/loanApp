import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="sidebar">
  

      <ul className="sidebar-menu">
        <li className="active">
          <FaHome />
          <span>Dashboard</span>
        </li>

        <li>
          <FaUser />
          <span>Profile</span>
        </li>
      </ul>

      <div className="sidebar-logout" onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
