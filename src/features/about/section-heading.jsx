export default function SectionHeading({ label, title, description }) {
  return (
    <div>
      <div className="text-center pb-5">
        <p className="section-label uppercase">{label}</p>
        <h2 className="section-title capitalize">{title}</h2>
        {description && (
          <p className="font-normal text-base mt-4">{description}</p>
        )}
      </div>
      <div className="h-1 w-12 rounded-full mx-auto bg-[#111111]"></div>
    </div>
  );
}
