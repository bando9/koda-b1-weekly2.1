import { skills } from "./data";

export function SkillsProgress() {
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center text-sm font-semibold text-[#364153]">
            <span>{skill.name}</span>
            <span className="text-[#FF5F22] font-semibold">
              {skill.percentage}%
            </span>
          </div>

          <div className="w-full bg-[#E5E7EB] h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-black h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
