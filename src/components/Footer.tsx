import React from "react";
import Link from "next/link"; // Use <a> or router Link for navigation

const Footer = () => {
  const segments = [
    { title: "Fintech", color: "bg-[#BF4142]", link: "#fintech" },
    { title: "Edtech", color: "bg-[#D97A06]", link: "#edtech" },
    { title: "E-commerce", color: "bg-[#F2BA0F]", link: "#ecomm" },
    { title: "Healthtech", color: "bg-[#BF4804]", link: "#health" },
  ];

  const socialLinks = [
    { name: "+234 809 522 1113 (Whatsapp)", url: "#" },
    { name: "Twitter (X)", url: "#" },
    { name: "Facebook", url: "#" },
  ];

  return (
    <footer className="relative bg-[#1E2329] text-white overflow-hidden pt-[50px] md:pt-[65px]">
      <div className="max-w-7xl px-[24px] sm:px-6 lg:px-10 h-full">
        {/* Main Content Grid */}
        <div className="flex justify-between h-full">
          {/* Left Content Column */}
          <div className="flex-1 max-w-2xl py-0 pr-8 flex flex-col justify-between">
            {/* Top Content (Call to Action) */}
            <div>
              <div className="mb-[24px] md:mb-[50px]">
              <h2 className="inline text-[18px] sm:text-[26px] font-[700] tracking-wider border border-[#fff] border-x-0 border-t-0">
                LOOKING FOR DEEPER INSIGHTS?
              </h2>
              </div>

              <p className="loraFont text-[20px] sm:text-[37px] text-white leading-[142%] tracking-[-3%] mb-[35px] md:mb-10">
                We would be glad to partner with your strategy and product team
                to uncover the needs of new markets, validate existing
                assumptions or refine opportunity areas for your current
                customers.
              </p>
              <Link
                href="#"
                className="flex items-center text-[20px] md:text-[26px] text-[#FEF7EA] hover:text-[#fff] transition-colors"
              >
                Start a Conversation
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          {/* Bottom Content (Legal/Copyright) */}

          {/* Right Segmented Bar Column (Absolutely Positioned) */}
          <div className="hidden absolute top-[65px] right-0 h-[664px] w-[100px] md:flex flex-col justify-center items-center">
            {segments.map((segment, index) => (
              <Link
                key={segment.title}
                href={segment.link}
                className={`w-[100px] h-1/4 ${segment.color} flex items-center justify-center text-xl font-medium text-[#1E2329] transition-all hover:opacity-90 hover:w-[140px]`}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {segment.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-[67px] md:mt-[267px]">
          <p className="text-[12px] leading-[140%] md:text-[14px] text-white mb-20 max-w-sm italic">
            Data reflects survey responses with unequal sample sizes by country.
            Results from Nigeria, Benin, and Ghana represent more robust
            samples, while findings from Liberia and Côte d'Ivoire should be
            viewed as exploratory signals.
          </p>
        </div>
      </div>
      {/* Logo and Bottom Bar */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-end w-full px-10 pt-4">
        <div className="font-extrabold text-2xl tracking-widest text-[#F1B130]">
          DODO
        </div>
        <div className="text-sm text-gray-400">
          <a href="mailto:www.dododesign.africa" className="mr-4">hello@dododesign.africa</a>
          <a href="/" className="ml-4 hover:text-white transition-colors">
            Linkedin
          </a>
          <a href="/" className="ml-4 hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-end w-full px-10 pt-4 pb-[56px]">
        <div className="">
          <a href="www.dododesign.africa" className="mr-4">www.dododesign.africa</a>
        </div>
        <div className="text-sm text-gray-400">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="ml-4 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

        {/* Dodo social for mobile */}
      <section className="block md:hidden px-[24px]">
         <div className="font-extrabold text-2xl tracking-widest text-[#F1B130]">
          DODO
        </div>
          <div className="text-[16px] leading-[100%]">
          <a href="www.dododesign.africa" className="mr-4">www.dododesign.africa</a>
        </div>

        <div className="flex justify-between items-start text-[18px] leading-[120%] mt-[40px]"> 
          <div className="space-y-[16px]">
             <a href="/" className="block hover:text-white transition-colors">
            Linkedin
          </a>
          <a href="/" className="block hover:text-white transition-colors">
            Twitter (X)
          </a>
          </div>

          <div className="space-y-[16px]">
             <a href="/" className="block hover:text-white transition-colors">
            Instagram
          </a>
          <a href="/" className="block hover:text-white transition-colors">
            Facebook
          </a>
          </div>
        </div>

        <div className="mt-[40px] text-[18px] leading-[120%] tracking-[-3%] fontHelvetica space-y-[16px] mb-[24px]">
           <a href="mailto:www.dododesign.africa" className="block ">hello@dododesign.africa</a>
           <div className="">+234 809 522 1113 (Whatsapp)</div>
        </div>



      </section>
    </footer>
  );
};

export default Footer;
