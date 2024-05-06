import { COMMANDS } from "@/constants/commands";

const Help = () => {
  return (
    <table className="min-w-full">
      <thead>
        <tr className="text-left">
          <th className="">Command</th>
          <th className="pl-2">Description</th>
        </tr>
      </thead>
      <tbody className="">
        {COMMANDS.map((command) => (
          <tr key={command.cmd} className="">
            <td className="">{command.cmd}</td>
            <td className="pl-2">{command.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Help;
