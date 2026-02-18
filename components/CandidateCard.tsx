
import React, { useState } from 'react';
import { Candidate } from '../types';
import { generateCandidateInsight } from '../geminiService';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const [loadingAI, setLoadingAI] = useState(false);
  const [insight, setInsight] = useState<{insight: string, interviewQuestions: string[]} | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleGetInsight = async () => {
    if (insight) {
      setIsExpanded(!isExpanded);
      return;
    }
    setLoadingAI(true);
    const data = await generateCandidateInsight(candidate);
    setInsight(data);
    setLoadingAI(false);
    setIsExpanded(true);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden group mb-4">
      <div className="p-6">
        <div className="flex gap-6">
          {/* Left: Minimal ID & Match Score */}
          <div className="flex flex-col items-center gap-4 pt-1">
            <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
              <span className="text-sm font-black text-slate-500 group-hover:text-indigo-600">{getInitials(candidate.name)}</span>
            </div>
            <div className="text-center">
              <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Score</div>
              <div className="text-lg font-black text-indigo-600 leading-none">{candidate.score}%</div>
            </div>
          </div>

          {/* Right: Rich Data Area */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer leading-tight">
                    {candidate.name}
                  </h3>
                  <span className="inline-flex items-center px-1.5 py-0.5 bg-green-50 text-green-700 text-[9px] font-bold rounded border border-green-100 uppercase tracking-tighter">Active Now</span>
                </div>
                <p className="text-sm font-bold text-slate-700 leading-tight mb-3 truncate">{candidate.headline}</p>
                <div className="flex items-center flex-wrap gap-y-2 gap-x-5 text-[11px] font-bold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {candidate.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {candidate.totalExperience}y Experience
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {candidate.history[0].company}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className={`p-2 rounded-lg border border-slate-200 hover:bg-rose-50 hover:border-rose-100 transition-colors ${candidate.isFavorite ? 'text-rose-500 fill-rose-500 border-rose-100 bg-rose-50' : 'text-slate-400'}`}>
                  <svg className="w-4.5 h-4.5" fill={candidate.isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                <button className="px-4 py-2 bg-slate-900 text-white text-xs font-black rounded-lg hover:bg-indigo-600 transition-all shadow-sm uppercase tracking-widest active:scale-95">
                  Message
                </button>
              </div>
            </div>

            {/* Career Timeline Section */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                   Experience History
                </h4>
                <div className="space-y-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100">
                  {candidate.history.slice(0, 3).map((job, idx) => (
                    <div key={idx} className="flex gap-4 relative">
                      <div className="w-6 h-6 flex-shrink-0 bg-white border border-slate-200 rounded flex items-center justify-center z-10">
                        <span className="text-[9px] font-black text-slate-400">{job.company[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-xs font-black text-slate-800 truncate">{job.title}</p>
                          <span className="text-[9px] font-bold text-slate-400 uppercase whitespace-nowrap">{job.duration}</span>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-500">{job.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                   Academics & Context
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex-shrink-0 bg-indigo-50 border border-indigo-100 rounded flex items-center justify-center">
                       <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-800">{candidate.education.school}</p>
                      <p className="text-[11px] font-semibold text-slate-500">{candidate.education.degree} • {candidate.education.year}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <p className="text-[11px] font-medium text-slate-600 leading-relaxed italic">
                      "{candidate.summary}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & AI Insights */}
            <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
               <div className="flex flex-wrap gap-1.5">
                  {candidate.skills.map(s => (
                    <span key={s} className="px-2 py-0.5 bg-indigo-50/50 text-indigo-600 text-[9px] font-black rounded uppercase tracking-tighter border border-indigo-100/30">
                      {s}
                    </span>
                  ))}
               </div>
               <button 
                onClick={handleGetInsight}
                className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-[10px] font-black hover:bg-indigo-600 hover:text-white transition-all border border-indigo-100/50 group/ai uppercase tracking-widest"
              >
                {loadingAI ? (
                  <div className="w-2.5 h-2.5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-3.5 h-3.5 text-indigo-500 group-hover/ai:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                )}
                {isExpanded ? 'Hide Assessment' : 'AI Assessment'}
              </button>
            </div>

            {isExpanded && insight && (
              <div className="mt-4 p-5 bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] rounded-xl border border-indigo-100 animate-in zoom-in-95 duration-300">
                <h5 className="text-[9px] font-black text-indigo-800 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  AI Recruiter Insights <div className="h-px bg-indigo-100/50 flex-1"></div>
                </h5>
                <p className="text-[13px] text-slate-700 leading-relaxed font-semibold mb-5">"{insight.insight}"</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                     <h6 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Technical Evaluation</h6>
                     <p className="text-[11px] text-slate-600 font-bold leading-snug">{insight.interviewQuestions[0]}</p>
                  </div>
                  <div className="space-y-1.5">
                     <h6 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Leadership Context</h6>
                     <p className="text-[11px] text-slate-600 font-bold leading-snug">{insight.interviewQuestions[1]}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
