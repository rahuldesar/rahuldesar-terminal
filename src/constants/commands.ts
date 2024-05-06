type Command = {
  cmd: string;
  desc: string;
  tab: number;
};

export const COMMANDS: Command[] = [
  { cmd: "themes", desc: "check available themes", tab: 7 },
  { cmd: "whoami", desc: "display current user", tab: 7 },
  { cmd: "welcome", desc: "display hero section", tab: 6 },
  { cmd: "about", desc: "about rahul deshar", tab: 8 },
  { cmd: "echo", desc: "write arguments to the standard output", tab: 9 },
  { cmd: "clear", desc: "clear the terminal screen", tab: 8 },
  { cmd: "resume", desc: "open my portfolio", tab: 9 },
  { cmd: "education", desc: "my academic background", tab: 4 },
  { cmd: "projects", desc: "view projects that I've coded", tab: 5 },
  { cmd: "email", desc: "contact me", tab: 8 },
  { cmd: "history", desc: "view command history", tab: 6 },
  { cmd: "pwd", desc: "return working directory name", tab: 10 },
  { cmd: "socials", desc: "check out my social accounts", tab: 6 },
  { cmd: "help", desc: "check available commands", tab: 9 },
  { cmd: "learning", desc: "stuff i am learning", tab: 9 },
  { cmd: "skills", desc: "view my skill arsenals", tab: 9 },
  { cmd: "neofetch", desc: "github information", tab: 9 },
];
