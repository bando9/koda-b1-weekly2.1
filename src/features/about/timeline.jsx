const educationData = [
  {
    id: 1,
    title: "B.S. Computer Science",
    institution: "UC Berkeley · Berkeley, CA",
    period: "2019 – 2023",
    description:
      "Graduated with honors. Dean's List 2021 & 2022. Focused on software engineering, distributed systems, and human-computer interaction.",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    institution: "Codecademy Pro · Online",
    period: "2022",
    description:
      "Intensive program covering modern JavaScript, React, Node.js, databases, and deployment workflows using industry-standard tools.",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    institution: "Coursera — Stanford University · Online",
    period: "2021",
    description:
      "Certificate course covering sorting algorithms, trees, graphs, dynamic programming, and complexity analysis.",
  },
];

export default function Timeline() {
  return (
    <div className="max-w-xl mx-auto p-6 min-h-screen">
      <div className="relative pl-8 space-y-8 before:absolute before:left-2.75 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
        {educationData.map((item) => (
          <div key={item.id} className="relative group">
            <div className="absolute -left-9.25 top-6 w-3 h-3 bg-black rounded-xs border-2 border-white shadow-sm z-10" />

            <div className="bg-white rounded-2xl p-6 border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
              <h3 className="text-xl font-bold text-[#101828] tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm font-semibold text-[#FF5F22] mt-1">
                {item.institution}
              </p>

              <div className="inline-block my-3 px-3 py-1 bg-[#FFF3EE] rounded-full">
                <span className="text-xs font-semibold text-[#FF5F22]">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-[#6A7282] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
