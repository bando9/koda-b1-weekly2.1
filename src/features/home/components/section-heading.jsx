export default function SectionHeading({ label, title, description }) {
  return (
    <div>
      <div className="text-center pb-5">
        <h2 className="section-label">{label}</h2>
        <h1 className="section-title">{title}</h1>
        <p className="section-description">{description}</p>
      </div>
      <div className="h-1 w-12 rounded-full mx-auto bg-[#111111]"></div>
    </div>
  );
}
