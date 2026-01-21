import { useEffect, useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLock,
} from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { getUserInfoById } from "../../servicesApi/api.js";
import "./profile.css"; // ⬅️ add this

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const userInfoId = localStorage.getItem("userInfoId");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userInfoId) {
        setError("Profile not completed yet");
        setLoading(false);
        return;
      }

      try {
        const res = await getUserInfoById(userInfoId);
        if (!res.success) setError(res.message);
        else setProfile(res.data);
      } catch {
        setError("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userInfoId]);

  if (loading) return <p className="profile-loading">Loading profile...</p>;
  if (error) return <p className="profile-error">{error}</p>;

  return (
    <div className="profile-page">
      <h2 className="profile-title">My Profile</h2>

      {/* PERSONAL DETAILS */}
      <div className="profile-card">
        <h3 className="card-title">Personal Details</h3>

        <div className="profile-grid">
          <div className="profile-item">
            <label>Full Name</label>
            <p><FiUser /> {user?.username} <FiLock /></p>
          </div>

          <div className="profile-item">
            <label>Date of Birth</label>
            <p><FaRegCalendarAlt /> {profile.dob} <FiLock /></p>
          </div>

          <div className="profile-item">
            <label>Email</label>
            <p><FiMail /> {user?.email} <FiLock /></p>
          </div>

          <div className="profile-item">
            <label>Mobile Number</label>
            <p><FiPhone /> +91 {profile.phoneNumber} <FiLock /></p>
          </div>

          <div className="profile-item">
            <label>Address</label>
            <p><FiMapPin /> {profile.address} <FiLock /></p>
          </div>

          <div className="profile-item">
            <label>Pincode</label>
            <p>{profile.pincode}</p>
          </div>
        </div>
      </div>

      {/* EMPLOYMENT DETAILS */}
      <div className="profile-card">
        <h3 className="card-title">Employment Details</h3>

        <div className="profile-grid">
          <div className="profile-item">
            <label>Employment Type</label>
            <p>Salaried</p>
          </div>

          <div className="profile-item">
            <label>Employer</label>
            <p>Alagu Tech</p>
          </div>

          <div className="profile-item">
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
