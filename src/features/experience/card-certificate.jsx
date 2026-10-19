export default function CardCertificate({ initial, title, label, date }) {
  return (
    <div className="flex justify-center items-center shadow rounded-xl p-6 gap-4">
      <div className="bg-[#FFF3EE] rounded-xl h-12 w-12 flex items-center justify-center">
        <p className="uppercase text-xs font-bold text-[#FF5F22]">{initial}</p>
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-sm text-[#101828]">{title}</h3>
        <p className="text-[#FF5F22] font-medium text-xs">{label}</p>
        <p className="text-[#99A1AF] text-xs">{date}</p>
      </div>
    </div>
  );
}
