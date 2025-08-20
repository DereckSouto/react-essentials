export default function Section({ title, children }) {
  return (
    <section className="p-8 rounded-[6px] bg-neutral-900 shadow-[0 2px 8px rgba(0, 0, 0, 0.4)] mt-2">
      <h2 className="text-center m-[0 0 1.5rem 0] text-[#a18aba] roboto-condensed text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
