"use client";
 import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HealthSlider1 from './HealthSlider1';
import HealthSlider2 from './HealthSlider2'
import HealthSlider3 from './HealthSlider3'

gsap.registerPlugin(ScrollTrigger);

const Healthcare = () => {
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
        <main id="health">
            <section className="bg-[#BF4804]" > 
             <div className="pb-16 text-[#E9EBF5] max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
               <div className="mx-auto pt-[56px] md:pt-[100px] 2xl:pt-[132px] space-y-[10px]">
                 <h1 className="font-[700] text-[56px] md:text-[96px] 2xl:text-[100px] leading-[125%] tracking-[-3%]">
                   Healthtech
                 </h1>
                 <p className="text-[24px] md:text-[32px] 2xl:text-[40px] leading-[125%]  max-w-[780px] tracking-[3%]">
                   What 500 Women across West Africa Revealed on Digital
                   Adoption Patterns, Behaviours and Drivers
                 </p>
               </div>
               <div className="my-[40px] max-w-full lg:max-w-[570px] 2xl:max-w-[800px] lg:ml-auto space-y-[20px] font-[500] text-[18px] leading-[150%] tracking-[-3%]">
                 <p>
                   In many communities, women still navigate crowded clinics, paper records, and out-of-pocket fees that make accessing health services,
                    and wellness guidance slow, costly, and sometimes out of reach. At the same time, mobile phones and digital tools are reshaping 
                    what healthcare access can look like, from messaging a nurse on WhatsApp for symptom advice, to following online tutorials for 
                    nutrition, maternal health, or self-care, and also learning new skills that support their livelihoods.
                 </p>
                 <p>
                 This creates both urgency and opportunity: how do we expand access to timely, reliable, and affordable healthcare services without 
                 overburdening fragile health systems, while creating solutions that women trust and find genuinely valuable? How do we design 
                 healthtech to be affordable, efficient, and supportive of women&#39;s daily lives; including their learning, productivity, 
                 and side hustles, in the way that helps transform women from passive patients into informed, empowered decision-makers 
                 in their own health journeys.
                 </p>
               </div>
               <h4 className="loraFont italic text-[32px] leading-[120%] font-[500] tracking-[-3%] pb-[8px] border-b w-fit border-b-white">
                 Healthtech
               </h4>
             </div>
             </section>
            <section ref={sectionRef}  className='flex flex-col md:flex-row w-[100vw] md:w-[300vw] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] '>
            <HealthSlider1 />
            <HealthSlider2 /> 
            <HealthSlider3 />
       </section>
        </main>

       
    )
}

export default Healthcare;
