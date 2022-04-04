import aboutStyles from "../../styles/About.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const ProfileItem = (props) => {
  const { firstName, lastName, backgroundImage, shortBio } =
    props.profile.fields;
  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.name}>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      </div>
      <div className={aboutStyles.aboutPicFrame}>
        <Image
          src={"https:" + backgroundImage.fields.file.url}
          width={backgroundImage.fields.file.details.image.width}
          height={backgroundImage.fields.file.details.image.height}
        />
      </div>
      <div className={aboutStyles.aboutMe}>
        {documentToReactComponents(shortBio)}
      </div>
    </div>
  );
};

export default ProfileItem;
