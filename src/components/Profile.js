import React, { useState } from 'react';
import profileData from '../data/profileData.json';
import { Star, ThumbsUp, Eye, Heart } from 'lucide-react';
import '.././App.css';

const Profile = () => {
  const [articleLikes, setArticleLikes] = useState(Array(profileData.articles.length).fill(0));

  const handleLikeClick = (index) => {
    const newLikes = [...articleLikes];
    newLikes[index]++;
    setArticleLikes(newLikes);
  };

  return (
    <div className="profile-container">
      <img src={profileData.coverPicture} alt="Cover" className="cover-image" />
      <img src={profileData.profilePicture} alt="Profile" className="profile-image" />
      <h1>{profileData.name}</h1>
      <div className="follow-stats">
        <div className="followers">Followers: {profileData.followers}</div>
        <div className="following">Following: {profileData.following}</div>
      </div>
      <p className="bio">{profileData.bio}</p>
      <p>Instagram: {profileData.instagram}</p>
      <div className="icon-container">
      <span className="icon-wrapper" style={{ marginRight: '20px' }}>
          <Star size={20} style={{ color: 'gold' }} /> {/* Star icon */}
          {profileData.starCount}
        </span>
        <span className="icon-wrapper" style={{ marginRight: '20px' }}>
          <ThumbsUp size={20} style={{ color: 'blue' }} /> {/* Thumbs Up (Like) icon */}
          {profileData.likes}
        </span>
        <span className="icon-wrapper" style={{ marginRight: '20px' }}>
          <Eye size={20} style={{ color: 'green' }} /> {/* Eye icon */}
          {profileData.views}
        </span>
        <span className="icon-wrapper" style={{ marginRight: '20px' }}>
          <Heart size={20} style={{ color: 'red' }} /> {/* Heart icon */}
          {profileData.heartCount}
        </span>
        <span></span>
      </div>
      <p>Posts: {profileData.posts}</p>
      <div className="articles">
        {profileData.articles.map((article, index) => (
          <div key={index} className="article">
            <h3>
              {article.title}{' '}
              <ThumbsUp
                size={20}
                onClick={() => handleLikeClick(index)}
                style={{ cursor: 'pointer', color: 'blue' }} // Set color to blue (change as needed)
              />
            </h3>
            <p>{article.body}</p>
            <p>By {article.author}</p>
            <p>{article.time}</p>
            <p>Views: {article.views}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
