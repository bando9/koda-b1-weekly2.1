export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}) {
  const textCenter = align == "center" ? "text-center" : "";

  return (
    <div className={`flex flex-col justify-${align} items-${align}`}>
      <div className="pb-5">
        <p className={`section-label uppercase ${textCenter}`}>{label}</p>
        <h2 className="section-title capitalize">{title}</h2>
        {description && (
          <p className="font-normal text-base mt-4">{description}</p>
        )}
      </div>
      <div className="h-1 w-12 rounded-full  bg-[#111111]"></div>
    </div>
  );
}
