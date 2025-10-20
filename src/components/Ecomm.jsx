"use client";
 import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EcommSlider1 from './EcommSlider1';
import EcommSlider2 from './EcommSlider2'
import EcommSlider3 from './EcommSlider3'

gsap.registerPlugin(ScrollTrigger);

const Ecommerce = () => {
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
            <section className="bg-[#F2BA0F]" > 
             <div className="pb-16 text-[#1D2328] max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
               <div className="mx-auto pt-[56px] md:pt-[100px] 2xl:pt-[132px] space-y-[10px]">
                 <h1 className="font-[700] text-[56px] md:text-[96px] 2xl:text-[100px] leading-[125%] tracking-[-3%]">
                   E-commerce
                 </h1>
                 <p className="text-[24px] md:text-[32px] 2xl:text-[40px] leading-[125%]  max-w-[780px] tracking-[3%]">
                  What Women&#39;s Digital Experiences Tell Us About Trust, Choice, and Opportunity in West Africa&#39;s 
                  Digital Marketplaces
                 </p>
               </div>
               <div className="my-[40px] max-w-full lg:max-w-[570px] 2xl:max-w-[800px] lg:ml-auto space-y-[20px] font-[500] text-[18px] leading-[150%] tracking-[-3%]">
                 <p>
                    E-commerce in West Africa is experiencing significant growth. The market size reached USD 216.85 billion in 2024 and is projected to reach USD 1,711.12 billion by 2033, exhibiting a compound annual growth rate (CAGR) of 25.80% during 2025–2033 IMARC Group. This expansion is driven by factors such as improved digital connectivity, increased smartphone penetration, and government investment in digital infrastructure.
                    </p>
                    <p>
                    However, this growth coexists with significant challenges as trust remains fragile, with concerns around fraud, product quality, and delivery reliability shaping how people engage with online platforms. 
                    </p>
                    <p>
                    The goal would be to balance scale with trust, by creating reliable, transparent, and localized experiences that build long-term confidence in online shopping.        
                 </p>
               </div>
               <h4 className="loraFont italic text-[32px] leading-[120%] font-[500] tracking-[-3%] pb-[8px] border-b w-fit border-b-[#664D00] text-[#664D00]">
                 E-commerce
               </h4>
             </div>
             </section>
            <section ref={sectionRef}  className='flex flex-col md:flex-row w-[100vw] md:w-[300vw] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] '>
            <EcommSlider1 />
            <EcommSlider2 /> 
            <EcommSlider3 />
       </section>
        </main>

       
    )
}

export default Ecommerce;
