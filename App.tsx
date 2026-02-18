
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CandidateCard from './components/CandidateCard';
import { INITIAL_CANDIDATES } from './constants';
import { Candidate } from './types';

const App: React.FC = () => {
  const [candidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [activeTab, setActiveTab] = useState<'talent' | 'pipeline' | 'archive'>('talent');

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900 overflow-hidden h-screen">
      {/* High-Fidelity Filtering Column */}
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50/50">
        {/* Results Toolbar / Control Bar */}
        <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between shadow-sm z-20">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Project Scope</span>
              <div className="group flex items-center gap-2 px-3 py-1.5 bg-slate-100/50 hover:bg-slate-100 border border-slate-200/60 rounded-lg cursor-pointer transition-all">
                <span className="text-xs font-black text-slate-700">Senior Platform Engineer (H1-2025)</span>
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="text-xs font-bold text-slate-500">
              <span className="text-indigo-600 font-black">{candidates.length}</span> candidates found
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-4">
              <span className="text-[10px] font-black text-slate-400 uppercase">Sorted by</span>
              <select className="bg-transparent text-xs font-black text-slate-700 outline-none cursor-pointer hover:text-indigo-600 transition-colors">
                <option>Match Score</option>
                <option>Recent Activity</option>
                <option>Exp: High to Low</option>
              </select>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-[11px] font-black rounded-lg shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all uppercase tracking-widest">
              Export List
            </button>
          </div>
        </div>

        {/* Dynamic Viewport */}
        <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-hide">
          <div className="max-w-[1000px] mx-auto">
            
            {/* Navigational Tabs (Internal to Results) */}
            <div className="flex items-center gap-10 mb-8 border-b border-slate-200 w-full">
              {[
                { id: 'talent', label: 'Talent Pool', count: candidates.length },
                { id: 'pipeline', label: 'In Pipeline', count: 42 },
                { id: 'archive', label: 'Archived', count: 12 }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-4 text-[11px] font-black uppercase tracking-[0.15em] transition-all relative ${activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {tab.label} <span className={`ml-1 text-[9px] ${activeTab === tab.id ? 'text-indigo-400' : 'text-slate-300'}`}>({tab.count})</span>
                  {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"></div>}
                </button>
              ))}
              
              <div className="ml-auto flex items-center gap-3 pb-4">
                 <span className="text-[9px] font-black text-slate-400 uppercase">View density</span>
                 <div className="flex bg-white border border-slate-200 rounded-md p-0.5 shadow-sm">
                    <button className="p-1.5 bg-slate-100 rounded text-slate-900 shadow-inner"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h10v2H5V4zm0 5h10v2H5V9zm0 5h10v2H5v-2z" /></svg></button>
                    <button className="p-1.5 hover:bg-slate-50 text-slate-300"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h4v4H5V4zm6 0h4v4h-4V4zm-6 6h4v4H5v-4zm6 0h4v4h-4v-4z" /></svg></button>
                 </div>
              </div>
            </div>

            {/* Content Listing */}
            <div className="space-y-2 pb-32">
              {candidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
              
              <div className="py-12 flex flex-col items-center">
                 <button className="px-10 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-black text-slate-500 hover:border-indigo-400 hover:text-indigo-600 transition-all shadow-sm uppercase tracking-widest">
                    Load next batch
                 </button>
                 <span className="mt-4 text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">End of filtered results</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Persistent AI Sourcing Agent */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl shadow-slate-900/40 hover:scale-110 active:scale-95 transition-all group z-50 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
         <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </button>
    </div>
  );
};

export default App;
