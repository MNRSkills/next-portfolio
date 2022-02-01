import aboutStyles from "../../styles/About.module.css";

const ProfileItem = (props) => {
  const { firstName, lastName, skill, fourLineBio, profileIMG } = props.profile;
  return (
    <div className={aboutStyles.container}>
        <div className={aboutStyles.aboutPicFrame}>
            <img src={profileIMG} alt="Profile Picture"/>
        </div>
      <div className={aboutStyles.aboutMe}>
        <div className="about-name">
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
        </div>
        <div className='about-footer'>
          <p className='about-par'> {fourLineBio} </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
