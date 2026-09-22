"use client";

import { currentUser } from "../data/mockData";
import { BellIcon } from "./Icons";

export default function TopBar({ onMenuToggle }) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 lg:px-6 py-3 flex items-center justify-between gap-4 sticky top-0 z-10">
      {/* Left: Hamburger (mobile) + Greeting */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Mobile menu button */}
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
            <span className="text-sm font-semibold text-slate-800">Sakshi</span>
            <span className="hidden sm:inline text-xs text-slate-400">•</span>
            <span className="hidden sm:inline text-xs text-slate-500">
              Preferred: Marathi (मराठी)
            </span>
          </div>
          <p className="text-xs text-slate-500 hidden md:block mt-0.5">
            Here&apos;s an overview of your dental teleconsultations and live speech sync.
          </p>
        </div>
      </div>

      {/* Right: Status + Patient toggle + Bell + Avatar */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* IndicTrans2 Status */}
        <div className="hidden sm:flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
          <span className="text-[10px] font-medium text-slate-600">IndicTrans2:</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          <span className="text-[10px] font-semibold text-green-600">Online (&lt;280ms)</span>
        </div>

        {/* Patient / Dentist toggle */}
        <div className="flex items-center rounded-full border border-slate-200 overflow-hidden text-xs">
          <button className="px-3 py-1.5 bg-teal-600 text-white font-medium">Patient</button>
          <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-50 transition-colors">
            Dentist
          </button>
        </div>

        {/* Bell */}
        <button
          className="relative p-1.5 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Notifications"
        >
          <BellIcon className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 border border-white" />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {currentUser.avatarInitials}
        </div>
      </div>
    </header>
  );
}
