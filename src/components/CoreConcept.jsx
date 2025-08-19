export default function CoreConcept({image, title, description}) {
  return (
    <li className="w-40 text-center">
      <img
        src={image}
        alt={title}
        className="h-16 w-24 object-cover m-auto"
      />
      <h3 className="m-[0.5rem 0] text-2xl font-bold mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </li>
  );
}