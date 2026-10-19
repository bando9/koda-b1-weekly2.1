import { IconDownload } from "@tabler/icons-react";

export default function Header({
  label,
  title,
  description,
  align = "center",
  button,
}) {
  return (
    <section className={`bg-[#F9FAFB] px-6 py-16 text-${align}`}>
      <h2 className="section-label">{label}</h2>
      <h1 className="section-title text-4xl">{title}</h1>
      <p className="section-description">{description}</p>
      {button && (
        <button className="py-3 px-6 bg-[#111111] rounded-lg text-white flex items-center gap-2 mt-5">
          <IconDownload stroke={2} size={20} />
          Download Resume
        </button>
      )}
    </section>
  );
}
