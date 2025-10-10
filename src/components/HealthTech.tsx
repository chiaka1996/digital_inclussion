import Image from "next/image";
import React, { ReactNode } from "react";
import HorizontalScrollCanvas from "./HorizontalScrollSection";

// Define the colors used in the CSS for visual distinction
const COLORS = {
  DIV1: "bg-[#FF8651]", // Box 1 (493px)
  DIV2: "bg-[#F1EADA]", // Box 2 (245px) - Light color
  DIV3: "bg-[#C596FE]", // Box 3 (245px)
  DIV4: "bg-[gray]", // Box 4 (555px)
  DIV5: "bg-[#1CC694]", // Box 5 (307px)
  DIV6: "bg-[#F8FE89]", // Box 6 (307px) - Light color
};

interface GridItemProps {
  className?: string;
  label: string;
  gridArea: string;
  color: string;
  children?: ReactNode;
}

/**
 * Reusable component for a grid item. Renders 'children' if present, otherwise shows 'label' as a fallback.
 */
const GridItem: React.FC<GridItemProps> = ({
  className = "",
  label,
  gridArea,
  color,
  children,
}) => {
  return (
    <div
      // Use the CSS Grid property directly via the style prop
      style={{ gridArea: gridArea }}
      className={`
                 text-[#1D2328]
                ${color} ${className}
            `}
    >
      {/* Render children if they exist, otherwise render the label/placeholder. */}
      {children ? (
        // If children exist, render them directly
        children
      ) : (
        // Fallback content for when no children are passed
        <>
          <p className="text-2xl font-bold">{label}</p>
          <p className="text-sm font-normal mt-1 opacity-80">
            Area: {gridArea}
          </p>
        </>
      )}
    </div>
  );
};

// Row height definition remains the same (R1=122.5, R2=122.5, R3=248, R4=153.5, R5=153.5)
const gridRowsClass = "lg:grid-rows-[122.5px_122.5px_248px_153.5px_153.5px]";

/**
 * Next.js/Tailwind component implementing the exact CSS Grid layout with fixed heights.
 */
const HealthTechPanel: React.FC = () => {
  return (
    <section className="w-full bg-[#F2BA0F]">
      {/* Parent Grid Container */}
      <div
        className={`
          md:grid grid-cols-1 lg:grid-cols-12 gap-0 
          h-[850px] lg:h-[850px] ${gridRowsClass} 
          
          /* Ensures stacking on mobile */
          [&>div]:col-span-12
        `}
      >
        {/* Div 1 (Hero/Main Feature) - 493px high (R1+R2+R3) */}
        <GridItem
          label="Box 1 (493px)"
          gridArea="1 / 1 / 4 / 7"
          color={COLORS.DIV1}
          className="lg:col-span-6 lg:row-span-3 px-10 pb-10"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-start">
              <div className="flex flex-col ga-[10.97]">
                <h3 className="font-medium text-[110px] trackong-[0.3]">38%</h3>
                <p className="font-normal text-sm">Respondents in</p>
                <p className="font-normal text-lg">Nigeria (n=33)</p>
              </div>
              <div className="font-medium text-[110px] trackong-[0.3]">+</div>
              <div className="flex flex-col ga-[10.97]">
                <h3 className="font-medium text-[110px] trackong-[0.3]">49%</h3>
                <p className="font-normal text-sm">Respondents in</p>
                <p className="font-normal text-lg">Ghana (n=295)</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[22px] font-thin max-w-[423px]">
                are unemployed or self-employed which means that digital
                adoption depends on income security
              </p>
              <span className="h-full flex flex-col justify-end align-bottom">
                <svg
                  className="size-12 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
              </span>
            </div>
          </div>
        </GridItem>

        {/* Div 2 (Small Card 1 - Light Background) - 245px high (R1+R2) */}
        <GridItem
          label="Box 2 (245px)"
          gridArea="1 / 7 / 3 / 9"
          color={COLORS.DIV2}
          className="lg:col-start-7 lg:col-span-2 lg:row-span-2 text-center h-full py-10 px-9  flex flex-col justify-center align-middle"
        >
          <p className="text-[20px] font-normal">
            Ground insights driving health solutions for women in West Africa.
          </p>
        </GridItem>

        {/* Div 3 (Image/Graph Placeholder) - 245px high (R1+R2) */}
        <GridItem
          label="Box 3 (245px)"
          gridArea="1 / 9 / 3 / 13"
          color={COLORS.DIV3}
          className="lg:col-start-9 lg:col-span-4 lg:row-span-2 overflow-hidden px-10 pb-10 flex justify-between"
        >
          <div className="">
            <h3 className="font-medium text-[110px] tracking-[0.3]">38%</h3>
            <p className="font-normal w-[225px] text-sm">
              Respondents in Ghana use digital platforms for learning or
              studying.
            </p>
          </div>
          <span className="h-full flex flex-col justify-end align-bottom cursor-pointer">
            <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 5H19V11" />
              <path d="M19 5L5 19" />
            </svg>
          </span>
        </GridItem>

        {/* Div 4 (Tall Panel on Right) - 555px high (R3+R4+R5) */}
        <GridItem
          label="Box 4 (555px)"
          gridArea="3 / 7 / 6 / 13"
          color={COLORS.DIV4}
          className="lg:col-start-7 lg:col-span-6 lg:row-start-3 lg:row-span-3 justify-start items-start text-left"
        >
          <div className="w-full relative h-full">
            <Image
              src="/images/Healthtech.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </GridItem>

        {/* Div 5 (Bottom Left Card 1) - 307px high (R4+R5) */}
        <GridItem
          label="Box 5 (307px)"
          gridArea="4 / 1 / 6 / 4"
          color={COLORS.DIV5}
          className="lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:row-span-2 p-10"
        >
          <div className="text-[22px] font-normal">
            Affordable,
            <br /> productive, and <br /> educational solutions
          </div>
          <div className="border-b border-[#BF4804] w-full mt-[70px]"></div>
          <p className="font-normal mt-4">Untapped value for market growth</p>
        </GridItem>

        {/* Div 6 (Bottom Left Card 2 - Light Background) - 307px high (R4+R5) */}
        <GridItem
          label="Box 6 (307px)"
          gridArea="4 / 4 / 6 / 7"
          color={COLORS.DIV6}
          className="lg:col-start-4 lg:col-span-3 lg:row-start-4 lg:row-span-2 p-10"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex gap-8">
              <div className="h-fit">
                <h4 className="font-medium text-[50px]">500</h4>
                <h6 className="">Women</h6>
              </div>
              <div className="border-l border-[#BF4804] h-full"></div>
              <div className="">
                <div className="flex">
                  <h3 className="font-medium text-[50px]">8</h3>
                  <span className="text-sm flex flex-col justify-end">
                    West <br />
                    Africa
                  </span>
                </div>
                <h6 className="">Women</h6>
              </div>
            </div>
            <p className="w-[267.6]">
              Nigeria · Ghana · Togo · Benin · Senegal · Sierra Leone · Liberia
              · Côte d’Ivoire.
            </p>
          </div>
        </GridItem>
      </div>
    </section>
  );
};

