import React, { useState } from 'react';
import './faqs.css';

const ProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="profile-container">
      <h1>Update Profile Picture</h1>
      <div className="profile-picture">
        <img
          src={selectedImage ? selectedImage : 'default-profile-pic.png'}
          alt="Profile"
          className="profile-img"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="upload-input"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
