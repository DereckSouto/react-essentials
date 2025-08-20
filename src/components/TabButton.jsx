export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button
       {...props}
        className={`hover:bg-neutral-600 transition rounded-[10px] p-2 ${
          isSelected ? "bg-neutral-500" : "bg-transparent"
        } cursor-pointer`}
      >
        {children}
      </button>
    </li>
  );
}
