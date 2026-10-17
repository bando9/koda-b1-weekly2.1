export default function CardHome({ title, description }) {
  return (
    <div className="p-7 rounded-xl shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] bg-[#ffffff]">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-[#6A7282]">{description}</p>
    </div>
  );
}
