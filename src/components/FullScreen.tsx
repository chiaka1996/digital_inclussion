"use client";

import { CardData } from '@/app/page';
import { motion } from 'framer-motion';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

export default function Fullscreen({ data, index, onClose, onPrev, onNext, navMode, navSign, initialSide, children }:
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
