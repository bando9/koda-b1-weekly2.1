import BulletList from "./bulletlist";

export default function CardAbout({ listItems, date, title, label }) {
  return (
    <div className="p-7 shadow-sm rounded-xl">
      <div className="md:flex md:justify-between md:items-center">
        <div>
          <h1 className="font-semibold text-xl text-[#101828]">{title}</h1>
          <h2 className="font-medium text-sm text-[#111111]">{label}</h2>
        </div>
        <div className="bg-[#F9FAFB] inline-block py-1.5 px-3 rounded-full text-sm font-medium text-[#4A5565] mt-3">
          {date}
        </div>
      </div>
      <BulletList listItems={listItems} />
    </div>
  );
}
