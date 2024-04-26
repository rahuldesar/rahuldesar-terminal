const AsciiName = () => {
  return (
    <div>
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
    </div>
  );
};

export default AsciiName;
