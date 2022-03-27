import ProfileItem from "./profileItem";
import aboutStyles from "../../styles/About.module.css";


const About = (props) => {
    // console.log(props)

    return(
        <div className={aboutStyles.aboutMePage}>
            {props.data.map((profile, index) => {
                return <ProfileItem profile={profile} key={index}/>
            })}
        </div>
    )
}

export default About;