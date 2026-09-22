"use client";

const appointments = [
  {
    id: "1",
    name: "Sakshi Pawar",
    initials: "SP",
    avatarBg: "bg-teal-100 text-teal-700 border-teal-200",
    status: "Ready",
    statusBg: "bg-emerald-100 text-emerald-700 border-emerald-300",
    time: "4:30 PM",
    title: "Dental Teleconsultation",
    detail: "Tooth #46 Sensitivity",
    patientLang: "Marathi",
    dentistLang: "English",
    active: true,
  },
  {
    id: "2",
    name: "Disha Kapade",
    initials: "DK",
    avatarBg: "bg-sky-100 text-sky-700 border-sky-200",
    status: "Upcoming",
    statusBg: "bg-slate-100 text-slate-600 border-slate-200",
    time: "5:15 PM",
    title: "Gum swelling & gingivitis review",
    detail: null,
    patientLang: "Hindi",
    dentistLang: "English",
    active: false,
  },
  {
    id: "3",
    name: "Priya Vyas",
    initials: "PV",
    avatarBg: "bg-blue-100 text-blue-700 border-blue-200",
    status: "Upcoming",
    statusBg: "bg-slate-100 text-slate-600 border-slate-200",
    time: "6:00 PM",
    title: "Follow-up",
    detail: "Tooth #12 Aligner Track",
    patientLang: "Gujarati",
    dentistLang: "English",
    active: false,
  },
];

export default function AppointmentQueue() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 lg:p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h2 className="font-semibold text-slate-800 text-base">
          Today&apos;s Appointment Queue
        </h2>
        <span className="text-[11px] text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
          Real-time Bi-directional Translation Active
        </span>
      </div>

      <div className="space-y-3">
        {appointments.map((apt) => (
          <div
            key={apt.id}
            className={`
              rounded-xl border p-4 transition-all
              ${
                apt.active
                  ? "border-emerald-400 bg-emerald-50/20 ring-1 ring-emerald-400/30"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }
            `}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-sm flex-shrink-0 ${apt.avatarBg}`}
                >
                  {apt.initials}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-bold text-slate-800 text-sm">
                      {apt.name}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${apt.statusBg}`}
                    >
                      {apt.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium text-slate-700">{apt.time}</span>
                    <span>•</span>
                    <span>{apt.title}</span>
                    {apt.detail && (
                      <>
                        <span>•</span>
                        <span className="font-medium text-slate-700">
                          {apt.detail}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <span>🗣️</span>
                    <span>
                      Patient: <strong className="text-slate-600 font-medium">{apt.patientLang}</strong> ⇄ Dentist: <strong className="text-slate-600 font-medium">{apt.dentistLang}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0 self-end sm:self-center">
                {apt.active ? (
                  <button className="bg-[#123644] hover:bg-[#0c2631] text-white px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Start Consultation
                  </button>
                ) : (
                  <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors">
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
