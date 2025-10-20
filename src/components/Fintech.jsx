"use client";
 import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FintechSlider1 from './FintechSlider1';
import FintechSlider2 from './FintechSlider2'
import FintechSlider3 from './FintechSlider3'

gsap.registerPlugin(ScrollTrigger);

const FinTech = () => {
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
        <main id="fintech">
            <section className="bg-[#BF4142]" > 
             <div className="pb-16 text-[#E9EBF5] max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
               <div className="mx-auto pt-[56px] md:pt-[100px] 2xl:pt-[132px] space-y-[10px]">
                 <h1 className="font-[700] text-[56px] md:text-[96px] 2xl:text-[100px] leading-[125%] tracking-[-3%]">
                   Fintech
                 </h1>
                 <p className="text-[24px] md:text-[32px] 2xl:text-[40px] leading-[125%]  max-w-[780px] tracking-[3%]">
                  What Women&#39;s Financial Journeys Reveal About the Opportunities and Gaps in Digital Finance Across West Africa
                 </p>
               </div>
               <div className="my-[40px] max-w-full lg:max-w-[583px] 2xl:max-w-[800px] lg:ml-auto space-y-[20px] font-[500] text-[18px] leading-[150%] tracking-[-3%]">
                 <p>
                 Fintech in West Africa is experiencing rapid growth, driven by mobile adoption and the increasing demand for accessible financial services. However, significant barriers persist for women as only 37% of women in sub-Saharan Africa have a bank account, compared to 48% of men, and 70% of women-owned businesses report inadequate access to growth capital IMF+1.  These challenges are compounded by limited digital literacy and reliance on informal financial systems. 
                  </p>
                  <p>
                  The opportunity is enormous: digital finance can bridge gaps for women, low-income households, and women-owned businesses who are underserved by traditional banking.
                  </p>
                  <p>
                  For fintech leaders, the mandate goes beyond digitizing payments. It includes delivering accessible, affordable, and trusted services that expand inclusion while driving sustainable revenue.
                 </p>
               </div>
               <h4 className="loraFont italic text-[32px] leading-[120%] font-[500] tracking-[-3%] pb-[8px] border-b w-fit border-b-[#ECC6C6] text-[#ECC6C6]">
                 Fintech
               </h4>
             </div>
             </section>
            <section ref={sectionRef}  className='flex flex-col md:flex-row w-[100vw] md:w-[300vw] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] '>
            <FintechSlider1 />
            <FintechSlider2 /> 
            <FintechSlider3 />
       </section>
        </main>

       
    )
}

export default FinTech;
