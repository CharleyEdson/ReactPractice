const ProfileCard = ({ title, handle, description }) => {
  return (
    
    <div className="card">
      <div className="card-image">
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
