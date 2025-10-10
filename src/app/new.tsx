// pages/index.tsx
// A single-file demo Next.js + Tailwind + TypeScript React component demonstrating
// smooth card -> fullscreen expansion using framer-motion's shared layout + a small GSAP flourish.
// Interaction pattern:
//  - Each Fullscreen instance ALWAYS has exactly three slides: [main, card1, card2].
//  - The parent passes dynamic JSX for those slides as children to Fullscreen.
//  - Fullscreen preserves the custom scrolling/keyboard behavior (vertical -> horizontal steps -> vertical transition between cards)
//  - If a parent omits any slide, sensible fallbacks are rendered.

import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

type CardData = {
  id: string;
  title: string;
  subtitle?: string;
  color: string; // any valid css color
  variant: 'orange' | 'mustard';
};

const cards: CardData[] = [
  { id: 'health', title: 'Healthtech', color: '#C94A0B', variant: 'orange' },
  { id: 'ecom', title: 'E‑commerce', color: '#F2C33A', variant: 'mustard' },
  { id: 'edtech', title: 'Edtech', color: '#E07B14', variant: 'orange' },
  { id: 'fin', title: 'Fintech', color: '#C74B4B', variant: 'orange' },
];

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [navMode, setNavMode] = useState<'normal' | 'vertical'>('normal');
  const [navSign, setNavSign] = useState<number>(1);
  const [initialSideStep, setInitialSideStep] = useState<number>(0);

  useEffect(() => {
    if (selectedIndex !== null) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.modal-inner', { scale: 0.985, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'power2.out' });
      });
      return () => ctx.revert();
    }
  }, [selectedIndex]);

  const openAt = (index: number) => {
    setNavMode('normal');
    setInitialSideStep(0);
    setSelectedIndex(index);
  };
  const close = () => setSelectedIndex(null);

  const goto = (index: number, mode: 'normal' | 'vertical' = 'normal', sign = 1, initialSide = 0) => {
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;
    setNavMode(mode);
    setNavSign(sign);
    setInitialSideStep(initialSide);
    setSelectedIndex(index);
  };

  // Helper that returns the three slide nodes for a given main card index
  const renderSlidesFor = (index: number) => {
    // Example customizations per card
    switch (cards[index].id) {
      case 'health':
        return (
          <>
            {/* main - images gallery */}
            <div className="w-screen px-10 py-12">
              <h2 className="text-5xl font-bold">Health — Gallery</h2>
              <p className="mt-4 max-w-prose text-gray-700">A small gallery of images related to the health study.</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <img src="/images/sample-doctor.jpg" alt="doc" className="w-full h-48 object-cover rounded" />
                <img src="/images/sample-doctor.jpg" alt="clinic" className="w-full h-48 object-cover rounded" />
                <img src="/images/sample-doctor.jpg" alt="survey" className="w-full h-48 object-cover rounded" />
              </div>
            </div>

            {/* card1 - large visual */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-5xl w-full h-[70vh] rounded-2xl shadow-xl overflow-hidden" style={{ background: '#fff' }}>
                <img src="/images/sample-doctor.jpg" alt="large" className="w-full h-full object-cover" />
                <p>Troy</p>
              </div>
            </div>

            {/* card2 - stats */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-12 bg-white">
                <h3 className="text-4xl font-bold text-gray-900">Key Numbers</h3>
                <div className="mt-6 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-extrabold">38%</div>
                    <div className="text-sm text-gray-600">Adoption increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-extrabold">48.5%</div>
                    <div className="text-sm text-gray-600">Active users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-extrabold">295</div>
                    <div className="text-sm text-gray-600">Respondents (Nigeria)</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 'ecom':
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
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden" style={{ background: '#fff' }}>
                <img src="/images/sample-doctor.jpg" alt="ecom" className="w-full h-full object-cover" />
                <h3>something to show</h3>
              </div>
            </div>

            {/* card2 - callout */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-10 bg-white">
                <h3 className="text-3xl font-bold">Top Insight</h3>
                <p className="mt-4 text-gray-700">Investment in last-mile logistics reduces delivery failures by up to 40%.</p>
              </div>
            </div>
          </>
        );

      case 'edtech':
        return (
          <>
            {/* main - svg/text combo */}
            <div className="w-screen px-10 py-12">
              <h2 className="text-5xl font-bold">Edtech — Visuals</h2>
              <p className="mt-4 text-gray-700">A mix of vector visuals and short descriptions.</p>
              <div className="mt-8 flex gap-6">
                <svg width="120" height="120" viewBox="0 0 24 24" className="bg-white p-4 rounded shadow">
                  <circle cx="12" cy="12" r="10" fill="#E07B14" />
                  <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10">SVG</text>
                </svg>
                <div className="flex-1">
                  <h4 className="font-semibold">Digital lessons</h4>
                  <p className="text-gray-600">Short interactive modules showed higher completion rates.</p>
                </div>
              </div>
            </div>

            {/* card1 - numbers */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-12 bg-white">
                <h3 className="text-4xl font-bold">Metrics</h3>
                <div className="mt-6 grid grid-cols-3 gap-6">
                  <div className="text-center"><div className="text-4xl font-extrabold">72%</div><div className="text-sm text-gray-600">Engagement</div></div>
                  <div className="text-center"><div className="text-4xl font-extrabold">54%</div><div className="text-sm text-gray-600">Completion</div></div>
                  <div className="text-center"><div className="text-4xl font-extrabold">120k</div><div className="text-sm text-gray-600">Sessions</div></div>
                </div>
              </div>
            </div>

            {/* card2 - extra text */}
            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-10 bg-white">
                <h3 className="text-3xl font-bold">Note</h3>
                <p className="mt-4 text-gray-700">Localized content outperformed generic content across all markets.</p>
              </div>
            </div>
          </>
        );

      default:
        // generic demo slides for other cards
        return (
          <>
            <div className="w-screen px-10 py-12">
              <h2 className="text-5xl font-bold">{cards[index].title} — main</h2>
              <p className="mt-4 text-gray-700">Default dynamic main content.</p>
            </div>

            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-12 bg-white">Card 1</div>
            </div>

            <div className="w-screen flex items-center justify-center p-12">
              <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden p-12 bg-white">Card 2</div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 items-start gap-8">
          <div className="col-span-7">
            <h1 className="text-6xl font-extrabold leading-tight">Findings from<br/>500 Women</h1>
            <p className="mt-6 text-gray-300 max-w-lg">Across West Africa on Digital Adoption Patterns, Behaviours and Drivers</p>
          </div>
          <div className="col-span-5 text-sm text-gray-400">
            <p>
              Click a card below to expand it into a fullscreen report view. Each Fullscreen expects exactly three slides passed as children: main, card1, card2.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-0 h-64">
        <LayoutGroup>
          {cards.map((c, i) => (
            <Card key={c.id} data={c} onClick={() => openAt(i)} />
          ))}
        </LayoutGroup>
      </div>

      <LayoutGroup>
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
              onPrev={(mode = 'normal', initialSide = 0) => goto((selectedIndex ?? 0) - 1, mode, -1, initialSide)}
              onNext={(mode = 'normal', initialSide = 0) => goto((selectedIndex ?? 0) + 1, mode, 1, initialSide)}
            >
              {renderSlidesFor(selectedIndex)}
            </Fullscreen>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}

function Card({ data, onClick }: { data: CardData; onClick: () => void }) {
  return (
    <motion.button
      className="focus:outline-none"
      layoutId={`card-${data.id}`}
      onClick={onClick}
      style={{ background: data.color }}
      aria-label={`Open ${data.title}`}
    >
      <div className="h-64 flex items-end p-8">
        <h3 className="text-2xl font-semibold text-black">{data.title}</h3>
      </div>
    </motion.button>
  );
}

function Fullscreen({ data, index, onClose, onPrev, onNext, navMode, navSign, initialSide, children }:
  { data: CardData; index: number; onClose: () => void; onPrev: (mode?: 'normal'|'vertical', initialSide?: number) => void; onNext: (mode?: 'normal'|'vertical', initialSide?: number) => void; navMode: 'normal'|'vertical'; navSign: number; initialSide: number; children?: ReactNode }) {

  // Accept children and enforce exactly 3 slides: [main, card1, card2]
  let panels = React.Children.toArray(children);
  // If the parent returned a single fragment (common when returning <>...</> from a function),
  // React may treat the fragment itself as one child whose children are inside props.children.
  // Detect that case and flatten the fragment's children so we reliably get three slides.
  if (panels.length === 1 && React.isValidElement(panels[0]) && (panels[0] as any).props && (panels[0] as any).props.children) {
    panels = React.Children.toArray((panels[0] as any).props.children);
  }

  const mainPanel = panels[0] ?? null;
  const card1Panel = panels[1] ?? null;
  const card2Panel = panels[2] ?? null;

  // Force SIDE_COUNT = 2 (card1, card2). Main panel is separate.
  const SIDE_COUNT = 2;
  const [sideStep, setSideStep] = useState(0);

  const wheelCooldown = useRef(false);
  const wheelAccum = useRef(0);
  const touchStartY = useRef<number | null>(null);

  // Sensitivity tuning (you can tweak these values)
  const WHEEL_THRESHOLD = 160; // increased to make scroll less sensitive
  const WHEEL_COOLDOWN_MS = 700;
  const TOUCH_THRESHOLD = 100;

  useEffect(() => {
    setSideStep(initialSide ?? 0);
    wheelAccum.current = 0;
  }, [index, initialSide]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (sideStep < SIDE_COUNT) setSideStep((s) => Math.min(SIDE_COUNT, s + 1));
        else onNext('vertical', 0);
      }
      if (e.key === 'ArrowLeft') {
        if (sideStep > 0) setSideStep((s) => Math.max(0, s - 1));
        else onPrev('vertical', SIDE_COUNT);
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onNext, onPrev, onClose, sideStep]);

  const handleWheel = (e: React.WheelEvent) => {
    // prevent default page scroll while fullscreen is active
    e.preventDefault();
    e.stopPropagation();

    if (wheelCooldown.current) return;
    wheelAccum.current += e.deltaY;

    if (Math.abs(wheelAccum.current) < WHEEL_THRESHOLD) return;

    const delta = wheelAccum.current;
    wheelAccum.current = 0;

    if (delta > 0) {
      if (sideStep < SIDE_COUNT) setSideStep((s) => s + 1);
      else onNext('vertical', 0);
    } else {
      if (sideStep > 0) setSideStep((s) => s - 1);
      else onPrev('vertical', SIDE_COUNT);
    }

    wheelCooldown.current = true;
    setTimeout(() => { wheelCooldown.current = false; wheelAccum.current = 0; }, WHEEL_COOLDOWN_MS);
  };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current == null) return;
    const currentY = e.touches[0].clientY;
    const diff = touchStartY.current - currentY;
    if (Math.abs(diff) > TOUCH_THRESHOLD) {
      if (diff > 0) {
        if (sideStep < SIDE_COUNT) setSideStep((s) => s + 1);
        else onNext('vertical', 0);
      } else {
        if (sideStep > 0) setSideStep((s) => s - 1);
        else onPrev('vertical', SIDE_COUNT);
      }
      touchStartY.current = null;
    }
  };
  const handleTouchEnd = () => { touchStartY.current = null; };

  const translateX = `-${sideStep * 100}vw`;

  const containerVariants = {
    initial: (mode: 'normal'|'vertical') => mode === 'vertical' ? { y: `${navSign * 100}vh`, opacity: 0 } : { opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: (mode: 'normal'|'vertical') => mode === 'vertical' ? { y: `${-navSign * 100}vh`, opacity: 0 } : { opacity: 0 },
  };

  return (
    <motion.div
      custom={navMode}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-stretch"
      onClick={onClose}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        layoutId={`card-${data.id}`}
        className="flex-1 h-full modal-inner overflow-hidden"
        style={{ background: data.color }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* horizontal track: main + 2 side cards (fixed) */}
        <motion.div
          className="flex h-full"
          animate={{ x: translateX }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          style={{ width: `calc(100vw * ${1 + SIDE_COUNT})` }}
        >
          {/* main panel */}
          <div className="w-screen">{mainPanel ?? <DefaultMain data={data} />}</div>

          {/* card1 */}
          <div className="w-screen">{card1Panel ?? <DefaultSide index={1} />}</div>

          {/* card2 */}
          <div className="w-screen">{card2Panel ?? <DefaultSide index={2} />}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function DefaultMain({ data }: { data: CardData }) {
  return (
    <div className="w-screen max-w-6xl mx-auto p-10 grid grid-cols-12 gap-6 items-start">
      <div className="col-span-7">
        <h2 className="text-6xl font-extrabold text-black leading-tight">{data.title}<br/><span className="block">500 Women</span></h2>
        <p className="mt-6 text-black/80 max-w-md">Fallback main panel — replace by passing a custom main child.</p>
      </div>
      <div className="col-span-5 text-right">
        <div className="flex justify-end gap-3 items-center">
          <button className="px-3 py-2 border rounded bg-black/10 text-black">←</button>
          <button className="px-3 py-2 border rounded bg-black/10 text-black">→</button>
          <button className="px-4 py-2 border rounded bg-black/10 text-black">Close</button>
        </div>
      </div>
    </div>
  );
}

function DefaultSide({ index }: { index: number }) {
  return (
    <div className="w-screen flex items-center justify-center p-12">
      <div className="max-w-4xl w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden flex" style={{ background: '#fff' }}>
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h3 className="text-4xl font-bold text-gray-900">Side Card {index}</h3>
          <p className="mt-4 text-gray-700">Fallback side panel.</p>
        </div>
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(/images/sample-doctor.jpg)` }} />
      </div>
    </div>
  );
}

