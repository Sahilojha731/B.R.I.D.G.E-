"use client";

import { BookIcon, HistoryIcon, ArrowRightIcon } from "./Icons";

export default function QuickActionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Book a Dental Consultation */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0">
            <BookIcon className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">Book a Dental Consultation</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Connect with verified dental specialists online with bidirectional live language
              translation in Marathi, Hindi &amp; English.
            </p>
          </div>
        </div>
        <div className="mt-auto pt-1 border-t border-slate-100">
          <button className="flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors group pt-2">
            Find a Dentist
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* View Consultation History */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center flex-shrink-0">
            <HistoryIcon className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">View Consultation History</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Review multi-language transcripts, doctor clinical notes, prescribed treatments, and
              voice recordings from previous visits.
            </p>
          </div>
        </div>
        <div className="mt-auto pt-1 border-t border-slate-100">
          <button className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors group pt-2">
            Review Previous Summaries
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
