export default function InputRadio({ nameFor, label, register }) {
  return (
    <label
      htmlFor={nameFor}
      className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 select-none hover:text-slate-900"
    >
      <input
        type="radio"
        id={nameFor}
        value={nameFor}
        {...(register ? register("method") : {})}
        className="w-4 h-4 text-[#FF5500] accent-[#FF5500] border-slate-300 focus:ring-[#FF5500]"
      />
      <span>{label}</span>
    </label>
  );
}
