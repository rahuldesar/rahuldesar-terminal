/* eslint-disable react/no-unescaped-entities */
import AsciiName from "@/components/AsciiName";
import { useEffect, useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("hello there");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, [loading]);

  if (loading) {
    return (
      <div className="p-5 text-primary">
        connecting to server
        <div className="loading-animation inline">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <section className="p-5">
          <div className="">connected</div>
          <div className="">
            <span className="text-primary">guest</span>@
            <span className="text-secondary">rahuldeshar.com.np</span>:$ welcome
          </div>
          <AsciiName />
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
          <span className="text-primary">`?`</span> to list all available
          commands.
          <div className="">
            <span className="text-primary">guest</span>@
            <span className="text-secondary">rahuldeshar.com.np</span>:$
            <input
              type="text"
              className="pl-2"
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
            />
          </div>
        </section>
      </>
    );
  }
}
