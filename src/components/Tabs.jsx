export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu className="flex mt-4">
        {buttons}
      </menu>
      {children}
    </>
  );
}
