import "../AboutMe/AboutMe.css"
export const Help = () => {
    return(
        <pre className="wrap-container">
            {`Available commands:
- about-me    - Show information about me
- projects    - List my recent projects
- education   - Show my educational background
- clear       - Clear the terminal
- links       - Links to my social media profiles`}
        </pre>
    );
}
