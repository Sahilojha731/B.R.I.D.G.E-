"use client";

import { useState } from "react";
import { languageSettings } from "../data/mockData";
import { AccessibilityIcon, GlobeIcon } from "./Icons";

function Toggle({ enabled, onToggle }) {
  return (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={onToggle}
      className={`relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 flex-shrink-0 ${
        enabled ? "bg-teal-500" : "bg-slate-300"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transform transition-transform duration-200 ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function LanguageAccessibilityPanel() {
  const [liveCaption, setLiveCaption] = useState(languageSettings.liveCaptionsStream);
  const [audioTranslation, setAudioTranslation] = useState(languageSettings.audioTranslation);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0">
            <AccessibilityIcon className="w-4 h-4 text-teal-600" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-800">Language &amp; Accessibility</div>
            <div className="text-[11px] text-slate-500">Real-time speech pipeline preferences</div>
          </div>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 font-medium flex-shrink-0">
          Live
        </span>
      </div>

      <div className="p-4 space-y-4">
        {/* Preferred Language */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold text-slate-700">Preferred Language</div>
            <div className="text-[11px] text-slate-500">Teleconsultation live translation target</div>
          </div>
          <button className="flex items-center gap-1 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 hover:bg-slate-100 transition-colors whitespace-nowrap">
            {languageSettings.preferredLanguage}
            <svg className="w-3 h-3 text-slate-400 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <div className="border-t border-slate-100" />

        {/* Live Captions Stream */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold text-slate-700">Live Captions Stream</div>
            <div className="text-[11px] text-slate-500">Dual-stream bidirectional screen captions</div>
          </div>
          <Toggle enabled={liveCaption} onToggle={() => setLiveCaption(!liveCaption)} />
        </div>

        {/* Audio Translation */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold text-slate-700">Audio Translation (IndicTTS)</div>
            <div className="text-[11px] text-slate-500">Real-time voice synthesis in native speaker timbre</div>
          </div>
          <Toggle enabled={audioTranslation} onToggle={() => setAudioTranslation(!audioTranslation)} />
        </div>

        {/* Latency badge */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg px-3 py-2 flex items-center gap-2">
          <GlobeIcon className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
          <span className="text-[11px] text-teal-700 font-medium">
            IndicTrans2 Speech Latency: {languageSettings.latency}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button className="flex-1 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium py-2.5 rounded-lg transition-colors">
            Change Language Quick-Toggle
          </button>
          <button className="text-xs text-slate-600 hover:text-slate-800 transition-colors px-3 py-2.5 rounded-lg hover:bg-slate-100 whitespace-nowrap">
            Accessibility Settings
          </button>
        </div>
      </div>
    </div>
  );
}
