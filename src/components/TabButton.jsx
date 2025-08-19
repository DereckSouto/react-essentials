export default function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`hover:bg-neutral-600 transition rounded-[10px] p-2 ${
          isSelected ? "bg-neutral-500" : "bg-transparent"
        }`}
      >
        {children}
      </button>
    </li>
  );
}
