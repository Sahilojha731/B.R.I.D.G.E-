"use client";

import { useState } from "react";

const upperArch = [18, 17, 16, 15, 14, 13, 12, 11];
const lowerArch = [21, 22, 23, 24, 25, 26, 27, 28];

export default function OdontogramPanel() {
  const [selectedTooth, setSelectedTooth] = useState(46); // default or null

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 lg:p-5">
      <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-teal-600 font-semibold">🦷</span>
          <h2 className="font-bold text-slate-800 text-sm sm:text-base">
            FDI Odontogram Chart Preview
          </h2>
        </div>
        <span className="text-[10px] text-slate-400 font-medium">
          Permanent Dentition (11–48)
        </span>
      </div>

      <p className="text-xs text-slate-500 mb-4">
        Select an FDI tooth to focus real-time tele-diagnostic speech tagging:
      </p>

      {/* Grid container */}
      <div className="space-y-2 mb-4 max-w-2xl overflow-x-auto pb-1">
        {/* Upper Arch */}
        <div className="grid grid-cols-8 gap-1.5 min-w-[360px]">
          {upperArch.map((tooth) => {
            const isSelected = selectedTooth === tooth;
            return (
              <button
                key={tooth}
                onClick={() => setSelectedTooth(isSelected ? null : tooth)}
                className={`
                  py-2.5 rounded-lg border text-xs font-semibold transition-all text-center
                  ${
                    isSelected
                      ? "bg-teal-600 text-white border-teal-700 shadow-sm ring-2 ring-teal-600/30"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                  }
                `}
              >
                {tooth}
              </button>
            );
          })}
        </div>

        {/* Lower Arch */}
        <div className="grid grid-cols-8 gap-1.5 min-w-[360px]">
          {lowerArch.map((tooth) => {
            const isSelected = selectedTooth === tooth;
            return (
              <button
                key={tooth}
                onClick={() => setSelectedTooth(isSelected ? null : tooth)}
                className={`
                  py-2.5 rounded-lg border text-xs font-semibold transition-all text-center
                  ${
                    isSelected
                      ? "bg-teal-600 text-white border-teal-700 shadow-sm ring-2 ring-teal-600/30"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                  }
                `}
              >
                {tooth}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100 flex-wrap gap-2">
        <div className="text-slate-600">
          <span className="font-semibold text-slate-700">Active Selection:</span>{" "}
          {selectedTooth ? (
            <span className="inline-flex items-center gap-1 font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
              FDI #{selectedTooth}
            </span>
          ) : (
            <span className="text-slate-400">None (Tap a tooth cell to tag)</span>
          )}
        </div>
        <div className="text-slate-500 text-[11px] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          <span>Live Voice Sync: Ready</span>
        </div>
      </div>
    </div>
  );
}
