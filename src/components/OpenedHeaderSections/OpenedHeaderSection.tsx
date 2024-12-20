import { OpenedHeaderSectionProps } from "./OpenedHeaderSection.type";

export default function OpenedHeaderSection({
  sections,
}: OpenedHeaderSectionProps) {
  return (
    <section className="bg-cream grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-1 justify-items-center place-items-center">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`border-[1.66px] shadow-md rounded-sm border-red font-Anton group text-center content-center w-[440px] h-[220px] max-w-[440px] max-h-[220px] transition-colors duration-500 hover:bg-red hover:border-black ${section.available ? "bg-cream cursor-pointer" : " hover:bg-grey/80 hover:text-cream text-cream cursor-not-allowed"}`}
        >
          <h2 className="uppercase transition-opacity duration-500 text-3xl group-hover:hidden text-red">
            {section.mainTitle}
          </h2>
          <p className="hidden text-xl transition-opacity duration-500 text-cream group-hover:block">
            {section.available ? section.subTitle : "Coming Soon..."}
          </p>
        </div>
      ))}
    </section>
  );
}
