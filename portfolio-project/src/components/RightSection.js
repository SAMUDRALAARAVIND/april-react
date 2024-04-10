import "../styles/right-section.css";
import { Card } from "./Card";

const experiences = [
    {
        duration: "2024 - Present",
        role: "Frontend Engineer, Hyderabad",
        description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
        skills: ["Javascript", "TypeScript", "Redux", "React"]
    },
    {
        label: "Senior Software Engineer",
        imageUrl: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
        role: "Backend Engineer, Hyderabad",
        description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
        skills: ["java", "REST API", "SQL", "MongoDB"]
    },
    {
        duration: "2024 - Present",
        role: "Frontend Engineer, Hyderabad",
        description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
        skills: ["Javascript", "TypeScript", "Redux", "React"]
    },
    {
        imageUrl: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
        role: "Backend Engineer, Hyderabad",
        description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
        skills: ["java", "REST API", "SQL", "MongoDB"]
    },
    {
        duration: "2024 - Present",
        role: "Frontend Engineer, Hyderabad",
        description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
        skills: ["Javascript", "TypeScript", "Redux", "React"]
    },
    {
        imageUrl: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
        role: "Backend Engineer, Hyderabad",
        description: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
        skills: ["java", "REST API", "SQL", "MongoDB"]
    }
]

export const RightSection = () => {
    return <div className="right-container">
        <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.

            My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.

            When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
        </p>
        {
            experiences.map(experience => {
                return <Card experience={experience} />
            })
        }
    </div>
}