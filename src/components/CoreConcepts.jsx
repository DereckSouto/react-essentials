import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section className="p-8 rounded-[6px] bg-neutral-900 shadow-[0 2px 8px rgba(0, 0, 0, 0.4)]">
      <h2 className="text-center m-[0 0 1.5rem 0] text-[#a18aba] roboto-condensed text-2xl">
        Core Concepts
      </h2>
      <ul className="list-none p-0 m-0 mt-4 flex flex-wrap gap-8 justify-center">
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
