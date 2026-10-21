/**
 *
 * @param {Object} SectionHeadinProps
 * @property {string} label - teks label berukuran kecil diatas judul
 * @property {string} title - teks judul utama bagian (section)
 * @property {string} description - teks deskripsi opsional yg muncul dibawah judul utama
 */

/**
 * Komponent header untuk membagi tiap section pada halaman.
 * menampilkan label, judul, deskripsi opsional, dan garis bawah dekoratif
 *
 * @param {SectionHeadingProps} props - properti untuk komponen SectionHeading
 * @returns {JSX.Element} Elemen antarmuka header section
 */

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
