'use client';
import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Reusable HorizontalScroller component
// Usage:
// <HorizontalScrollCanvas>
//   <HealthTech />
//   <PanelTwo />
//   <PanelThree />
// </HorizontalScrollCanvas>
// The component supports any number of children (panels) but for your case pass exactly 3 children.

gsap.registerPlugin(ScrollTrigger);

function DefaultPanelWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

export type HorizontalScrollCanvasProps = {
  children: ReactNode; // expected: React elements — each child becomes one horizontal panel
  headerSelector?: string; // optional CSS selector for a fixed header to compensate
  debug?: boolean; // shows ScrollTrigger markers when true
};

export default function HorizontalScrollCanvas({ children, headerSelector, debug = false }: HorizontalScrollCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const trigRef = useRef<any | null>(null);

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const inner = innerRef.current;

    // normalize children into an array of HTMLElements after render
    const setupPanels = () => {
      inner.style.height = '100vh';
      inner.style.display = 'flex';

      const panels = Array.from(inner.children) as HTMLElement[];
      panels.forEach((el) => {
        el.style.minWidth = '100vw';
        el.style.height = '100vh';
        el.style.flexShrink = '0';
        if (!getComputedStyle(el).backgroundImage && !getComputedStyle(el).backgroundColor) {
          el.style.backgroundColor = window.getComputedStyle(document.body).backgroundColor || '#fff';
        }
      });
      return panels;
    };

    const detectHeaderHeight = () => {
      if (headerSelector) {
        const el = document.querySelector(headerSelector) as HTMLElement | null;
        if (el) {
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);
          if ((style.position === 'fixed' || style.position === 'sticky') && rect.height > 0) return rect.height;
        }
      }
      // fallback generic detection: find any fixed/sticky element at top
      const all = Array.from(document.querySelectorAll('body *')) as HTMLElement[];
      for (const el of all) {
        try {
          const style = window.getComputedStyle(el);
          if ((style.position === 'fixed' || style.position === 'sticky') && parseFloat(style.top || '0') <= 1) {
            const rect = el.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) return rect.height;
          }
        } catch (e) {
          // ignore
        }
      }
      return 0;
    };

    const panels = setupPanels();

    const createTimeline = () => {
      const totalWidth = inner.scrollWidth;
      const vw = window.innerWidth;
      const scrollDistance = Math.max(0, totalWidth - vw);
      const headerOffset = detectHeaderHeight();

      // set container height large enough for vertical mapping
      container.style.height = `${window.innerHeight + scrollDistance}px`;

      // reset
      inner.style.transform = 'translateX(0px)';

      try { trigRef.current?.kill(); } catch (e) {}
      trigRef.current = null;

      if (scrollDistance <= 0) return;

      const tl = gsap.timeline({ defaults: { ease: 'none' } });
      tl.to(inner, { x: () => `-${scrollDistance}px`, duration: 1 });

      const start = headerOffset ? `top top+=${headerOffset}` : 'top top';

      const trig = ScrollTrigger.create({
        animation: tl,
        trigger: container,
        start,
        end: () => `+=${scrollDistance}`,
        scrub: 0.6,
        pin: true,
        invalidateOnRefresh: true,
        markers: debug,
        // manage spacing manually to avoid visual gaps
        pinSpacing: false,
        onLeave() {
          // collapse to viewport height when leaving so the next section sits immediately
          container.style.height = `${window.innerHeight}px`;
          // small tick to ensure layout settles (works around some Windows browser quirks)
          setTimeout(() => { try { ScrollTrigger.refresh(); } catch (e) {} }, 40);
        },
        onEnterBack() {
          // restore full height when re-entering from below
          container.style.height = `${window.innerHeight + scrollDistance}px`;
          setTimeout(() => { try { ScrollTrigger.refresh(); } catch (e) {} }, 40);
        },
      });

      trigRef.current = trig;
    };

    // initial create
    createTimeline();

    const onResize = () => {
      clearTimeout((window as any)._horizResizeTimer);
      (window as any)._horizResizeTimer = setTimeout(() => {
        try { trigRef.current?.kill(); } catch (e) {}
        ScrollTrigger.refresh();
        createTimeline();
      }, 120);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    // wheel handler maps horizontal trackpad swipe to vertical scroll while pinned
    const onWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const headerH = detectHeaderHeight();
      const over = rect.top <= (headerH + 1) && rect.bottom >= 0;
      if (!over) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        window.scrollBy({ top: e.deltaX, left: 0, behavior: 'auto' });
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      window.removeEventListener('wheel', onWheel);
      try { trigRef.current?.kill(); } catch (e) {}
      trigRef.current = null;
    };
  }, [children, headerSelector, debug]);

  // render children as full-viewport panels; if a child is not wrapped in a full-screen panel, wrap it automatically
  const childArray = React.Children.toArray(children).filter(Boolean);

  return (
    <div className="w-full">
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Intro — scroll down to enter the horizontal section</h1>
          <p className="text-lg text-gray-600">This demo pins a section and maps vertical scroll to horizontal panels using GSAP ScrollTrigger.</p>
        </div>
      </div> */}

      <div ref={containerRef} className="w-full overflow-hidden">
        <div ref={innerRef} className="flex w-full">
          {childArray.map((c, i) => (
            <div key={i} className="flex-shrink-0 w-screen h-screen">
              {/* If user passed a bare element we render it as-is; otherwise wrap it to ensure full-viewport */}
              {React.isValidElement(c) ? (
                // If the child already uses full-screen sizing, keep it; otherwise wrap
                // We can't reliably detect sizing, so we wrap everything in the wrapper to guarantee behavior
                <div className="w-full h-full">{c}</div>
              ) : (
                <DefaultPanelWrapper>{c}</DefaultPanelWrapper>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl text-center p-8">
          <h2 className="text-3xl font-semibold">Vertical scrolling resumes here</h2>
          <p className="mt-2 text-gray-600">You can continue down the page normally now.</p>
        </div>
      </div> */}
    </div>
  );
}
