"use client";
import React, { useState, useEffect } from "react";
import Ecomm  from "@/components/Ecomm";
import EdTech from "@/components/EdTech";
import FinTech from "@/components/Fintech";
import Link from "next/link";
import HealthTech from "@/components/HealthTech";

export default function Page() {

  return (
    <main className="min-h-screen bg-[#1E2329] pt-30 leading-[125%] tracking-[-3%] font-[400] overflow-x-hidden">
      <div className="text-[#E9EBF5] max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
        <div className="mx-auto space-y-[14px]">
          <h1 className="font-[700] text-[56px] md:text-8xl leading-[1.25] max-h-96">
            Voices of <br /> 500 Women
          </h1>
          <p className="text-[24px] md:text-[32px] max-w-[780px] leading-[125%] tracking-[-3%]">
            What 500 Women across West Africa Revealed on Digital
            Adoption Patterns, Behaviours and Drivers
          </p>
        </div>
        <div className="my-[40px] 2xl:my-[56px] w-full lg:max-w-[570px] lg:ml-auto space-y-[20px] font-[500] text-[18px] 2xl:text-[20px] leading-[150%] tracking-[-3%]">
          <p>
          Over the past few months, DODO's research team engaged 500 women across 8 West African countries of Nigeria, Ghana, Togo, Benin, 
          Senegal, Sierra Leone, Liberia, and Côte d&apos;Ivoire. Findings revealed digital adoption patterns, behaviours and drivers, 
          providing actionable insights to inform strategic decisions and business growth.
          </p>
          <p>
          Insights emerged across the healthtech, e-commerce, edtech and fintech industries that highlight untapped consumer behaviours, 
          market opportunities, and innovation pathways, that will inform business strategy and investment decisions across these sectors.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-0 md:h-[300px] lg:h-[429px] text-[#1D2328] text-[32px] lg:text-[48px] leading-[150%] tracking-[-3%] font-[500]">
        <Link href="#health" className="flex items-center justify-center md:block h-[140px] md:h-full bg-[#BF4804] pt-0 md:pt-[100px] text-center w-full md:w-1/4">
          <span>Healthtech</span>
          <span className="flex flex-col md:hidden justify-end align-bottom cursor-pointer h-[20px] w-[20px]">
              <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
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
        </Link>
        <Link href="#ecomm" className="bg-[#F2BA0F] flex items-center justify-center md:block h-[140px] md:h-full pt-0 md:pt-[100px] text-center w-full md:w-1/4">
         <span>E-commerce</span>
          <span className="flex flex-col md:hidden justify-end align-bottom cursor-pointer h-[20px] w-[20px]">
              <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
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
        </Link>
        <Link href="#edtech" className="bg-[#D97A06] flex items-center justify-center md:block h-[140px] md:h-full pt-0 md:pt-[100px] text-center w-full md:w-1/4">
          <span>Edtech</span>
          <span className="flex flex-col md:hidden justify-end align-bottom cursor-pointer h-[20px] w-[20px]">
              <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
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

        </Link>
        <Link href="#fintech" className="bg-[#BF4142] flex items-center justify-center md:block h-[140px] md:h-full pt-0 md:pt-[100px] text-center w-full md:w-1/4">
         <span>Fintech</span>
          <span className="flex flex-col md:hidden justify-end align-bottom cursor-pointer h-[20px] w-[20px]">
              <svg
              className="size-12"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
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
        </Link>
      </div>

        <HealthTech/>
        <Ecomm />
        <EdTech />
        <FinTech />

    </main>
  );
}
