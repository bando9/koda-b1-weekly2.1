export default function Input({
  required,
  register,
  title,
  nameFor,
  ph,
  rules,
  type = "text",
  ...props
}) {
  return (
    <div className="flex flex-col space-y-1.5">
      <label htmlFor={nameFor} className="font-medium text-sm">
        {title} {required ? <span className="text-[#FF6467]">*</span> : ""}
      </label>
      <input
        {...(register ? register(nameFor, rules) : {})}
        placeholder={ph}
        type={type}
        id={nameFor}
        {...props}
        className="border border-[#E5E7EB] py-3 px-4 rounded-lg"
      />
    </div>
  );
}
