"use client";

import { aiConsultationSummary } from "../data/mockData";
import { SparklesIcon, ExternalLinkIcon } from "./Icons";

export default function AiConsultationSummary() {
  const s = aiConsultationSummary;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between gap-2 bg-slate-50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-teal-100 flex items-center justify-center">
            <SparklesIcon className="w-3 h-3 text-teal-600" />
          </div>
          <span className="text-xs font-semibold text-slate-700">{s.title}</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-600 text-white font-medium whitespace-nowrap">
          ✦ {s.badge}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-4 flex-1">
        {/* FDI + Condition */}
        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <div className="flex items-start justify-between gap-2 mb-1">
            <span className="text-xs font-bold text-slate-700 leading-snug">{s.condition}</span>
            <span className="text-[10px] px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded font-semibold border border-orange-200 flex-shrink-0">
              {s.fdiLabel}
            </span>
          </div>
          <p className="text-[11px] text-slate-500">{s.validatedBy}</p>
        </div>

        {/* Clinical Details */}
        <div className="space-y-2">
          {s.details.map((d) => (
            <div key={d.label} className="grid grid-cols-[auto,1fr] gap-x-2 text-xs">
              <span className="text-slate-500 font-medium whitespace-nowrap">{d.label}</span>
              <span className="text-slate-700 font-semibold leading-snug">{d.value}</span>
            </div>
          ))}
        </div>

        {/* Marathi Synopsis */}
        <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
          <p className="text-[11px] font-semibold text-amber-800 mb-1.5">
            ✦ {s.marathiSynopsis.title}
          </p>
          <p className="text-xs text-amber-900 leading-relaxed">{s.marathiSynopsis.text}</p>
        </div>

        {/* View Full Summary */}
        <button className="mt-auto w-full flex items-center justify-center gap-1.5 text-xs font-medium text-teal-600 hover:text-teal-700 border border-teal-200 hover:border-teal-300 rounded-lg py-2 transition-colors">
          View Full Summary &amp; Transcript
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
