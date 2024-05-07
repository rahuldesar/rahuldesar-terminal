import PromptHeader from "../PromptHeader";

/* eslint-disable react/no-unescaped-entities */
const NotFound = ({ command }: { command: string }) => {
  return (
    <div>
      <div>
        bash: command not found:{" "}
        <span className="text-secondary">{command}</span>
      </div>
    </div>
  );
};

export default NotFound;
