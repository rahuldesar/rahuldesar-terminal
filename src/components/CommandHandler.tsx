import React, { Dispatch, SetStateAction } from "react";
import Welcome from "./commands/Welcome";
import NotFound from "./commands/NotFound";
import PromptHeader from "./PromptHeader";
import Help from "./commands/Help";

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
  switch (command) {
    case "themes":
      return (
        <>
          <Common command={command} />
          themes
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
