// import { HealthTech } from "@/components/HealthTech";
import HorizontalScrollCanvas from "@/components/HorizontalScrollSection";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1E2329] pt-28">
      <HorizontalScrollCanvas>
        {/* <HealthTech /> */}
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
                Could framing healthtech around productivity and earning potential spark interest and accelerate adoption among women seeking several sources of income or managing side hustles?
              </p>
              <p className="">What if digital health solutions were framed as productivity and income enablers, helping women with irregular income, supporting side hustles, and protecting their ability to earn while still scaling effectively for clinics and providers?</p>
            </div>
          </div>
        </div>
        <div className="w-screen flex h-full relative">
          {/* Left Half: Text Content */}
          <h1 className="absolute top-14 left-10 text-[#F1EADA] font-extrabold text-[100px] 2xl:text-[120px] z-10">
            PATIENTS TO POWERHOUSE
          </h1>
          <div className="bg-[#C596FE] pt-96 pl-10 w-1/2 text-[#1D2328] p-10 space-y-4 text-xl">
            <div className="xl:w-[550px] text-lg">
              <p>
              45% of respondents in Ghana (n=33) use digital platforms for learning or studying. This indicates that healthtech solutions may scale faster when framed not just as direct healthcare solutions, but also offering the added value of educating users in a variety of matters that interest them in the context of healthcare.  Additionally, that aligns with women’s existing use of digital tools for learning.
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
            <div className="absolute inset-0 flex flex-col w-[590px] 2xl:w-[560px] text-white justify-center mx-auto text-[27px] p-10">
              
              <p className="max-w-lg mb-4">
                Could framing healthtech around productivity and earning potential spark interest and accelerate adoption among women seeking several sources of income or managing side hustles?
              </p>
              <p className="">What if digital health solutions were framed as productivity and income enablers, helping women with irregular income, supporting side hustles, and protecting their ability to earn while still scaling effectively for clinics and providers?</p>
            </div>
          </div>
        </div>
      </HorizontalScrollCanvas>
    </div>
  );
}
