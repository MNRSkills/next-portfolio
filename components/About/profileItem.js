
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const ProfileItem = (props) => {
  const { firstName, lastName, backgroundImage, shortBio } =
    props.profile.fields;
  return (
    <div className="w-full h-full ">
      <div className="text-gray-300 text-2xl text-center">
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      </div>
      <div className="w-full p-4">
        <Image
          src={"https:" + backgroundImage.fields.file.url}
          width={backgroundImage.fields.file.details.image.width}
          height={backgroundImage.fields.file.details.image.height}
        />
      </div>
      <div className="text-lg text-gray-300">
        {documentToReactComponents(shortBio)}
      </div>
    </div>
  );
};

export default ProfileItem;
