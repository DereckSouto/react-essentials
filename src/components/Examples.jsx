import Header from "./templates/Header";
import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  return (
    <section className="mt-2">
      <h2>Examples</h2>
      <menu className="mt-2 mb-1 flex">
        <TabButton
          className="transition"
          onClick={() => setSelectedTopic("components")}
          isSelected={selectedTopic === "components"}
        >
          Components
        </TabButton>
        <TabButton
          className="transition"
          onClick={() => setSelectedTopic("jsx")}
          isSelected={selectedTopic === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          className="transition"
          onClick={() => setSelectedTopic("props")}
          isSelected={selectedTopic === "props"}
        >
          Props
        </TabButton>
        <TabButton
          className="transition"
          onClick={() => setSelectedTopic("state")}
          isSelected={selectedTopic === "state"}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic && <p>Please select a topic</p>}
      {selectedTopic && (
        <div className="bg-neutral-900 rounded-[6px] p-4 shadow-[0 2px 8px rgba(0, 0, 0, 0.3)]">
          <h3 className="m-0">{EXAMPLES[selectedTopic].title}</h3>
          <p className="text-left pl-1">
            {EXAMPLES[selectedTopic].description}
          </p>
          <pre className="text-left pl-1">
            <code
              style={{ fontFamily: "Consolas, sans-serif" }}
              className="text-[1rem]"
            >
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      )}
    </section>
  );
}
