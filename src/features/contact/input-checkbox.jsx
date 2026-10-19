export default function InputCheckbox({ nameFor, label, register }) {
  return (
    <div className="flex gap-2.5">
      <input
        type="checkbox"
        id={nameFor}
        value={label}
        {...(register ? register("tech") : {})}
      />
      <label htmlFor={nameFor} className="text-sm text-[#4a5565]">
        {label}
      </label>
    </div>
  );
}
