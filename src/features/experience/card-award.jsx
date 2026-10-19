export default function CardAward({ title, date, corp, description }) {
  return (
    <div className="shadow rounded-xl p-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-base text-[#101828]">{title}</h3>
        <p className="font-medium text-xs text-[#99A1AF]">{date}</p>
      </div>
      <p className="text-[#FF5F22] font-semibold text-xs mt-2">{corp}</p>
      <p className="mt-3 text-sm text-[#6A7282]">{description}</p>
    </div>
  );
}
