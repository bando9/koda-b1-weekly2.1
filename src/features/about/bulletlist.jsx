export default function BulletList({ listItems }) {
  return (
    <ul className="space-y-2 max-w-lg font-sans mt-4">
      {listItems.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="text-[#FF5F22] text-xs pt-1 select-none shrink-0">
            ►
          </span>
          <p className="text-[#6A7282] text-[15px] leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  );
}
