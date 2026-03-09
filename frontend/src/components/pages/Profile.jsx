function Profile() {
  return (
    <div className="container">

      <h2 className="title">User Profile</h2>

      <div className="profile-card">

        <p><b>Name:</b> Nilesh</p>
        <p><b>Email:</b> nilesh@email.com</p>
        <p><b>Total Reports:</b> 3</p>

      </div>

      <h3>My Garbage Reports</h3>

      <ul>
        <li>📍 Wakad - Pending</li>
        <li>📍 Hinjewadi - Resolved</li>
      </ul>

    </div>
  );
}

export default Profile;