import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="wrapper pt-7 md:pt-[51px] pb-[79px]">
      <div className="flex flex-col gap-[44px] items-center md:items-start md:flex-row md:gap-1 lg:gap-5 lg:items-center md:h-[526px]">
        {/* hero left */}
        <div className="w-full md:w-1/2 md:mt-[7px] lg:mt-0 text-center md:text-left">
          {/* title */}
          <h1 className="text-[32px] md:text-[40px] lg:text-[64px] font-bold text-heading leading-[44.8px] md:leading-[56px] lg:leading-[85px] mb-[16px] lg:mb-[14px] mx-4 md:mx-0">
            Turning{" "}
            <span className="primary-text-color relative">
              Imagination
              <span className="absolute bottom-2.5 md:bottom-3 lg:bottom-4.5 left-1 right-1 h-2.5 md:h-[20px] bg-text-shadow"></span>
            </span>{" "}
            into Innovation
          </h1>
          {/* description */}
          <div className="flex items-center">
            {/* left border */}
            <div className="hidden md:inline-block w-[14px] lg:w-[10px] h-[53px] lg:h-[65px] primary-color rounded-2xl"></div>
            {/* description text */}
            <p className="text-base md:pl-3 leading-[25.6px] line-clamp-3 md:line-clamp-2 lg:line-clamp-none">
              Welcome to my digital playground, where creativity knows no
              bounds. I&apos;m a passionate designer and developer on a mission
              to turn innovative ideas into stunning digital realities.
            </p>
          </div>
          {/* button */}
          <div className="mt-6 flex justify-center md:justify-start gap-2.5">
            <Link href="/" className="primary-btn py-3 px-14 rounded-[80px]">
              Hire Me
            </Link>
            <Link
              href="/"
              className="primary-btn-outline py-3 px-6 rounded-[80px]"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* hero right */}
        <div className="flex-1 mt-1 ml-[2px] lg:mb-5">
          {/* hero image */}
          <div className="flex lg:justify-center">
            <div className="relative z-30 w-[327px] h-[286px] lg:w-[358px] lg:h-[433px] mt-5">
              <Image
                src="/hero/hero-img.png"
                alt="hero"
                width={1000}
                height={1000}
                className="object-cover md:object-contain lg:object-cover w-full h-full rounded-2xl"
              />

              {/* name and designation */}
              <div className="hidden lg:block hero-box-card top-8 -left-[97px] right-0 w-[201px] rounded-r-xl ">
                <div className="p-4 flex gap-2">
                  {/* avatar image */}
                  <Image
                    src="/hero/designation-avatar.png"
                    alt="avatar"
                    width={100}
                    height={100}
                    className="w-[47px] h-[47px] rounded-full object-cover"
                  />

                  <div className="flex justify-center flex-col">
                    <span className="text-base font-bold text-heading leading-[24px]">
                      Albert Flores
                    </span>
                    <span className="text-sm font-medium">Product Manager</span>
                  </div>
                </div>
              </div>

              {/* statistics */}
              <div className="hero-box-card -top-7 md:-top-[38px] lg:top-[151px] -left-[14px] md:-left-[16px] lg:left-[283px] w-[149px] lg:w-[170px] rounded-r-xl lg:rounded-l-xl">
                <div className="p-2 lg:p-4 flex items-center gap-2 lg:gap-2">
                  {/* avatar image */}
                  <div className="w-8 h-8 rounded-[70px] bg-primary/10 flex-center">
                    <Image
                      src="/icons/user.svg"
                      alt="avatar"
                      width={100}
                      height={100}
                      className="w-4 h-4 object-cover"
                    />
                  </div>

                  <div className="flex gap-[6px]">
                    {/* statistics */}
                    <div className="flex gap-1 lg:gap-0 justify-center flex-col">
                      <span className="text-sm lg:text-base font-bold text-heading">
                        15,235
                      </span>
                      <span className="text-xs font-medium">Visitors</span>
                    </div>

                    {/* link */}
                    <Link
                      href="#"
                      className="text-xs font-medium text-primary flex items-center gap-1 lg:mt-[2px]"
                    >
                      <Image
                        src="/icons/send.svg"
                        alt="link"
                        width={100}
                        height={100}
                        className="w-4 h-4 object-cover"
                      />
                      25%
                    </Link>
                  </div>
                </div>
              </div>

              {/* project completed */}
              <div className="hero-box-card left-[188px] lg:left-[257px] top-[243px] md:top-[253px] lg:top-[400px] w-[157px] lg:w-[173px] rounded-tl-xl ">
                <div className="p-2 lg:p-4 flex gap-2">
                  {/* avatar image */}
                  <div className="w-[47px] h-[47px] rounded-[210px] bg-hero-circle-top flex-center">
                    <Image
                      src="/icons/project-complete.png"
                      alt="avatar"
                      width={100}
                      height={100}
                      className="w-[39px] h-[39px] object-cover"
                    />
                  </div>

                  <div className="flex justify-center flex-col">
                    <span className="text-sm font-medium mb-[1px]">Project Done</span>
                    <span className="text-sm lg:text-base font-bold text-heading leading-[24px]">
                      4679
                    </span>
                  </div>
                </div>
              </div>

              {/* bg-overlay */}
              <div className="absolute -top-6 -bottom-6 left-[30px] right-5 w-[295px] lg:w-[308px] h-[334px] lg:h-[481px] hero-overlay -z-20"></div>

              {/* circle top */}
              <div className="absolute -top-[42px] lg:-top-[47px] -right-[17px] w-[50px] lg:w-16 h-[50px] lg:h-16 rounded-full bg-hero-circle-top -z-10"></div>

              {/* circle bottom */}
              <div className="absolute -bottom-6 md:-bottom-[27px] lg:-bottom-8 left-2.5 md:left-[9px] lg:left-[21px] w-[19px] lg:w-[25px] h-[19px] lg:h-[25px] rounded-full border-[5px] border-hero-circle-bottom -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
