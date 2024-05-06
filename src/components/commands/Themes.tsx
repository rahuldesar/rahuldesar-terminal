import { THEMES } from "@/constants/themes";

const Themes = () => {
  return (
    <div>
      <table className="min-w-full mb-2">
        <thead>
          <tr className="text-left">
            <th className="">Available Themes</th>
            {/*
          <th className="pl-2">Description</th>
          */}
          </tr>
        </thead>
        <tbody className="">
          {THEMES.map((theme, index) => (
            <tr key={index} className="">
              <td className="">{theme.name}</td>
              {/*
              <td className="pl-2">{command.desc}</td>
            */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <span className="text-secondary">Usage</span>: themes set{" "}
        {`<theme-name>`}
      </div>
      <div>
        <span className="text-secondary">example</span>: themes set ubuntu
      </div>
    </div>
  );
};

export default Themes;
