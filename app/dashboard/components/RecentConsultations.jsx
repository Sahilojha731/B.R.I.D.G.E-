"use client";

import { recentConsultations } from "../data/mockData";

export default function RecentConsultations() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-2">
        <div>
          <h2 className="font-semibold text-slate-800 text-sm">Recent Consultations</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Past remote clinical evaluations and auto-translated records
          </p>
        </div>
        <button className="text-xs font-medium text-teal-600 hover:text-teal-700 transition-colors whitespace-nowrap">
          View All (8)
        </button>
      </div>

      {/* List */}
      <div className="divide-y divide-slate-100">
        {recentConsultations.map((c) => (
          <div key={c.id} className="px-5 py-4">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5`}
              >
                {c.initials}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Doctor + Status + Date */}
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className="text-sm font-semibold text-slate-800">{c.doctorName}</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-medium">
                    {c.status}
                  </span>
                  <span className="text-[11px] text-slate-400 ml-auto whitespace-nowrap">
                    {c.date}
                  </span>
                </div>

                {/* Specialization + FDI + Languages */}
                <div className="flex items-center gap-1.5 flex-wrap mb-2">
                  <span className="text-xs text-slate-500">{c.specialization}</span>
                  <span className="text-slate-300 text-xs">•</span>
                  <span className="text-xs text-slate-500">{c.fdi}</span>
                  <span className="text-slate-300 text-xs">•</span>
                  <span className="text-[11px] text-teal-600 font-medium">{c.languages}</span>
                </div>

                {/* Summary quote */}
                <p className="text-xs text-slate-600 italic leading-relaxed mb-2.5">
                  {c.summary}
                </p>

                {/* View Summary button */}
                <button className="text-xs font-medium text-slate-600 hover:text-slate-800 border border-slate-200 hover:border-slate-300 rounded-lg px-3 py-1.5 transition-colors">
                  View Summary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
