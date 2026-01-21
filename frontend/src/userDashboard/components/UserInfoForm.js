import { useState } from "react";
import { updateUserInfo } from "../../servicesApi/api.js";

const UserInfoForm = () => {
  const [formData, setFormData] = useState({
    dob: "",
    phoneNumber: "",
    address: "",
    pincode: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await updateUserInfo(formData);

    console.log("📥 USER INFO RESPONSE:", response);

    if (response.success) {
      // 🔥 THIS IS THE MISSING LINE
      localStorage.setItem("userInfoId", response.data._id);

      console.log(
        "✅ userInfoId saved:",
        localStorage.getItem("userInfoId")
      );

      alert("Profile updated successfully");
    } else {
      alert(response.message);
    }
  };


  return (
    <div>
      <h2>Update Profile</h2>

      <form onSubmit={handleSubmit}>
        <input type="date" name="dob" onChange={handleChange} required />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default UserInfoForm;
