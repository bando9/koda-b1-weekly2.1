export default function CardHomeTestimonial({
  description,
  src,
  name,
  background,
}) {
  return (
    <div className="bg-[#F9FAFB] p-7 rounded-xl">
      <div>
        <p className="text-[#4A5565] font-normal text-sm">{description}</p>
      </div>
      <div className="flex justify-start items-center pt-6 gap-4">
        <img
          src={`/images/${src}.png`}
          alt={`${name} profile`}
          className="w-10 h-10"
        />
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="font-normal text-xs">{background}</p>
        </div>
      </div>
    </div>
  );
}
