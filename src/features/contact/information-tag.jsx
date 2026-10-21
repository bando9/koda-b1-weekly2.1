export default function InformationTag({ icon, label, tag }) {
  return (
    <div className="flex justify-start gap-3 items-center">
      <div>
        <img src={`/images/${icon}-icon.png`} className="object-fit" />
      </div>
      <div>
        <p className="font-medium text-sm">{tag}</p>
        <p className="text-sm text-[#6A7282] hover:text-[#FF5F22] transition-all duration-150">
          {label}
        </p>
      </div>
    </div>
  );
}
