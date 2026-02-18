
export interface ExperienceItem {
  company: string;
  title: string;
  duration: string;
  isCurrent: boolean;
}

export interface Candidate {
  id: string;
  name: string;
  avatar: string;
  headline: string;
  location: string;
  totalExperience: number;
  currentExperience: number; // Years in current role
  salaryExpectation: string;
  skills: string[];
  education: {
    school: string;
    degree: string;
    year: string;
  };
  history: ExperienceItem[];
  availability: 'Immediate' | '2 Weeks' | '1 Month' | 'Open';
  visaStatus: 'US Citizen' | 'Green Card' | 'H1-B' | 'F1-OPT' | 'Other';
  summary: string;
  isFavorite: boolean;
  score: number;
}

export interface SearchFilters {
  jobTitles: string[];
  locations: string[];
  skills: string[];
  companies: {
    current: string[];
    past: string[];
  };
  totalExpRange: [number, number];
  currentExpRange: [number, number];
  industries: string[];
}
