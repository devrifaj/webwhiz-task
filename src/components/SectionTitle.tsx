const SectionTitle = ({
  subTitle,
  title,
  description,
  styledTitle,
}: {
  subTitle: string;
  title: string;
  styledTitle: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-10">
      <div>
        <span className="text-caption text-sm font-semibold tracking-[1.68px] uppercase mb-[5px] inline-block">
          {subTitle}
        </span>
        <h2 className="text-[40px] font-bold leading-[56px] text-heading">
          {title.split(styledTitle)[0]}
          <span className="primary-text-color relative">
            {styledTitle}
            <span className="absolute bottom-3 left-1.5 right-1 h-[10px] bg-text-shadow"></span>
          </span>
          {title.split(styledTitle)[1]}
        </h2>
      </div>

      <div className="flex max-w-[514px] w-full mb-2">
        {/* left border */}
        <div className="w-[10px] h-[65px] primary-color inline-block rounded-2xl mt-1.5"></div>
        {/* description */}
        <p className="text-base pl-3 leading-[25.6px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
