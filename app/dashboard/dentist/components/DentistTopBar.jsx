"use client";

import Link from "next/link";
import { BellIcon } from "../../components/Icons";

export default function DentistTopBar({ onMenuToggle }) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 lg:px-6 py-3 flex items-center justify-between gap-4 sticky top-0 z-10">
      {/* Left: Hamburger (mobile) + Greeting */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={onMenuToggle}
          aria-label="Open menu"
        >
          <span className="block w-5 h-0.5 bg-slate-600" />
          <span className="block w-5 h-0.5 bg-slate-600" />
          <span className="block w-5 h-0.5 bg-slate-600" />
        </button>

        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-slate-800">Good morning,</span>
            <span className="text-sm font-semibold text-slate-800">Dr. Ananya</span>
            <span className="hidden sm:inline text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              Preferred: Marathi (मराठी)
            </span>
          </div>
          <p className="text-xs text-slate-500 hidden md:block mt-0.5">
            Here&apos;s your clinical operatory schedule, translation queue, and live telemetry.
          </p>
        </div>
      </div>

      {/* Right: Telemetry status + Patient/Dentist toggle + Bell + Avatar */}
      <div className="flex items-center gap-2.5 flex-shrink-0">
        {/* IndicTrans2 Status */}
        <div className="hidden sm:flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          <span className="text-[10px] font-semibold text-emerald-600">IndicTrans2: Online (&lt; 280ms)</span>
        </div>

        {/* Translation icons */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-xs font-medium text-slate-600">
          <span>A</span>
          <span className="text-[10px] text-slate-400">EN</span>
          <span>⇄</span>
          <span className="text-[10px] text-slate-400">MR</span>
        </div>

        {/* Patient / Dentist toggle */}
        <div className="flex items-center rounded-full border border-slate-200 overflow-hidden text-xs">
          <Link href="/dashboard" className="px-3 py-1.5 text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1">
            <span>👤</span> Patient
          </Link>
          <button className="px-3 py-1.5 bg-slate-800 text-white font-medium flex items-center gap-1">
            <span>🩺</span> Dentist
          </button>
        </div>

        {/* Notifications */}
        <button
          className="relative p-1.5 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Notifications"
        >
          <BellIcon className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 border border-white" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            DR
          </div>
          <div className="hidden xl:block text-left text-xs">
            <div className="font-semibold text-slate-800 leading-tight">Dr. Ananya</div>
            <div className="text-[10px] text-slate-400 leading-tight">Dentist</div>
          </div>
        </div>
      </div>
    </header>
  );
}
