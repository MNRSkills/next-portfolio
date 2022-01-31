import ProfileItem from "./profileItem";

const About = (props) => {

    return(
        <div>
            {props.data.map((profile, index) => {
                return <ProfileItem profile={profile} key={index}/>
            })}
        </div>
    )
}

export default About;