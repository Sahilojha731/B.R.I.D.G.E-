"use client";

import { upcomingConsultation } from "../data/mockData";
import { VideoIcon, MicIcon, GlobeIcon, CalendarIcon } from "./Icons";

export default function UpcomingConsultationBanner() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 lg:p-5">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Left: Status + Doctor Info */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Video icon box */}
          <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
            <VideoIcon className="w-5 h-5 text-slate-600" />
          </div>

          <div className="min-w-0 flex-1">
            {/* Status + Timer */}
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                {upcomingConsultation.status}
              </span>
              <span className="text-xs text-slate-500">{upcomingConsultation.startsIn}</span>
            </div>

            {/* Doctor name */}
            <div className="font-semibold text-slate-800 text-sm sm:text-base">
              {upcomingConsultation.doctorName}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
              {upcomingConsultation.credentials}
            </div>

            {/* Language bridge tag */}
            <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
              <GlobeIcon className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <span>{upcomingConsultation.languageBridge}</span>
            </div>
          </div>
        </div>

        {/* Right: Date + Buttons */}
        <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>{upcomingConsultation.date}</span>
          </div>
          <div className="text-xs text-slate-500">{upcomingConsultation.type}</div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 mt-1">
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              <VideoIcon className="w-4 h-4" />
              Join Consultation
            </button>
            <button className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors text-[11px]">
              <MicIcon className="w-4 h-4" />
              <span>Audio Check</span>
            </button>
          </div>

          <button className="text-xs text-teal-600 hover:text-teal-700 hover:underline transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
