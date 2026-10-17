export default function Badge({ name }) {
  return (
    <div className="bg-[#FFF3EE] px-4 py-2 rounded-full flex justify-center items-center">
      <p className="text-[#FF5F22] font-medium text-sm">{name}</p>
    </div>
  );
}
