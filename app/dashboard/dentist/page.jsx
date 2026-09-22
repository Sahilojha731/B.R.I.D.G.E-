"use client";

import { useState } from "react";
import DentistSidebar from "./components/DentistSidebar";
import DentistTopBar from "./components/DentistTopBar";
import AppointmentQueue from "./components/AppointmentQueue";
import LanguageEnginePanel from "./components/LanguageEnginePanel";
import OdontogramPanel from "./components/OdontogramPanel";

export default function DentistDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f0f4f8] overflow-hidden">
      <DentistSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DentistTopBar onMenuToggle={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-5">
          {/* Hero greeting */}
          <DentistHero />

          {/* Stats row */}
          <StatsRow />

          {/* Two-column layout */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr,340px] gap-5">
            {/* Left: appointment queue + odontogram */}
            <div className="space-y-5">
              <AppointmentQueue />
              <OdontogramPanel />
            </div>

            {/* Right: language engine + 3D library */}
            <div className="space-y-5">
              <LanguageEnginePanel />
              <ThreeDLibrary />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
function DentistHero() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-5 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h1 className="text-lg font-bold text-slate-800">
              Good morning, Dr. Ananya
            </h1>
            <span className="text-[11px] font-semibold bg-violet-100 text-violet-700 border border-violet-200 px-2.5 py-0.5 rounded-full">
              Operatory Mode
            </span>
          </div>
          <p className="text-xs text-slate-500">
            BDS, MDS - Endodontics • Apex Dental Center • Operatory 02 • Native:{" "}
            <span className="font-medium text-slate-700">English</span>
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-semibold text-emerald-700">
            AI Translation Engine: IndicTrans2 &lt; 280ms
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Stats ─────────────────────────────────────────────────────────────────── */
const stats = [
  {
    label: "Today's Consultations",
    value: "4",
    sub: "Full teleconsultation schedule",
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-200",
    iconType: "screen",
  },
  {
    label: "Upcoming",
    value: "2",
    sub: "Next starts in 29 mins",
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-200",
    iconType: "clock",
  },
  {
    label: "Completed",
    value: "2",
    sub: "Discharged or charted",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
    iconType: "check",
  },
  {
    label: "Pending Summaries",
    value: "1",
    sub: "Requires doctor signature",
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    iconType: "doc",
  },
];

function StatIcon({ type }) {
  if (type === "clock")
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  if (type === "check")
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    );
  if (type === "doc")
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    );
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col gap-2"
        >
          <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${s.bg} ${s.color}`}>
            <StatIcon type={s.iconType} />
          </div>
          <div>
            <p className="text-[11px] text-slate-500 font-medium">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{s.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── 3D Explainer Library ──────────────────────────────────────────────────── */
const library3D = [
  {
    title: "Root Canal (RCT Steps)",
    sub: "Access cavity, pulpectomy, obturation",
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-200",
  },
  {
    title: "Cavity Progression",
    sub: "Enamel demineralization to pulp involvement",
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-200",
  },
  {
    title: "Gum & Bone Structure",
    sub: "Periodontal pocket depths & bone loss",
    color: "text-rose-600",
    bg: "bg-rose-50 border-rose-200",
  },
];

function ThreeDLibrary() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-slate-800 text-sm">
          3D Explainer Library
        </h2>
        <button className="text-[11px] font-medium text-teal-600 hover:text-teal-700 transition-colors">
          View All 12
        </button>
      </div>
      <div className="space-y-2.5">
        {library3D.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 p-2.5 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all cursor-pointer group"
          >
            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-700 truncate">{item.title}</p>
              <p className="text-[10px] text-slate-400 truncate">{item.sub}</p>
            </div>
            <svg
              className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors flex-shrink-0"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
