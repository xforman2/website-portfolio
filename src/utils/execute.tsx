
import { ReactElement } from "react";
import { AboutMe } from "../commands/AboutMe/AboutMe";
import { Education } from "../commands/Education/Education";
import { Help } from "../commands/Help/Help";
import { Links } from "../commands/Links/Links";
import { Projects } from "../commands/Projects/Projects";


export const executeCommand = (command: string): string | ReactElement => {
    switch (command) {
      case "help":
        return <Help/>;

      case "about-me":
        return  <AboutMe/>;

      case "projects":
        return <Projects/>;

      case "education":
        return <Education/>;

      case "clear":
        return "";

      case "links":
        return <Links/>;

      default:
        return "Invalid command. Type 'help' to see available commands.";
    }
  };