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

const CommandHandler: React.FC<CommandHandlerProp> = ({
  command,
  clearScreen,
}) => {
  const themeSwitcher = useContext(ThemeContext);

  const themeChanger = (command: string) => {
    const themeName = command.split(" ")[2];
    if (THEMES.some((theme) => theme.name === themeName)) {
      themeSwitcher?.(themeName);
    }
  };

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
        themeChanger(command);
        return (
          <>
            <Common command={command} />
            theme yo yo
          </>
        );
      } else {
        return (
          <>
            <Common command={command} />
            <NotFound />
          </>
        );
      }
  }
};

export default CommandHandler;
