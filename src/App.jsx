import { useState } from "react";

import "./App.css";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/templates/Header";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  return (
    <>
      <Header />
      <main className="w-11/12 max-w-[50rem] m-auto">
        <section className="p-8 rounded-[6px] bg-neutral-900 shadow-[0 2px 8px rgba(0, 0, 0, 0.4)]">
          <h2 className="text-center m-[0 0 1.5rem 0] text-[#a18aba] roboto-condensed text-2xl">
            Core Concepts
          </h2>
          <ul className="list-none p-0 m-0 mt-4 flex flex-wrap gap-8 justify-center">
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
          </ul>
        </section>
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
      </main>
    </>
  );
}

export default App;
