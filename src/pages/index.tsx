import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("hello there");

  return (
    <>
      <section className="px-5">
        <pre className="text-primary">
          {`
   ___  ___   __ ____  ____     ___  __________ _____   ___ 
  / _ \\/ _ | / // / / / / /    / _ \\/ __/ __/ // / _ | / _ \\
 / , _/ __ |/ _  / /_/ / /__  / // / _/_\\ \\/ _  / __ |/ , _/
/_/|_/_/ |_/_//_/\\____/____/ /____/___/___/_//_/_/ |_/_/|_| 
        `}
        </pre>

        <div className="text-secondary">
          visitor@rahuldeshar.com.np :$ 
          <input
            type="text"
            className="bg-black text-primary pl-2"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
        </div>
      </section>
    </>
  );
}
