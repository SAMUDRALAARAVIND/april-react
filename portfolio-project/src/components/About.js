import "../styles/about.css";

const socialLinks = [
    { link: "https://google.com", iconName: "menu" },
    { link: "https://linkedin.com", iconName: "language" }
]


export const About = () => {
    return (
        <div className="left-container">
            <div>
                <h1>Aravind Samudrala</h1>
                <p className="label">Frontend Engineer</p>
                <p className="description">
                    I build pixel-perfect, engaging, and accessible digital experiences.
                </p>
                <div className="nav-links">
                    <a href="#about">ABOUT</a>
                    <a href="#experience">EXPERIENCE</a>
                    <a href="#projects">PROJECTS</a>
                </div>
            </div>

            <div className="social-links">
                {
                    socialLinks.map(item => {
                        return <a href={item.link}>
                            <span className="material-icons">{item.iconName}</span>
                        </a>
                    })
                }
            </div>

        </div>
    )
}