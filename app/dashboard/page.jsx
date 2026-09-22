"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import UpcomingConsultationBanner from "./components/UpcomingConsultationBanner";
import QuickActionCards from "./components/QuickActionCards";
import RecentConsultations from "./components/RecentConsultations";
import AiConsultationSummary from "./components/AiConsultationSummary";
import LanguageAccessibilityPanel from "./components/LanguageAccessibilityPanel";
import DentalVisualizationPanel from "./components/DentalVisualizationPanel";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <TopBar onMenuToggle={() => setSidebarOpen(true)} />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-5">
          {/* Upcoming Consultation Banner */}
          <UpcomingConsultationBanner />

          {/* Quick Action Cards */}
          <QuickActionCards />

          {/* Mid section: Recent Consultations (left) + AI Summary (right) */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr,360px] gap-5">
            <RecentConsultations />
            <AiConsultationSummary />
          </div>

          {/* Bottom section: Language Panel (left) + Dental Viz (right) */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <LanguageAccessibilityPanel />
            <DentalVisualizationPanel />
          </div>
        </main>
      </div>
    </div>
  );
}
