import { COMMANDS } from "@/constants/commands";
import { Fragment } from "react";

const Help = () => {
  return (
    <table className="min-w-full">
      <thead>
        <tr className="text-left">
          <th className="">Command</th>
          <th className="">Description</th>
        </tr>
      </thead>
      <tbody className="">
        {COMMANDS.map((command) => (
          <tr key={command.cmd} className="">
            <td className="">{command.cmd}</td>
            <td className="">{command.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Help;
/* <div>
  {COMMANDS.map((command, index) => (
    <div key={index}>
      <span>{command.cmd}</span> <span>{command.desc}</span>
    </div>
  ))}
</div> */
