import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

export default function CoreConcepts() {
  return (
   <Section title="Core Concepts">
      <ul className="list-none p-0 m-0 mt-4 flex flex-wrap gap-8 justify-center">
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
