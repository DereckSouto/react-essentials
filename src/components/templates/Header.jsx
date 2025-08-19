import reactLogo from "../../assets/react-core-concepts.png";

function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const dynamicDescriptions = ["Core", "Fundamental", "Important"];

  const description = dynamicDescriptions[generateRandomNumber(2)];

  return (
    <header className="text-center m-[3rem 0]">
      <img
        src={reactLogo}
        alt="React logo"
        className="h-20 w-40 object-cover m-auto"
      />
      <h1 className="text-[5rem] font-bold custom-gradient drop-shadow-[0 2px 8px rgba(0, 0, 0, 0.5)] roboto-condensed">
        React Essentials
      </h1>
      <p className="m-0 text-2xl text-[#8964b0] roboto-condensed mb-4">
        {description} React concepts
      </p>
    </header>
  );
}
