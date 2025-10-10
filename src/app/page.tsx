"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import gsap from "gsap";
import Card from "@/components/Card";
import Fullscreen from "@/components/FullScreen";
import Ecomm  from "@/components/Ecomm";
import EdTech from "@/components/EdTech";
import FinTech from "@/components/Fintech";
import Link from "next/link";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import Image from "next/image";
import HealthTech from "@/components/HealthTech";

export type CardData = {
  id: string;
  title: string;
  subtitle?: string;
  color: string; // any valid css color
  variant: "orange" | "mustard";
};

const cards: CardData[] = [
  { id: "health", title: "Healthtech", color: "#C94A0B", variant: "orange" },
  { id: "ecom", title: "E‑commerce", color: "#F2C33A", variant: "mustard" },
  { id: "edtech", title: "Edtech", color: "#E07B14", variant: "orange" },
  { id: "fin", title: "Fintech", color: "#C74B4B", variant: "orange" },
];

export default function Page() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [navMode, setNavMode] = useState<"normal" | "vertical">("normal");
  const [navSign, setNavSign] = useState<number>(1);
  const [initialSideStep, setInitialSideStep] = useState<number>(0);

  useEffect(() => {
    if (selectedIndex !== null) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".modal-inner",
          { scale: 0.985, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, ease: "power2.out" }
        );
      });
      return () => ctx.revert();
    }
  }, [selectedIndex]);

  const openAt = (index: number) => {
    setNavMode("normal");
    setInitialSideStep(0);
    setSelectedIndex(index);
  };
  const close = () => setSelectedIndex(null);

  const goto = (
    index: number,
    mode: "normal" | "vertical" = "normal",
    sign = 1,
    initialSide = 0
  ) => {
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;
    setNavMode(mode);
    setNavSign(sign);
    setInitialSideStep(initialSide);
    setSelectedIndex(index);
  };
  

  const PanelWrapper: React.FC<{ bg?: string; title?: string; children?: React.ReactNode }> = ({ bg = 'bg-white', title, children }) => (
  <section className={`w-screen h-full ${bg} p-8 flex items-center`}>
    <div className="max-w-5xl">
      {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  </section>
);
  // Helper that returns the three slide nodes for a given main card index
  const renderSlidesFor = (index: number) => {
    // Example customizations per card
    switch (cards[index].id) {
      case "health":
        return (
          <>
            {/* main - images gallery */}
            <div className="w-screen px-10 py-12">
              <h2 className="text-5xl font-bold">Health — Gallery</h2>
              <p className="mt-4 max-w-prose text-gray-700">
                A small gallery of images related to the health study.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <img
                  src="/images/sample-doctor.jpg"
                  alt="doc"
                  className="w-full h-48 object-cover rounded"
                />
                <img
                  src="/images/sample-doctor.jpg"
                  alt="clinic"
                  className="w-full h-48 object-cover rounded"
                />
                <img
                  src="/images/sample-doctor.jpg"
                  alt="survey"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>

            {/* card1 - large visual */}
            <div className="w-screen flex items-center justify-center p-12">
              <div
                className="max-w-5xl w-full h-[70vh] rounded-2xl shadow-xl overflow-hidden"
                style={{ background: "#fff" }}
              >
                <img
                  src="/images/sample-doctor.jpg"
                  alt="large"
                  className="w-full h-full object-cover"
                />
                <p>Troy</p>
              </div>
            </div>

            {/* card2 - stats */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-12 bg-white">
                <h3 className="text-4xl font-bold text-gray-900">
                  Key Numbers
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-extrabold">38%</div>
                    <div className="text-sm text-gray-600">
                      Adoption increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-extrabold">48.5%</div>
                    <div className="text-sm text-gray-600">Active users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-extrabold">295</div>
                    <div className="text-sm text-gray-600">
                      Respondents (Nigeria)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "ecom":
        return (
          <>
            {/* main - sentences */}
            <div className="w-screen px-10 py-12">
              <h2 className="text-4xl font-bold">E‑commerce — Observations</h2>
              <ul className="mt-6 list-disc list-inside space-y-3 text-gray-700">
                <li>Users prefer cash on delivery in rural areas.</li>
                <li>Mobile-first product discovery drives conversions.</li>
                <li>Logistics remain the main friction point.</li>
              </ul>
            </div>

            {/* card1 - illustrative image */}
            <div className="w-screen flex items-center justify-center p-12">
              <div
                className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden"
                style={{ background: "#fff" }}
              >
                <img
                  src="/images/sample-doctor.jpg"
                  alt="ecom"
                  className="w-full h-full object-cover"
                />
                <h3>something to show</h3>
              </div>
            </div>

            {/* card2 - callout */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-10 bg-white">
                <h3 className="text-3xl font-bold">Top Insight</h3>
                <p className="mt-4 text-gray-700">
                  Investment in last-mile logistics reduces delivery failures by
                  up to 40%.
                </p>
              </div>
            </div>
          </>
        );

      case "edtech":
        return (
          <>
            {/* main - svg/text combo */}
            <div className="w-screen px-10 py-12">
              <h2 className="text-5xl font-bold">Edtech — Visuals</h2>
              <p className="mt-4 text-gray-700">
                A mix of vector visuals and short descriptions.
              </p>
              <div className="mt-8 flex gap-6">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  className="bg-white p-4 rounded shadow"
                >
                  <circle cx="12" cy="12" r="10" fill="#E07B14" />
                  <text
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="10"
                  >
                    SVG
                  </text>
                </svg>
                <div className="flex-1">
                  <h4 className="font-semibold">Digital lessons</h4>
                  <p className="text-gray-600">
                    Short interactive modules showed higher completion rates.
                  </p>
                </div>
              </div>
            </div>

            {/* card1 - numbers */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-12 bg-white">
                <h3 className="text-4xl font-bold">Metrics</h3>
                <div className="mt-6 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold">72%</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold">54%</div>
                    <div className="text-sm text-gray-600">Completion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-extrabold">120k</div>
                    <div className="text-sm text-gray-600">Sessions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* card2 - extra text */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-10 bg-white">
                <h3 className="text-3xl font-bold">Note</h3>
                <p className="mt-4 text-gray-700">
                  Localized content outperformed generic content across all
                  markets.
                </p>
              </div>
            </div>
          </>
        );

      default:
        // generic demo slides for other cards
        return (
          <>
            <div className="w-screen px-10 py-12">
              <h2 className="text-5xl font-bold">
                {cards[index].title} — main
              </h2>
              <p className="mt-4 text-gray-700">
                Default dynamic main content.
              </p>
            </div>

            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-12 bg-white">
                Card 1
              </div>
            </div>

            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-12 bg-white">
                Card 2
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1E2329] pt-28">
      <div className="">
        <div className="mx-auto px-10 pt-[18] pb-10 text-[#E9EBF5]">
          <h1 className="font-bold text-8xl leading-[1.25] max-h-96">
            Voices of <br /> 500 Women
          </h1>
          <p className="font-normal text-4xl leading-[1.25]">
            What 500 Women across West Africa Revealed on <br /> Digital
            Adoption Patterns, Behaviours and Drivers
          </p>
        </div>
        <div className="flex justify-end mt-10">
          <p className="w-[565px] py-10 font-medium text-lg leading-[1.5] tracking-[0.3] mr-10">
            Over the past few months, DODO's research team engaged 500 women
            across 8 West African countries of Nigeria, Ghana, Togo, Benin,
            Senegal, Sierra Leone, Liberia, and Côte d’Ivoire. Findings revealed
            digital adoption patterns, behaviours and drivers, providing
            actionable insights to inform strategic decisions and business
            growth.
            <br />
            <br />
            Insights emerged across the healthtech, e-commerce, edtech and
            fintech industries that highlight untapped consumer behaviours,
            market opportunities, and innovation pathways, that will inform
            business strategy and investment decisions across these sectors.
          </p>
        </div>
      </div>

      <div className="flex w-full gap-0 h-[429px] text-[#1D2328] font-medium text-5xl">
        <Link href="#health" className="h-full bg-[#BF4804] pt-[100px] text-center w-1/4">
          Healthtech
        </Link>
        <Link href="#ecomm" className="h-full bg-[#F2BA0F] pt-[100px] text-center w-1/4">
          E-commerce
        </Link>
        <Link href="#edtech" className="h-full bg-[#D97A06] pt-[100px] text-center w-1/4">
          Edtech
        </Link>
        <Link href="#fintech" className="h-full bg-[#BF4142] pt-[100px] text-center w-1/4">
          Finthtech
        </Link>
      </div>

      {/* repettition */}
      {/* healthtech */}
      <div className="bg-[#BF4804] pb-16" id="health">
        <div className="mx-auto px-10 pt-32  text-[#E9EBF5]">
          <h1 className="font-bold text-8xl leading-[1.25] max-h-96">
            Voices of <br /> 500 Women
          </h1>
          <p className="font-normal text-4xl leading-[1.25]">
            What 500 Women across West Africa Revealed on <br /> Digital
            Adoption Patterns, Behaviours and Drivers
          </p>
        </div>
        <div className="flex justify-end mt-10">
          <p className="w-[565px] py-10 font-medium text-lg leading-[1.5] tracking-[0.3] mr-10">
            Over the past few months, DODO's research team engaged 500 women
            across 8 West African countries of Nigeria, Ghana, Togo, Benin,
            Senegal, Sierra Leone, Liberia, and Côte d’Ivoire. Findings revealed
            digital adoption patterns, behaviours and drivers, providing
            actionable insights to inform strategic decisions and business
            growth.
            <br />
            <br />
            Insights emerged across the healthtech, e-commerce, edtech and
            fintech industries that highlight untapped consumer behaviours,
            market opportunities, and innovation pathways, that will inform
            business strategy and investment decisions across these sectors.
          </p>
        </div>
        <h4 className="ml-10 italic text-[32px] pb-[8px] border-b w-fit border-b-white">
          Healthtech
        </h4>
      </div>
      <HealthTech/>

      <div className="bg-[#F2BA0F] pb-16 text-[#1D2328]" id="ecomm">
        <div className="mx-auto px-10 pt-[18] pb-10">
          <h1 className="font-bold text-8xl leading-[1.25] max-h-96">
            Voices of <br /> 500 Women
          </h1>
          <p className="font-normal text-4xl leading-[1.25]">
            What 500 Women across West Africa Revealed on <br /> Digital
            Adoption Patterns, Behaviours and Drivers
          </p>
        </div>
        <div className="flex justify-end mt-10 mr-10">
          <p className="w-[565px] py-10 font-medium text-lg leading-[1.5] tracking-[0.3]">
            Over the past few months, DODO's research team engaged 500 women
            across 8 West African countries of Nigeria, Ghana, Togo, Benin,
            Senegal, Sierra Leone, Liberia, and Côte d’Ivoire. Findings revealed
            digital adoption patterns, behaviours and drivers, providing
            actionable insights to inform strategic decisions and business
            growth.
            <br />
            <br />
            Insights emerged across the healthtech, e-commerce, edtech and
            fintech industries that highlight untapped consumer behaviours,
            market opportunities, and innovation pathways, that will inform
            business strategy and investment decisions across these sectors.
          </p>
        </div>
        <h4 className="ml-10 italic text-[32px] pb-[8px] border-b w-fit border-b-[#1D2328]">
          E-Commerce
        </h4>
      </div>

      <Ecomm />

      {/* edtech */}

      <div className="bg-[#D97A06] pb-16 text-[#1D2328]" id="edtech">
        <div className="mx-auto px-10 pt-[18] pb-10">
          <h1 className="font-bold text-8xl leading-[1.25] max-h-96">
            Voices of <br /> 500 Women
          </h1>
          <p className="font-normal text-4xl leading-[1.25]">
            What 500 Women across West Africa Revealed on <br /> Digital
            Adoption Patterns, Behaviours and Drivers
          </p>
        </div>
        <div className="flex justify-end mt-10 mr-10">
          <p className="w-[565px] py-10 font-medium text-lg leading-[1.5] tracking-[0.3]">
            Over the past few months, DODO's research team engaged 500 women
            across 8 West African countries of Nigeria, Ghana, Togo, Benin,
            Senegal, Sierra Leone, Liberia, and Côte d’Ivoire. Findings revealed
            digital adoption patterns, behaviours and drivers, providing
            actionable insights to inform strategic decisions and business
            growth.
            <br />
            <br />
            Insights emerged across the healthtech, e-commerce, edtech and
            fintech industries that highlight untapped consumer behaviours,
            market opportunities, and innovation pathways, that will inform
            business strategy and investment decisions across these sectors.
          </p>
        </div>
        <h4 className="ml-10 italic text-[32px] pb-[8px] border-b w-fit border-b-[#1D2328]">
          Edtech
        </h4>
      </div>
      <EdTech />
      {/* fintech */}

      <div className="bg-[#BF4142] pb-16 text-[#E9EBF5]" id="fintech">
        <div className="mx-auto px-10 pt-[18] pb-10">
          <h1 className="font-bold text-8xl leading-[1.25] max-h-96">
            Voices of <br /> 500 Women
          </h1>
          <p className="font-normal text-4xl leading-[1.25]">
            What 500 Women across West Africa Revealed on <br /> Digital
            Adoption Patterns, Behaviours and Drivers
          </p>
        </div>
        <div className="flex justify-end mt-10 mr-10">
          <p className="w-[565px] py-10 font-medium text-lg leading-[1.5] tracking-[0.3]">
            Over the past few months, DODO's research team engaged 500 women
            across 8 West African countries of Nigeria, Ghana, Togo, Benin,
            Senegal, Sierra Leone, Liberia, and Côte d’Ivoire. Findings revealed
            digital adoption patterns, behaviours and drivers, providing
            actionable insights to inform strategic decisions and business
            growth.
            <br />
            <br />
            Insights emerged across the healthtech, e-commerce, edtech and
            fintech industries that highlight untapped consumer behaviours,
            market opportunities, and innovation pathways, that will inform
            business strategy and investment decisions across these sectors.
          </p>
        </div>
        <h4 className="ml-10 italic text-[32px] pb-[8px] border-b w-fit border-b-[#E9EBF5]">
          Fintech
        </h4>
      </div>
      <FinTech/>
      
      {/* <div className="grid grid-cols-4 gap-0 h-[429px]">
        <LayoutGroup>
          {cards.map((c, i) => (
            <Card key={c.id} data={c} onClick={() => openAt(i)} />
          ))}
        </LayoutGroup>
      </div> */}

      {/* <LayoutGroup>
        <AnimatePresence initial={false} mode="wait">
          {selectedIndex !== null && (
            <Fullscreen
              key={`fullscreen-${selectedIndex}-${navMode}-${initialSideStep}`}
              data={cards[selectedIndex]}
              index={selectedIndex}
              navMode={navMode}
              navSign={navSign}
              initialSide={initialSideStep}
              onClose={close}
              onPrev={(mode = "normal", initialSide = 0) =>
                goto((selectedIndex ?? 0) - 1, mode, -1, initialSide)
              }
              onNext={(mode = "normal", initialSide = 0) =>
                goto((selectedIndex ?? 0) + 1, mode, 1, initialSide)
              }
            >
              {renderSlidesFor(selectedIndex)}
            </Fullscreen>
          )}
        </AnimatePresence>
      </LayoutGroup> */}
    </div>
  );
}
