import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLock,
} from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="dashboard-inner">
      <h2 className="welcome">My Profile</h2>

      {/* PERSONAL DETAILS */}
      <div className="card">
        <h3 className="card-title">Personal Details</h3>

        <div className="profile-grid">
          <div className="profile-field">
            <label>Full Name</label>
            <p><FiUser /> Soham Mhadeshwar <FiLock /></p>
          </div>

          <div className="profile-field">
            <label>Date of Birth</label>
            <p><FaRegCalendarAlt /> 29-08-2003 <FiLock /></p>
          </div>

          <div className="profile-field">
            <label>Email</label>
            <p><FiMail /> soham@email.com <FiLock /></p>
          </div>

          <div className="profile-field">
            <label>Mobile Number</label>
            <p><FiPhone /> +91 80XXXXXX14 <FiLock /></p>
          </div>

          <div className="profile-field">
            <label>Address</label>
            <p><FiMapPin /> Thane, Maharashtra <FiLock /></p>
          </div>

          <div className="profile-field">
            <label>Pincode</label>
            <p>421503</p>
          </div>
        </div>
      </div>

      {/* EMPLOYMENT DETAILS */}
      <div className="card">
        <h3 className="card-title">Employment Details</h3>

        <div className="profile-grid">
          <div className="profile-field">
            <label>Employment Type</label>
            <p>Salaried</p>
          </div>

          <div className="profile-field">
            <label>Employer</label>
            <p>Alagu Tech</p>
          </div>

          <div className="profile-field">
            <label>Monthly Income</label>
            <p>₹ 10,000</p>
          </div>
        </div>

        <p className="profile-note">
          🔒 These details are locked for security. Contact support to update.
        </p>
      </div>
    </div>
  );
};

export default Profile;
