
import React, { useState } from 'react';

const FilterSection: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 group hover:bg-slate-50/50 px-2 rounded-lg transition-colors"
      >
        <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.1em]">{title}</span>
        <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="pb-5 px-2 animate-in fade-in slide-in-from-top-1 duration-200">{children}</div>}
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[360px] flex-shrink-0 bg-white border-r border-slate-200 min-h-screen sticky top-0 h-screen overflow-y-auto hidden xl:block scrollbar-hide">
      <div className="px-5 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center shadow-lg shadow-indigo-100">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-base uppercase">Recruiter<span className="text-indigo-600">Pro</span></span>
          </div>
          <button className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-widest">Clear filters</button>
        </div>

        {/* Global Keyword Search - Primary Filter */}
        <div className="mb-6">
          <label className="block text-[10px] font-black text-indigo-600 mb-2 uppercase tracking-widest">Keywords / Boolean</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="e.g. 'React' AND 'TypeScript'" 
              className="w-full text-sm border-slate-200 border rounded-lg pl-9 pr-3 py-2.5 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all outline-none" 
            />
            <svg className="w-4 h-4 absolute left-3 top-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        <div className="space-y-0.5">
          <FilterSection title="Job Titles">
            <div className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Current</label>
                <input type="text" placeholder="Add current titles..." className="w-full text-xs border-slate-200 border rounded-md px-3 py-2 bg-slate-50 outline-none focus:bg-white" />
              </div>
              <div>
                <label className="block text-[9px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Past</label>
                <input type="text" placeholder="Add past titles..." className="w-full text-xs border-slate-200 border rounded-md px-3 py-2 bg-slate-50 outline-none focus:bg-white" />
              </div>
            </div>
          </FilterSection>

          <FilterSection title="Locations">
            <div className="space-y-3">
              <input type="text" placeholder="City, State, or Country" className="w-full text-xs border-slate-200 border rounded-md px-3 py-2 bg-slate-50 outline-none focus:bg-white" />
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-3.5 h-3.5 rounded text-indigo-600 border-slate-300" />
                <span className="text-xs text-slate-600 group-hover:text-slate-900">Open to remote</span>
              </label>
            </div>
          </FilterSection>

          <FilterSection title="Skills">
            <div className="space-y-3">
              <input type="text" placeholder="Add skills (e.g. Python)..." className="w-full text-xs border-slate-200 border rounded-md px-3 py-2 bg-slate-50 outline-none focus:bg-white" />
              <div className="flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'Node.js'].map(s => (
                  <span key={s} className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded border border-indigo-100 uppercase">
                    {s} <button className="hover:text-indigo-900">&times;</button>
                  </span>
                ))}
              </div>
            </div>
          </FilterSection>

          <FilterSection title="Companies">
            <div className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Current</label>
                <input type="text" placeholder="Search companies..." className="w-full text-xs border-slate-200 border rounded-md px-3 py-2 bg-slate-50 outline-none focus:bg-white" />
              </div>
              <div>
                <label className="block text-[9px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Past</label>
                <input type="text" placeholder="Add past companies..." className="w-full text-xs border-slate-200 border rounded-md px-3 py-2 bg-slate-50 outline-none focus:bg-white" />
              </div>
            </div>
          </FilterSection>

          <FilterSection title="Experience">
            <div className="space-y-5 py-2">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Total Years</label>
                  <span className="text-[10px] font-black text-indigo-600">2 - 12 yrs</span>
                </div>
                <input type="range" className="w-full accent-indigo-600 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Years in Current Role</label>
                  <span className="text-[10px] font-black text-indigo-600">1+ yrs</span>
                </div>
                <input type="range" className="w-full accent-indigo-600 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </FilterSection>

          <FilterSection title="Industries" defaultOpen={false}>
            <div className="space-y-2">
              {['Technology', 'Financial Services', 'Healthcare', 'Automotive', 'E-commerce'].map(i => (
                <label key={i} className="flex items-center group cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600" />
                  <span className="ml-2.5 text-xs text-slate-600 group-hover:text-slate-900">{i}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Schools" defaultOpen={false}>
            <input type="text" placeholder="University name..." className="w-full text-xs border-slate-200 border rounded-md px-3 py-2 bg-slate-50 outline-none focus:bg-white" />
          </FilterSection>

          <FilterSection title="Languages" defaultOpen={false}>
            <div className="space-y-2">
              {['English', 'Spanish', 'Mandarin', 'French', 'German'].map(l => (
                <label key={l} className="flex items-center group cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600" />
                  <span className="ml-2.5 text-xs text-slate-600 group-hover:text-slate-900">{l}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Recent Activity">
             <div className="space-y-2">
              {['Active within 30 days', 'Profile updated recently', 'Open to work tag'].map(a => (
                <label key={a} className="flex items-center group cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600" />
                  <span className="ml-2.5 text-xs text-slate-600 group-hover:text-slate-900">{a}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
