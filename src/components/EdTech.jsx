"use client";
 import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EdTechSlider1 from './EdTechSlider1';
import EdTechSlider2 from './EdTechSlider2'
import EdTechSlider3 from './EdTechSlider3'

gsap.registerPlugin(ScrollTrigger);

const EdTech = () => {
     const sectionRef = useRef(null);

 useEffect(() => {
   const mm  = gsap.matchMedia(); // create matchMedia instance

    mm.add("(min-width: 760px)", () => {
      const section = sectionRef.current;
      const slides = gsap.utils.toArray(section.children);

     gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${slides.length * 120}%`,
            pin: true,
            scrub: 0.3,
            pinSpacing: true, 
            snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.2,
            delay: 0,
            ease: "power1.inOut",
            },
        },
        });


      // optional cleanup when condition no longer matches
      return () => gsap.set(slides, { clearProps: "all" });
    });

    return () => mm.revert();
  }, []);


    return(
        <main id="ecommerce">
            <section className="bg-[#D97A06]" > 
             <div className="pb-16 text-[#1D2328] max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
               <div className="mx-auto pt-[56px] md:pt-[100px] 2xl:pt-[132px] space-y-[10px]">
                 <h1 className="font-[700] text-[56px] md:text-[96px] 2xl:text-[100px] leading-[125%] tracking-[-3%]">
                   Edtech
                 </h1>
                 <p className="text-[24px] md:text-[32px] 2xl:text-[40px] leading-[125%]  max-w-[780px] tracking-[3%]">
                  How Women&#39;s Learning Habits Are Shaping the Next Wave of Digital Education in West Africa
                 </p>
               </div>
               <div className="my-[40px] max-w-full lg:max-w-[570px] 2xl:max-w-[800px] lg:ml-auto space-y-[20px] font-[500] text-[18px] leading-[150%] tracking-[-3%]">
                 <p>
                  The West African online education market was valued at USD 715.96 million in 2024 and is projected to reach USD 5,108.24 million by 2033, growing at a 24.40% CAGR imarcgroup.com. A rapidly growing youth population and widespread mobile adoption make digital education a natural pathway for expanding access to learning. 
                </p>
                <p>
                  Yet affordability, unreliable infrastructure, and uneven digital literacy continue to shape how, when, and where learners can engage with technology.
                </p>
                <p>
                  The mandate is to design platforms that are both inclusive and sustainable, enabled by strong partnerships and scalable technology that balance affordability, business viability, and the realities of women across the region.
                </p>
               </div>
               <h4 className="loraFont italic text-[32px] leading-[120%] font-[500] tracking-[-3%] pb-[8px] border-b w-fit border-b-[#FBC37E] text-[#FBC37E]">
                 Edtech
               </h4>
             </div>
             </section>
            <section ref={sectionRef}  className='flex flex-col md:flex-row w-[100vw] md:w-[300vw] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] '>
            <EdTechSlider1 />
            <EdTechSlider2 /> 
            <EdTechSlider3 />
       </section>
        </main>

       
    )
}

export default EdTech;
