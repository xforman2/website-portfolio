import "./Links.css"
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';   // MUI icon for GitHub
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // MUI icon for LinkedIn
import EmailIcon from '@mui/icons-material/Email';       // MUI icon for Email
import FileDownloadIcon from '@mui/icons-material/FileDownload'; // MUI icon for CV download

export const Links: React.FC = () => {
    return (
        <div className="links-container">
            <a href="https://github.com/xforman2" target="_blank" rel="noopener noreferrer" className="links-link">
                <GitHubIcon /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jakub-form%C3%A1nek-39a47127a/" target="_blank" rel="noopener noreferrer" className="links-link">
                <LinkedInIcon /> LinkedIn
            </a>
            <a href="mailto:formanekjakub12@gmail.com" className="links-link">
                <EmailIcon /> Email Me
            </a>
            <a href="" download className="links-link">
                <FileDownloadIcon /> Download CV
            </a>
        </div>
    );
};
