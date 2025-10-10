'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Fixed & improved Horizontal scroller component
// - Proper ScrollTrigger import & typing
// - Ensures vertical scroll maps automatically to horizontal movement (no manual horizontal scroll needed)
// - Fixes the dark/blank area by correctly sizing the container and ensuring panels fill the viewport
// - Adds optional wheel/touch mapping so mouse/touch actions behave consistently

gsap.registerPlugin(ScrollTrigger);

function HealthTechPanel() {
  return (
    <section className="w-full h-full flex items-center">
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-4 h-full">
          <div className="col-span-12 lg:col-span-6 row-span-3 bg-gradient-to-br from-orange-400 to-orange-300 rounded-lg p-6 shadow-lg flex flex-col justify-between">
            <div className="flex gap-6 items-start">
              <div>
                <div className="text-[72px] font-bold leading-none">38%</div>
                <div className="text-sm">Respondents in Nigeria</div>
              </div>
              <div className="text-[56px] font-bold leading-none">+</div>
              <div>
                <div className="text-[72px] font-bold leading-none">49%</div>
                <div className="text-sm">Respondents in Ghana</div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <p className="max-w-md text-sm">Are unemployed or self-employed which means that digital adoption depends on income security.</p>
              <div className="text-2xl">→</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-start-7 lg:col-span-2 lg:row-span-2 bg-[#F1EADA] rounded-lg p-4 flex items-center justify-center">
            <p className="text-sm">Ground insights driving health solutions for women in West Africa.</p>
          </div>

          <div className="col-span-12 lg:col-start-9 lg:col-span-4 lg:row-span-2 bg-[#C596FE] rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="text-[48px] font-bold">45%</div>
              <div className="text-sm">Use digital platforms</div>
            </div>
            <div className="opacity-80">↗</div>
          </div>

          <div className="col-span-12 lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:row-span-2 bg-[#1CC694] rounded-lg p-4 flex items-center">
            <div>
              <div className="text-lg font-medium">Affordable, productive, and educational solutions</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-start-4 lg:col-span-3 lg:row-start-4 lg:row-span-2 bg-[#F8FE89] rounded-lg p-4 flex flex-col justify-between">
            <div>
              <div className="text-[40px] font-bold">500</div>
              <div className="text-sm">Women</div>
            </div>
            <div className="text-xs mt-2">Nigeria · Ghana · Togo · Benin · Senegal · Sierra Leone · Liberia · Côte d’Ivoire</div>
          </div>

          <div className="col-span-12 lg:col-start-7 lg:col-span-6 lg:row-start-3 lg:row-span-3 bg-gray-800 rounded-lg p-6 text-white flex items-center">
            <div>
              <h3 className="text-2xl font-bold">PRODUCT BOOSTERS</h3>
              <p className="mt-2 max-w-lg">Could framing healthtech around productivity and earning potential spark interest and accelerate adoption among women seeking additional income or managing side hustles?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Panel({ children, bg = 'bg-white' }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className={`w-screen h-screen flex items-center justify-center ${bg}`}>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

export default function Horizontal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const inner = innerRef.current;

    // ensure inner is full-height and panels are full-viewport
    inner.style.height = '100vh';
    inner.style.display = 'flex';

    const panels = Array.from(inner.children) as HTMLElement[];
    panels.forEach((el) => {
      el.style.minWidth = '100vw';
      el.style.height = '100vh';
      el.style.flexShrink = '0';
      // ensure each panel provides its own background to avoid blank areas
      if (!getComputedStyle(el).backgroundImage && !getComputedStyle(el).backgroundColor) {
        el.style.backgroundColor = window.getComputedStyle(document.body).backgroundColor || '#fff';
      }
    });

    const createTimeline = () => {
      const totalWidth = inner.scrollWidth;
      const vw = window.innerWidth;
      const scrollDistance = Math.max(0, totalWidth - vw);

      // set container height so there's vertical space to map to horizontal movement
      container.style.height = `${window.innerHeight + scrollDistance}px`;

      // cleanup old trigger
      if (stRef.current) {
        try { stRef.current.kill(); } catch (e) {}
        stRef.current = null;
      }

      // Reset transform
      inner.style.transform = 'translateX(0px)';

      // When scrollDistance == 0, nothing to animate (small screens). In that case we don't pin.
      if (scrollDistance <= 0) return;

      const tl = gsap.timeline({ defaults: { ease: 'none' } });
      tl.to(inner, { x: () => `-${scrollDistance}px`, duration: 1 });

      const trig = ScrollTrigger.create({
        animation: tl,
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // disable automatic extra spacing; we'll manage spacing manually to avoid blank gaps
        pinSpacing: false,
        onLeave() {
          // when we finish the horizontal scroll, shrink the container so the next vertical content sits immediately
          try { container.style.height = `${window.innerHeight}px`; } catch (e) {}
        },
        onEnterBack() {
          // when re-entering from below, restore computed height
          try { container.style.height = `${window.innerHeight + scrollDistance}px`; } catch (e) {}
        }
      });

      stRef.current = trig;
    };

    createTimeline();

    const onResize = () => {
      clearTimeout((window as any)._horizResizeTimer);
      (window as any)._horizResizeTimer = setTimeout(() => {
        // kill+refresh
        try { stRef.current?.kill(); } catch (e) {}
        ScrollTrigger.refresh();
        createTimeline();
      }, 80);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    // Wheel handler: when pointer is inside container we want vertical wheel to drive the page (default).
    // This handler prevents accidental horizontal wheel events from moving inner scrollbar.
    const onWheel = (e: WheelEvent) => {
      // If there's horizontal delta and the user is over the container, map it to vertical scroll
      const rect = container.getBoundingClientRect();
      const over = rect.top <= 0 && rect.bottom >= 0;
      if (!over) return;
      // if user uses horizontal wheel (trackpad) convert to vertical scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // push the page vertically
        window.scrollBy({ top: e.deltaX, left: 0, behavior: 'auto' });
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      window.removeEventListener('wheel', onWheel);
      try { stRef.current?.kill(); } catch (e) {}
      stRef.current = null;
    };
  }, []);

  return (
    <div className="w-full">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Intro — scroll down to enter the horizontal section</h1>
          <p className="text-lg text-gray-600">This demo pins a section and maps vertical scroll to horizontal panels using GSAP ScrollTrigger.</p>
        </div>
      </div>

      <div ref={containerRef} className="w-full overflow-hidden">
        <div ref={innerRef} className="flex w-full">
          <div className="flex-shrink-0 w-screen h-screen">
            <Panel bg="bg-gradient-to-br from-orange-100 to-orange-200">
              <HealthTechPanel />
            </Panel>
          </div>

          <div className="flex-shrink-0 w-screen h-screen">
            <Panel bg="bg-gradient-to-br from-orange-200 to-orange-300">
              <div className="p-12 max-w-4xl">
                <h2 className="text-4xl font-bold mb-4">PRODUCT BOOSTERS</h2>
                <p>Could framing healthtech around productivity and earning potential spark interest and accelerate adoption among women seeking additional income?</p>
              </div>
            </Panel>
          </div>

          <div className="flex-shrink-0 w-screen h-screen">
            <Panel bg="bg-gradient-to-br from-purple-200 to-purple-300">
              <div className="p-12 max-w-4xl">
                <h2 className="text-4xl font-bold mb-4">PATIENTS TO POWERHOUSE</h2>
                <p>What if healthtech platforms doubled as learning & empowerment tools—embedding maternal health, wellness, and preventive care content?</p>
              </div>
            </Panel>
          </div>

          <div className="flex-shrink-0 w-screen h-screen">
            <Panel bg="bg-gray-900">
              <div className="p-12 max-w-4xl text-white">
                <h2 className="text-4xl font-bold mb-4">IMAGE / VISUAL PANEL</h2>
                <p>This area could host a full-bleed photo or a data visualization component.</p>
              </div>
            </Panel>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl text-center p-8">
          <h2 className="text-3xl font-semibold">Vertical scrolling resumes here</h2>
          <p className="mt-2 text-gray-600">You can continue down the page normally now.</p>
        </div>
      </div>
    </div>
  );
}
