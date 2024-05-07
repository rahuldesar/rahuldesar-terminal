import React, { useContext } from "react";
import Welcome from "./commands/Welcome";
import NotFound from "./commands/NotFound";
import PromptHeader from "./PromptHeader";
import Help from "./commands/Help";
import Themes from "./commands/Themes";
import { THEMES } from "@/constants/themes";
import { ThemeContext } from "@/pages";

type CommandHandlerProp = {
  command: string;
  clearScreen: () => void;
};

const Common = ({ command }: { command: string }) => {
  return (
    <div className="">
      <PromptHeader />
      {command}
    </div>
  );
};

const ThemeChanger = ({ command }: { command: string }) => {
  const themeSwitcher = useContext(ThemeContext);

  const themeName = command.split(" ")[2];
  if (THEMES.some((theme) => theme.name === themeName)) {
    themeSwitcher?.(themeName);
    return <div>theme changed to {themeName}</div>;
  }
  return (
    <div>
      theme {themeName} not found, view{" "}
      <span className="text-primary">themes</span> command to view all available
      themes
    </div>
  );
};

const CommandHandler: React.FC<CommandHandlerProp> = ({
  command,
  clearScreen,
}) => {
  switch (command) {
    case "themes":
      return (
        <>
          <Common command={command} />
          <Themes />
        </>
      );

    case "clear":
      clearScreen();
      return null;

    case "help":
    case "?":
      return (
        <>
          <Common command={command} />
          <Help />
        </>
      );

    case "welcome":
      return (
        <>
          <Common command={command} />
          <Welcome />
        </>
      );

    default:
      if (command.startsWith("themes set")) {
        return (
          <>
            <Common command={command} />
            <ThemeChanger command={command} />
          </>
        );
      } else {
        return (
          <>
            <Common command={command} />
            <NotFound command={command} />
          </>
        );
      }
  }
};

export default CommandHandler;
