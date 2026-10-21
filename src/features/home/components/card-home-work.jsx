export default function CardHomeWork({
  title,
  description,
  src,
  technologies,
}) {
  return (
    <div className="rounded-xl bg-white shadow">
      <div className="w-full">
        <img
          src={`/images/${src}.png`}
          alt={`${title} image`}
          className="w-full lg:h-65 object-cover rounded-t-xl"
        />
      </div>
      <div className="px-6 py-6">
        <h2 className="font-semibold text-lg text-[#101828]">{title}</h2>
        <p className="mt-2 text-[#6A7282]">{description}</p>
        <div className="mt-4 flex">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-[#F9FAFB] rounded-xl py-2 px-2.5">
              <p className="text-xs text-[#4A5565] font-medium">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
