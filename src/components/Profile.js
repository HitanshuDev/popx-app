import React from 'react';

function Profile() {
  const email = localStorage.getItem('email') || 'Not provided';
  const SUemail = localStorage.getItem('SUemail') || 'Not provided';
  const SUphone = localStorage.getItem('SUphone') || 'Not provided';
  const SUname = localStorage.getItem('SUname') || 'Not provided';

  return (
    <>
      <h3 style={{ textAlign: 'left' }}>Account Settings</h3>
      <div className="profile-card">
        <img src="https://i.pravatar.cc/100" alt="profile" className="avatar" />
        <div className="user-info">
          <strong>{SUname}</strong>
          <p>{email || SUemail}</p>
          <p>{SUphone}</p>

        </div>
        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </>
  );
}

export default Profile;
