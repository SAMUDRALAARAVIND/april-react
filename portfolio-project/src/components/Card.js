import "../styles/card.css";

export const Card = ({ experience }) => {
    const { duration, role, description, skills, imageUrl, label } = experience;

    return (
        <div className="experience-card">
            {duration ? <span className="duration">{duration}</span> : <img src={imageUrl} />}
            <div className="right">
                <h4 style={{ color: "#D9E1EE" }}>{role}</h4>
                {label && <span style={{ color: "#8897AC" }}>{label}</span>}
                <p style={{ color: "#8897AC", fontSize: '0.9rem' }}>{description}</p>
                <div className="skills">
                    {
                        skills.map(skill => {
                            return <span className="skill">{skill}</span>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

// <Card />