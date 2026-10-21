import { IconDownload } from "@tabler/icons-react";

/**
 *
 * @typedef {Object} HeaderProps
 * @property {string} label - teks tampil pada atas judul
 * @property {string} title - teks judul utama di atas halaman
 * @property {string} description - teks deskripsi topik halaman
 * @property {boolean} button - memunculkan button
 * @property {string} align - memberikan style font-align class tailwind
 *
 * @example
 * <Header label="career history" title="experience" description="my professional journey, credentials, and recognition." button={true} align="left" />
 */

/**
 * Komponen header utama bagian atas halaman
 * @param {HeaderProps} props - properti komponen Header
 * @returns {JSX.Element}
 */

export default function Header({
  label,
  title,
  description,
  align = "center",
  button,
}) {
  return (
    <section className={`bg-[#F9FAFB] px-6 py-16 text-${align} lg:px-28`}>
      <div
        className={`md:flex md:items-center ${button ? "md:justify-between" : "md:justify-center"}`}
      >
        <div>
          <h2 className="section-label">{label}</h2>
          <h1 className="section-title text-4xl">{title}</h1>
          <p className="section-description">{description}</p>
        </div>
        {button && (
          <button className="py-3 px-6 bg-[#111111] rounded-lg text-white flex items-center gap-2 mt-5">
            <IconDownload stroke={2} size={20} />
            Download Resume
          </button>
        )}
      </div>
    </section>
  );
}
