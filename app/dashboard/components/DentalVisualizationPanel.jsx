"use client";

import { dentalVisualization } from "../data/mockData";

// Simple inline SVG of a tooth cross-section diagram
function ToothDiagram() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 120 160"
        className="w-32 h-40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer enamel shape */}
        <path
          d="M60 8 C35 8 18 28 18 52 C18 70 24 88 26 108 C28 128 32 148 38 152 C44 156 50 148 60 148 C70 148 76 156 82 152 C88 148 92 128 94 108 C96 88 102 70 102 52 C102 28 85 8 60 8 Z"
          fill="#F0F9FF"
          stroke="#93C5FD"
          strokeWidth="2"
        />
        {/* Dentin layer */}
        <path
          d="M60 20 C40 20 28 36 28 55 C28 72 33 88 35 106 C37 122 40 138 45 143 C50 148 55 140 60 140 C65 140 70 148 75 143 C80 138 83 122 85 106 C87 88 92 72 92 55 C92 36 80 20 60 20 Z"
          fill="#FEF3C7"
          stroke="#FCD34D"
          strokeWidth="1.5"
        />
        {/* Pulp chamber */}
        <path
          d="M60 35 C50 35 43 45 43 57 C43 68 46 78 48 92 C50 105 52 118 56 122 C58 124 59 122 60 122 C61 122 62 124 64 122 C68 118 70 105 72 92 C74 78 77 68 77 57 C77 45 70 35 60 35 Z"
          fill="#FCA5A5"
          stroke="#EF4444"
          strokeWidth="1.5"
        />
        {/* Root canals */}
        <path
          d="M54 122 C53 132 52 142 52 148"
          stroke="#DC2626"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M66 122 C67 132 68 142 68 148"
          stroke="#DC2626"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Labels with lines */}
        {/* Enamel */}
        <line x1="22" y1="38" x2="10" y2="38" stroke="#93C5FD" strokeWidth="1" strokeDasharray="2 1" />
        {/* Dentin */}
        <line x1="30" y1="62" x2="10" y2="62" stroke="#FCD34D" strokeWidth="1" strokeDasharray="2 1" />
        {/* Pulp */}
        <line x1="43" y1="70" x2="10" y2="80" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 1" />

        {/* Dot markers */}
        <circle cx="22" cy="38" r="2" fill="#93C5FD" />
        <circle cx="30" cy="62" r="2" fill="#FCD34D" />
        <circle cx="43" cy="70" r="2" fill="#EF4444" />

        {/* Inflammation indicator */}
        <circle cx="58" cy="68" r="5" fill="#FCA5A5" opacity="0.6" />
        <circle cx="58" cy="68" r="3" fill="#EF4444" opacity="0.8" />
      </svg>
    </div>
  );
}

export default function DentalVisualizationPanel() {
  const v = dentalVisualization;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center flex-shrink-0">
            {/* Tooth icon */}
            <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M12 2C9.5 2 7 4 7 7c0 1.5.5 3 .5 4.5C7.5 14 7 17 7 19c0 2 1 3 2.5 3s2-1.5 2.5-3c.5-1.5 0-3 0-3s-.5 1.5 0 3c.5 1.5 1 3 2.5 3s2.5-1 2.5-3c0-2-.5-5-.5-7.5 0-1.5.5-3 .5-4.5C17 4 14.5 2 12 2z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-800">Dental Visualization</div>
            <div className="text-[11px] text-slate-500">Interactive anatomical molar tooth structure</div>
          </div>
        </div>
        <button className="text-[11px] font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap">
          Explore Visualizations →
        </button>
      </div>

      <div className="p-4 flex flex-col sm:flex-row gap-4 items-start">
        {/* Highlighted layer label */}
        <div className="flex-1 space-y-3">
          {/* Active layer */}
          <div className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold text-slate-800">{v.toothLabel}</div>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{v.description}</p>
            </div>
          </div>

          {/* Layer list */}
          <div className="space-y-1 border border-slate-100 rounded-lg overflow-hidden">
            {v.layers.map((layer, i) => (
              <div
                key={layer}
                className={`px-3 py-2 text-xs font-medium transition-colors ${
                  i === 2
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 bg-slate-50 hover:bg-slate-100"
                }`}
              >
                {layer}
              </div>
            ))}
          </div>
        </div>

        {/* Tooth diagram */}
        <div className="flex items-center justify-center sm:flex-shrink-0">
          <ToothDiagram />
        </div>
      </div>
    </div>
  );
}
