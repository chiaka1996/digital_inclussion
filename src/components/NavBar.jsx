"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!navRef.current) return;

       setShowSideBar(false);

      // Scroll down → hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });
      } 
      // Scroll up → show navbar
      else {
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[500] bg-[#1E2329]/90 backdrop-blur-[20px] transition-transform duration-300"
    >
      <nav className="relative py-[47px] md:py-[56px] flex justify-between items-center max-w-[1536px] mx-auto px-[24px] md:px-[40px] 2xl:px-0">
        <Link
          href="/"
          className="text-[var(--color-highlight)] text-3xl font-black"
        >
          DODO
        </Link>

        <div className="flex justify-between gap-[40px] text-[#FEF7EA] text-[16px] font-[600] leading-[125%] tracking-[3%]">
          <Link href="/">Contact us</Link>
          <span
            className="cursor-pointer"
            onClick={() => setShowSideBar((prev) => !prev)}
          >
            Menu
          </span>
        </div>

              {/* Side bar */}
      <nav
        className={`${
          showSideBar ? "block" : "hidden"
        } space-y-[20px] bg-[#1E2329] absolute top-[100%] right-[24px] md:right-[40px] 2xl:right-0 w-[150px] text-[#FEF7EA] text-[16px] font-[600] leading-[125%] tracking-[3%]`}
      >
        <Link
          href="#"
          className="block flex justify-end gap-[12px] items-center"
        >
          <span>Back to Home</span>
          <Image
            src="/images/right_arrow.png"
            width={7}
            height={12}
            alt="digital inclusion by Dodo"
          />
        </Link>

        <Link
          href="/#healthtech"
          className="block flex justify-end gap-[12px] items-center"
        >
          <span>Healthtech</span>
          <Image
            src="/images/right_arrow.png"
            width={7}
            height={12}
            alt="digital inclusion by Dodo"
          />
        </Link>

        <Link
          href="/#ecommerce"
          className="block flex justify-end gap-[12px] items-center"
        >
          <span>Ecommerce</span>
          <Image
            src="/images/right_arrow.png"
            width={7}
            height={12}
            alt="digital inclusion by Dodo"
          />
        </Link>

        <Link
          href="/#edtech"
          className="block flex justify-end gap-[12px] items-center"
        >
          <span>Edtech</span>
          <Image
            src="/images/right_arrow.png"
            width={7}
            height={12}
            alt="digital inclusion by Dodo"
          />
        </Link>

        <Link
          href="/#fintech"
          className="block flex justify-end gap-[12px] items-center"
        >
          <span>Fintech</span>
          <Image
            src="/images/right_arrow.png"
            width={7}
            height={12}
            alt="digital inclusion by Dodo"
          />
        </Link>
      </nav>
      </nav>


    </div>
  );
}
