"use client";

import Link from "next/link";
import { SwitchIcon, MonitorIcon, HelpCircleIcon, LogOutIcon, getNavIcon } from "../../components/Icons";

const navItems = [
  { label: "Dashboard", icon: "grid", active: true },
  { label: "Appointments", icon: "calendar" },
  { label: "Patients", icon: "user" },
  { label: "Consultations", icon: "video" },
  { label: "Consultation History", icon: "clock" },
  { label: "Dental Visualizations", icon: "eye" },
  { label: "Profile", icon: "user" },
  { label: "Settings", icon: "settings" },
];

export default function DentistSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-30 flex flex-col
          w-64 bg-[#1a2332] text-white
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:z-auto lg:flex-shrink-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand */}
        <div className="px-4 pt-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-teal-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
              B
            </div>
            <div>
              <div className="font-bold text-sm leading-tight text-white">B.R.I.D.G.E. Nexus</div>
              <div className="text-[10px] text-slate-400 leading-tight">Clinical Voice AI</div>
            </div>
          </div>
        </div>

        {/* Active Workspace / Dentist Info */}
        <div className="px-4 py-3 border-b border-white/10">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 font-medium">
            Active Workspace
          </div>
          <div className="mb-2">
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-semibold">
              Dentist
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-slate-600 flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">
              DR
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-white truncate">Dr. Ananya Mehta</div>
              <div className="text-[10px] text-slate-400">BDS, MDS • Operatory 02</div>
            </div>
          </div>
          {/* Switch back to patient view */}
          <Link href="/dashboard" className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-teal-400 transition-colors border border-white/15 rounded-lg px-2.5 py-1.5 bg-white/5">
            <SwitchIcon className="w-3 h-3" />
            Switch to Patient View
          </Link>
        </div>

        {/* Main Nav */}
        <nav className="flex-1 overflow-y-auto py-3">
          <ul className="space-y-0.5 px-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className={`
                    w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all
                    ${item.active
                      ? "bg-teal-700 text-white font-medium"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"}
                  `}
                >
                  {getNavIcon(item.icon)}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Nav */}
        <div className="border-t border-white/10 py-3 px-2">
          <ul className="space-y-0.5">
            <li>
              <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                <MonitorIcon className="w-4 h-4" />
                System State Previews
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                <HelpCircleIcon className="w-4 h-4" />
                Help &amp; Support
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all">
                <LogOutIcon className="w-4 h-4" />
                Logout
              </button>
            </li>
          </ul>
          <div className="mt-3 px-3 text-[10px] text-slate-500">
            B.R.I.D.G.E. Nexus v2.4.0 • 44Hz
          </div>
        </div>
      </aside>
    </>
  );
}
