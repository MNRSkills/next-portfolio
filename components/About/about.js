import ProfileItem from "./profileItem";



const About = (props) => {
    // console.log(props)

    return(
        <div className="contianer">
            {props.data.map((profile, index) => {
                return <ProfileItem profile={profile} key={index}/>
            })}
        </div>
    )
}

export default About;