export default function HealthTech() {
  return (
    <HorizontalScrollCanvas>
      <HealthTechPanel />
      <div className="w-screen flex h-full relative">
        {/* Left Half: Text Content */}
        <h1 className="absolute top-14 left-10 text-[#F1EADA] font-extrabold text-[100px] 2xl:text-[120px] z-10">
          Product Boosters
        </h1>
        <div className="bg-[#FF8651] pt-60 pl-10 w-1/2 text-[#1D2328] p-10 space-y-4 text-xl">
          <div className="xl:w-[550px] text-lg">
            <p>
              Our survey data shows that income security is a key driver in
              women's adoption of health solutions. With 38% of respondents in
              Nigeria (n=295) and 48.5% in Ghana (n=33) reporting that they are
              unemployed and seeking work or self-employed.
            </p>
            <p>
              In demographies with smaller sample sizes such as Liberia and Côte
              d’Ivoire, more than half of respondents also identified as
              unemployed and seeking work or self-employed.
            </p>
            <p>
              While further market validation is recommended, particularly in
              markets such as Liberia and Côte d’Ivoire, these findings reveal a
              strong opportunity to design solutions that prioritize
              affordability, efficiency, and even support for education and
              skills-building, empowering women not only as patients but also as
              informed decision-makers around matters of health.
            </p>
          </div>
        </div>

        {/* Right Half: Image Container */}
        <div className="w-1/2 h-full relative bg-[#FF8651]">
          {/* Background image */}
          <Image
            src="/images/Healthtech2.jpeg"
            alt="image"
            fill
            className="object-cover"
          />

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-[#1F100ACC]/80" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col w-[590px] 2xl:w-[560px] text-white justify-center mx-auto text-[27px] p-10">
            <p className="max-w-lg mb-4">
              Could framing healthtech around productivity and earning potential
              spark interest and accelerate adoption among women seeking several
              sources of income or managing side hustles?
            </p>
            <p className="">
              What if digital health solutions were framed as productivity and
              income enablers, helping women with irregular income, supporting
              side hustles, and protecting their ability to earn while still
              scaling effectively for clinics and providers?
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen flex h-full relative">
        {/* Left Half: Text Content */}
        <h1 className="absolute top-14 left-10 text-[#F1EADA] font-extrabold text-[100px] 2xl:text-[120px] z-10 leading-20">
          PATIENTS TO POWERHOUSE
        </h1>
        <div className="bg-[#C596FE] pt-64 pl-10 w-1/2 text-[#1D2328] p-10 space-y-4 text-xl">
          <div className="xl:w-[550px] text-lg">
            <p>
              45% of respondents in Ghana (n=33) use digital platforms for
              learning or studying. This indicates that healthtech solutions may
              scale faster when framed not just as direct healthcare solutions,
              but also offering the added value of educating users in a variety
              of matters that interest them in the context of healthcare.
              Additionally, that aligns with women’s existing use of digital
              tools for learning.
            </p>
          </div>
        </div>

        {/* Right Half: Image Container */}
        <div className="w-1/2 h-full relative bg-[#FF8651]">
          {/* Background image */}
          <Image
            src="/images/Healthtech3.jpg"
            alt="image"
            fill
            className="object-cover"
          />

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-[#1C003DB2]/70" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col w-[590px] 2xl:w-[560px] text-white justify-center mx-auto text-[27px] p-10 pt-20">
            <p className="max-w-lg mb-4">
              Could framing healthtech around productivity and earning potential
              spark interest and accelerate adoption among women seeking several
              sources of income or managing side hustles?
            </p>
            <p className="">
              What if digital health solutions were framed as productivity and
              income enablers, helping women with irregular income, supporting
              side hustles, and protecting their ability to earn while still
              scaling effectively for clinics and providers?
            </p>
          </div>
        </div>
      </div>
    </HorizontalScrollCanvas>
  );
}
