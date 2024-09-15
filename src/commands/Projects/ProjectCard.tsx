import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

export const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
                <GitHubIcon/>
            </a>
        </div>
    );
};

