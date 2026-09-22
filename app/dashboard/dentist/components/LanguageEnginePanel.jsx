"use client";

export default function LanguageEnginePanel() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      <h2 className="font-semibold text-slate-800 text-sm mb-3">
        Language Engine &amp; 3D Assets
      </h2>

      <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-teal-600 font-semibold text-xs">⚡ IndicTrans2 Pipeline Telemetry</span>
          </div>
          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
            280 ms
          </span>
        </div>

        <p className="text-[11px] text-slate-500 leading-relaxed">
          Low-latency dental translation buffer active via LiveKit WebRTC channel.
        </p>

        {/* Breakdown */}
        <div className="space-y-2 text-xs pt-1 border-t border-slate-200/60">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-[11px]">Faster-Whisper ASR:</span>
            <span className="font-semibold text-emerald-600 text-[11px]">Online (Marathi/Hindi)</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-[11px]">IndicTTS Synthesizer:</span>
            <span className="font-semibold text-emerald-600 text-[11px]">Online (Natural Tone)</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-[11px]">Dental Terminology Accuracy:</span>
            <span className="font-bold text-teal-700 text-[11px]">96.4% Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
