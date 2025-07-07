import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { skills } from "@/constants";

const AboutUs = () => {
  return (
    <section className="py-[76px] wrapper">
      <SectionTitle
        subTitle="About us"
        title="We are turning products into Timeless elegance"
        styledTitle="Timeless elegance"
        description="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity."
      />
      <div className="flex gap-8 mt-12">
        {/* progress bar */}
        <div className="w-1/2 p-[50px] rounded-xl bg-primary/4 text-heading flex flex-col gap-[19px]">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-end gap-2 w-full">
              <div className="w-full">
                <span className="text-base font-semibold mb-[7px] inline-block">
                  {skill.name}
                </span>
                <div className="w-full bg-primary/20 rounded-full h-[9.99px] my-[3px]">
                  <div
                    className="h-[9.99px] rounded-full primary-color"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
              <span className="text-paragraph text-sm pr-[2px]">
                {skill.percentage}%
              </span>
            </div>
          ))}
        </div>

        {/* about image */}
        <div className="w-1/2 h-[312px] overflow-hidden rounded-xl">
          <Image
            src="/about-img.png"
            alt="about us"
            width={1000}
            height={1000}
            className="w-full h-full scale-150 object-cover object-top rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
