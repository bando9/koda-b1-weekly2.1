export default function Input({
  isRequired = false,
  register,
  title,
  nameFor,
  ph,
  rules,
  type = "text",
  errors = {},
  ...props
}) {
  const errorMessage = errors[nameFor]?.message;

  return (
    <div className="flex flex-col space-y-1.5">
      <label htmlFor={nameFor} className="font-medium text-sm">
        {title} {isRequired ? <span className="text-[#FF6467]">*</span> : ""}
      </label>
      <input
        {...(register ? register(nameFor, rules) : {})}
        placeholder={ph}
        type={type}
        id={nameFor}
        className="border border-[#E5E7EB] py-3 px-4 rounded-lg"
        {...props}
      />
      {errorMessage ? (
        <span className="text-xs lg:text-sm text-red-500">{errorMessage}</span>
      ) : (
        <span></span>
      )}
    </div>
  );
}
