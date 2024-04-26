import PromptHeader from "./PromptHeader";

/* eslint-disable react/no-unescaped-entities */
const CommonWelcomeText = () => {
  return (
    <>
      Welcome to my terminal portfolio.
      <br />
      This project's source code is located in this{" "}
      <a
        className="text-blue-400 hover:text-blue-600"
        href="https://github.com/rahuldesar/rahuldesar-terminal"
      >
        Github Repo
      </a>
      .
      <br />
      Type <span className="text-primary">`help`</span> or{" "}
      <span className="text-primary">`?`</span> to list all available commands.
    </>
  );
};

const Welcome = () => {
  return (
    <div className="flex w-full flex-row">
      <div className="">
        <div className="">connected</div>
        <div className="">
          <PromptHeader />
          welcome
        </div>
        <pre className="hidden text-primary md:block md:p-0">
          {`
   ___  ___   __ ____  ____     ___  __________ _____   ___ 
  / _ \\/ _ | / // / / / / /    / _ \\/ __/ __/ // / _ | / _ \\
 / , _/ __ |/ _  / /_/ / /__  / // / _/_\\ \\/ _  / __ |/ , _/
/_/|_/_/ |_/_//_/\\____/____/ /____/___/___/_//_/_/ |_/_/|_| 
        `}
        </pre>
        <pre className="text-primary md:hidden md:p-0">
          {`
   ___  ___   __ ____  ____   
  / _ \\/ _ | / // / / / / /  
 / , _/ __ |/ _  / /_/ / /__  
/_/|_/_/ |_/_//_/\\____/____/ 
        `}
        </pre>
        <CommonWelcomeText />
      </div>
      <div className="hidden h-full w-full items-center md:block">
        <pre className="text-sm text-secondary">
          {" "}
          {`
                _____________________________     
              |  ___________________________  |   
              | |                           | |   
              | |`}{" "}
          <span className="text-primary">Welcome guest. </span>{" "}
          {`          | |   
              | |                           | |   
              | |                           | |   
              | |               <3 Terminal | |   
              | |___________________________| |   
              |_______________________________|   
             /.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-./    
            /.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-./      
           /.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-./        
          :===============================:          

`}
        </pre>
      </div>
    </div>
  );
};

export default Welcome;
