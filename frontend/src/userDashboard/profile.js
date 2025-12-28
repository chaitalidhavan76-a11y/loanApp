const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="card">
      <h3>Profile</h3>
      <p><strong>Name:</strong> {user?.username}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </div>
  );
};

export default Profile;
