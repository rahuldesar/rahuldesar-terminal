type Command = {
  cmd: string;
  desc: string;
};

export const COMMANDS: Command[] = [
  { cmd: "themes", desc: "check available themes" },
  { cmd: "about", desc: "about Rahul Deshar" },
  { cmd: "resume", desc: "open my portfolio" },
  { cmd: "projects", desc: "view projects that I've coded" },
  { cmd: "education", desc: "my academic background" },
  { cmd: "my-sites", desc: "subdomains hosted in this site" },
  { cmd: "email", desc: "contact me" },
  { cmd: "socials", desc: "check out my social accounts" },
  { cmd: "skills", desc: "view my skill arsenals" },
  { cmd: "learning", desc: "stuff i am learning" },
  { cmd: "help / ?", desc: "check available commands" },
  { cmd: "welcome", desc: "display hero section" },
  { cmd: "history", desc: "view command history" },
  { cmd: "clear", desc: "clear the terminal screen" },
  { cmd: "neofetch", desc: "github information" },
];
