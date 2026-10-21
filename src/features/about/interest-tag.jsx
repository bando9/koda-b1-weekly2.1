import { interests } from "./data";

export function InterestTags() {
  return (
    <div className="flex flex-wrap justify-center gap-3  lg:max-w-full lg:p-15">
      {interests.map((interest, index) => (
        <div key={index} className="pill bg-[#F9FAFB] text-[#364153]">
          {interest}
        </div>
      ))}
    </div>
  );
}
