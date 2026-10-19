export default function Card({ src, title, label, description, techs }) {
  return (
    <div className="rounded-xl shadow">
      <img src={`/images/${src}.png`} alt="#" className="rounded-t-xl w-full" />
      <div className="p-6">
        <div className="flex justify-between mb-3">
          <h2 className="font-semibold text-[#101828] text-lg">{title}</h2>
          <p className="bg-[#FFF3EE] py-1 px-2.5 text-[#FF5F22] rounded-full font-medium text-xs">
            {label}
          </p>
        </div>
        <p className="text-[#6A7282] text-sm mb-4">{description}</p>
        <div className="flex mb-5">
          {techs.map((tech) => (
            <p className="badge">{tech}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="button w-full border border-[#E5E7EB] text-[#364153]">
            GitHub
          </button>
          <button className="button w-full bg-[#111111] text-white">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}
