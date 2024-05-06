/* eslint-disable react/no-unescaped-entities */
import CommandHandler from "@/components/CommandHandler";
import PromptHeader from "@/components/PromptHeader";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function Terminal() {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const [commandStack, setCommandStack] = useState<string[]>(["welcome"]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, [loading]);

  // TODO: Enable dragging
  // Currently selecting text also focuses input
  const handleTerminalClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
    document.addEventListener("click", handleTerminalClick);
    return () => {
      document.removeEventListener("click", handleTerminalClick);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [commandStack]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setCommandStack(commandStack.concat(inputText));
    setInputText("");
  };


  const clearScreen = () => {
    setCommandStack([]);
  };

  if (loading) {
    return (
      <div className="p-2 text-primary">
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
      <div className="min-h-screen">
        <section className="p-2">
          {commandStack.map((command, index) => (
            <CommandHandler
              command={command}
              key={index}
              clearScreen={clearScreen}
            />
          ))}

          <div className="">
            <form onSubmit={handleSubmit}>
              <PromptHeader />
              <input
                autoFocus
                type="text"
                className=""
                placeholder="Type here"
                ref={inputRef}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              />
            </form>
          </div>
        </section>
      </div>
    );
  }
}
