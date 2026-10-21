import { experiences } from "./data";

export function ExperienceTable() {
  return (
    <div className="w-full font-sans bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#111111] text-white text-xs font-semibold uppercase tracking-wider">
              <th className="py-4 px-6 rounded-tl-xl">Company</th>
              <th className="py-4 px-6">Position</th>
              <th className="py-4 px-6">Duration</th>
              <th className="py-4 px-6">Location</th>
              <th className="py-4 px-6 text-right rounded-tr-xl">Type</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-sm">
            {experiences.map((exp) => (
              <tr
                key={exp.id}
                className="hover:bg-slate-50/60 transition-colors"
              >
                <td className="py-4 px-6 font-bold text-slate-900">
                  {exp.company}
                </td>
                <td className="py-4 px-6 text-slate-500 font-medium">
                  {exp.position}
                </td>
                <td className="py-4 px-6 text-slate-500">{exp.duration}</td>
                <td className="py-4 px-6 text-slate-500">{exp.location}</td>
                <td className="py-4 px-6 text-right">
                  <span className="inline-block px-3 py-1 bg-[#FFF2ED] text-[#FF6B35] font-semibold text-xs rounded-full">
                    {exp.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block md:hidden divide-y divide-slate-100 p-2">
        {experiences.map((exp) => (
          <div key={exp.id} className="p-4 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-bold text-slate-900 text-base">
                {exp.company}
              </h4>
              <span className="inline-block px-2.5 py-0.5 bg-[#FFF2ED] text-[#FF6B35] font-semibold text-xs rounded-full shrink-0">
                {exp.type}
              </span>
            </div>

            <p className="text-sm font-medium text-slate-700">{exp.position}</p>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 gap-1">
              <span>{exp.duration}</span>
              <span>{exp.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
