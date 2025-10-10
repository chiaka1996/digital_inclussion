import Image from "next/image";
import React, { ReactNode } from "react";
import HorizontalScrollCanvas from "./HorizontalScrollSection";

// Define the colors used in the CSS for visual distinction
const COLORS = {
  DIV1: "bg-[#D6F6DD]", // Box 1 (493px)
  DIV2_3_MERGED: "bg-[#EBD2B3]", // Merged Box (245px) - Using Div3's color
  DIV4: "bg-[gray]", // Box 4 (555px)
  DIV5: "bg-[#DAC4F7]", // Box 5 (307px)
  DIV6: "bg-[#ADECF7]", // Box 6 (307px)
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
              flex flex-col 
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
 * Remade Next.js/Tailwind component with Box 2 and Box 3 merged.
 */
const FinTechPanel: React.FC = () => {
  return (
    <section className="w-full bg-[#1D2328]">
      <div
        className={`
          md:grid grid-cols-1 lg:grid-cols-12 
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
          {/* Content from original Div 1 */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-start">
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-[88px] tracking-[0.3]">100%</h3>
                <p className="font-normal text-sm">Respondents in</p>
                <p className="font-normal text-lg">Senegal (n=51)</p>
              </div>
              <div className="font-medium text-[110px] tracking-[0.3] mx-4">
                +
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-[88px] tracking-[0.3]">70%</h3>
                <p className="font-normal text-sm">Respondents in</p>
                <p className="font-normal text-lg">Benin (n=50)</p>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <div className="flex">
                <p className="w-60">
                  identified high data cost as a major barrier to sustained use
                  of digital platforms
                </p>
                <span className="cursor-pointer flex flex-col justify-end ml-10">
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
              </div>
            </div>
          </div>
        </GridItem>

        <GridItem
          label="Box 2 & 3 Merged (245px)"
          gridArea="1 / 7 / 3 / 13"
          color={COLORS.DIV2_3_MERGED}
          className="lg:col-start-7 lg:col-span-6 lg:row-span-2 overflow-hidden px-10   flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="">
                <div className="flex justify-start">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-[80px] tracking-[0.3]">
                      56%
                    </h3>
                    <p className="font-normal text-sm">Respondents in</p>
                    <p className="font-normal text-lg">Nigeria (n=50)</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-end ml-10 w-48">
                    <p className="font-normal text-sm w-32">
                      are unemployed or self-employed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side (Inspired by Div 2's main text and Div 3's icon) */}
            <div className="flex flex-col justify-between h-full text-center md:text-right pt-4">
              <span className="mt-auto cursor-pointer self-center md:self-end mb-10">
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
            </div>
          </div>
        </GridItem>

        {/* Div 4 (Tall Panel on Right) - 555px high (R3+R4+R5) */}
        <GridItem
          label="Box 4 (555px)"
          // Starts at row 3, spans columns 7 through 13
          gridArea="3 / 7 / 6 / 13"
          color={COLORS.DIV4}
          className="lg:col-start-7 lg:col-span-6 lg:row-start-3 lg:row-span-3 justify-start items-start text-left"
        >
          {/* Content from original Div 4 (Image) */}
          <div className="w-full relative h-full">
            <Image
              src="/images/Fintech.jpg"
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
          {/* Content from original Div 5 */}
          <div className="text-[22px] font-normal w-[263px]">
            Low cost financial platforms that drive lasting engagement
          </div>
          <div className="border-b border-[#BF4142] w-full mt-auto"></div>
          <p className="font-normal mt-4">Revenue potential for fintechs</p>
        </GridItem>

        {/* Div 6 (Bottom Left Card 2) - 307px high (R4+R5) */}
        <GridItem
          label="Box 6 (307px)"
          gridArea="4 / 4 / 6 / 7"
          color={COLORS.DIV6}
          className="lg:col-start-4 lg:col-span-3 lg:row-start-4 lg:row-span-2 p-10"
        >
          {/* Content from original Div 6 */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex gap-8 items-center">
              <div className="h-fit">
                <h4 className="font-medium text-[50px]">500</h4>
                <h6 className="">Women</h6>
              </div>
              {/* Vertical line divider for visual separation */}
              <div className="border-l border-[#BF4142] h-16 self-center"></div>
              <div className="">
                <div className="flex items-end">
                  <h3 className="font-medium text-[50px]">8</h3>
                  <span className="text-sm ml-2 mb-2 leading-none ">
                    West <br /> Africa
                  </span>
                </div>
                <h6 className="">Countries</h6>
              </div>
            </div>
            <p className="w-full text-sm">
              Nigeria · Ghana · Togo · Benin · Senegal · Sierra Leone · Liberia
              · Côte d’Ivoire.
            </p>
          </div>
        </GridItem>
      </div>
    </section>
  );
};

export default function Fintech() {
  return (
    <HorizontalScrollCanvas>
      <FinTechPanel />
      <div className="w-screen flex h-full relative">
        {/* Left Half: Text Content */}
        <h1 className="absolute top-14 left-10 text-[#BF4142] font-extrabold text-[100px] 2xl:text-[120px] z-10 [w-863px] leading-22">
          RETENTION <br/> GAP
        </h1>
        <div className="bg-[#D6F6DD] pt-72 pl-10 w-1/2 text-[#1D2328] p-10 space-y-4 text-xl">
          <div className="xl:w-[550px] text-lg">
            <p>
              In our study, we uncovered that smartphone adoption and daily
              internet access are widespread across the West African countries.
            </p>
            <p>
              However, respondents identified high data costs as a major barrier
              to sustained use, Nigeria (64%, n=295), Senegal (100%, n=51),
              Benin (70%, n=50), Ghana (73%, n=33).
            </p>
            <p>
              This suggests that while app-based fintechs are viable and
              increasingly common, retention is undermined by affordability
              challenges, leaving significant revenue potential untapped.
            </p>
          </div>
        </div>

        {/* Right Half: Image Container */}
        <div className="w-1/2 h-full relative bg-[#FF8651]">
          {/* Background image */}
          <Image
            src="/images/Fintech2.jpg"
            alt="image"
            fill
            className="object-cover"
          />

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-[#19251BCC]/80" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col w-[590px] 2xl:w-[560px] text-white mx-auto text-[27px] p-10 pt-72">
            <p className="max-w-lg mb-4">
              How might fintech solutions be built to run efficiently on low-to-medium data, making consistent use more affordable and sustainable?
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen flex h-full relative">
        {/* Left Half: Text Content */}
        <h1 className="absolute top-14 left-10 text-[#BF4142] w-[800px] font-extrabold text-[100px] 2xl:text-[120px] z-10 leading-22 ">
          SEAMLESS FINANCE
        </h1>
        <div className="bg-[#EBD2B3] pt-72 pl-10 w-1/2 text-[#1D2328] p-10 space-y-4 text-xl">
          <div className="xl:w-[550px] text-lg" >
            <p>
              Findings from our survey revealed a strong opportunity and need for financial services to tailor offerings to answer to the needs of women who are building their own businesses or actively seeking employment. 
            </p>
            <p>
              38% of the 295 Nigerian women reported being unemployed or self-employed, along with slightly half of the respondents surveyed in Benin (56%, n=50).
            </p>
          </div>
        </div>

        {/* Right Half: Image Container */}
        <div className="w-1/2 h-full relative bg-[#FF8651]">
          {/* Background image */}
          <Image
            src="/images/Fintech3.jpg"
            alt="image"
            fill
            className="object-cover"
          />

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-[#3D2200CC]/80" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col w-[590px] 2xl:w-[560px] text-white mx-auto text-[27px] p-10 pt-72">
            <p className="max-w-lg mb-4">
              Can financial services, in their search for new revenue streams, develop offerings, through partnerships or other models, in the areas of career advancement and business growth, that women can benefit from?
            </p>
          </div>
        </div>
      </div>
    </HorizontalScrollCanvas>
  );
}
