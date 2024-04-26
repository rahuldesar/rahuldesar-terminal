/* eslint-disable react/no-unescaped-entities */
import PromptHeader from "@/components/PromptHeader";
import Welcome from "@/components/Welcome";
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
      <div>
        <section className="p-5">
          <Welcome />
          <div className="">
            <PromptHeader />
            <input
              type="text"
              className="pl-2"
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
            />
          </div>
        </section>
      </div>
    );
  }
}
