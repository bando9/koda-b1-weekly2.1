export default function SocialMedia({ media, label }) {
  return (
    <div className="flex justify-between">
      <p className="font-medium text-sm">{media}</p>

      <a href="#" className="flex items-center text-[#99A1AF] text-xs">
        {label} ➜
      </a>
    </div>
  );
}
