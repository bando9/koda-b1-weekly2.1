export default function Header({ label, title, description }) {
  return (
    <section className="bg-[#F9FAFB] px-6 py-16 text-center">
      <h2 className="section-label">{label}</h2>
      <h1 className="section-title text-4xl">{title}</h1>
      <p className="section-description">{description}</p>
    </section>
  );
}
