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
    <footer className="relative bg-[#1E2329] text-white min-h-[500px] overflow-hidden">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-10  h-full">
        {/* Main Content Grid */}
        <div className="flex justify-between h-full">
          {/* Left Content Column */}
          <div className="flex-1 max-w-2xl py-0 pr-8 flex flex-col justify-between">
            {/* Top Content (Call to Action) */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-wider">
                LOOKING FOR DEEPER INSIGHTS?
              </h2>
              <p className="text-lg sm:text-4xl text-white leading-relaxed mb-10">
                We would be glad to partner with your strategy and product team
                to uncover the needs of new markets, validate existing
                assumptions or refine opportunity areas for your current
                customers.
              </p>
              <Link
                href="#"
                className="flex items-center text-2xl text-[#FEF7EA] hover:text-white transition-colors"
              >
                Back to Home
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
          <div className="absolute top-0 right-0 h-[664px] w-[100px] flex flex-col justify-center items-center">
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
        <div className="mt-[267px]">
          <p className="text-sm text-white mb-20 max-w-sm italic">
            Data reflects survey responses with unequal sample sizes by country.
            Results from Nigeria, Benin, and Ghana represent more robust
            samples, while findings from Liberia and Côte d'Ivoire should be
            viewed as exploratory signals.
          </p>
        </div>
      </div>
      {/* Logo and Bottom Bar */}
      <div className="flex justify-between items-end w-full px-10 pt-4">
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

      <div className="flex justify-between items-end w-full px-10 pt-4 pb-[56px]">
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
    </footer>
  );
};

export default Footer;
