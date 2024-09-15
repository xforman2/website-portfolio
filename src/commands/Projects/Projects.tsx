import './Projects.css'
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
    return (
        <div className='project-container'>
            <ProjectCard
                title="House Scout"
                description="Discord Bot that helps you with notifications for new estates across multiple estate websites"
                link="https://github.com/xforman2/HouseScout"
            />
            <ProjectCard
                title="Darts Player"
                description="Application that let's you keep your count when playing darts (currently without frontend, just REST API)"
                link="https://github.com/xforman2/DartsPlayer/tree/main/DartsPlayer"
            />
            <ProjectCard
                title="Server Monitoring Tool"
                description="Result of my bachelor thesis. Monitoring server usage of two servers withing fi.muni network"
                link="https://github.com/xforman2/monitoring-dashboard"
            />
            <ProjectCard
                title="This website :)"
                description="My portfolio old terminal-like website"
                link="https://github.com/xforman2/website-portfolio"
            />
        </div>
    );
};

