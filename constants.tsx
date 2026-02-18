
import { Candidate } from './types';

export const INITIAL_CANDIDATES: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    headline: 'Senior Frontend Engineer | React & Design Systems Expert',
    location: 'San Francisco, CA',
    totalExperience: 8,
    currentExperience: 3,
    salaryExpectation: '$185k',
    skills: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'System Design'],
    education: {
      school: 'Stanford University',
      degree: 'M.S. Computer Science',
      year: '2016'
    },
    history: [
      { company: 'Meta', title: 'Senior Frontend Engineer', duration: '3 yrs 2 mos', isCurrent: true },
      { company: 'Airbnb', title: 'Software Engineer', duration: '2 yrs 8 mos', isCurrent: false },
      { company: 'Uber', title: 'Junior Developer', duration: '2 yrs', isCurrent: false }
    ],
    availability: 'Immediate',
    visaStatus: 'US Citizen',
    summary: 'Expert in building scalable React architectures. Reduced bundle size by 40% at Meta through micro-frontend implementation.',
    isFavorite: false,
    score: 98,
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    headline: 'Principal Backend Architect | Distributed Systems | Golang',
    location: 'Austin, TX (Remote)',
    totalExperience: 12,
    currentExperience: 5,
    salaryExpectation: '$210k',
    skills: ['Golang', 'Kubernetes', 'PostgreSQL', 'gRPC', 'AWS'],
    education: {
      school: 'UT Austin',
      degree: 'B.S. Software Engineering',
      year: '2012'
    },
    history: [
      { company: 'Tesla', title: 'Staff Backend Engineer', duration: '5 yrs', isCurrent: true },
      { company: 'Amazon Web Services', title: 'Senior SDE', duration: '4 yrs', isCurrent: false },
      { company: 'Oracle', title: 'Software Engineer', duration: '3 yrs', isCurrent: false }
    ],
    availability: '2 Weeks',
    visaStatus: 'Green Card',
    summary: 'Architected high-throughput message bus handling 1M+ requests per second. Passionate about system reliability.',
    isFavorite: true,
    score: 95,
  },
  {
    id: '3',
    name: 'Anita Bhatia',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    headline: 'Machine Learning Engineer | NLP & LLM specialist',
    location: 'New York, NY',
    totalExperience: 6,
    currentExperience: 2,
    salaryExpectation: '$170k',
    skills: ['PyTorch', 'Python', 'NLP', 'Transformers', 'Data Science'],
    education: {
      school: 'Northwestern University',
      degree: 'PhD Data Science',
      year: '2019'
    },
    history: [
      { company: 'Google Search', title: 'ML Engineer III', duration: '2 yrs', isCurrent: true },
      { company: 'IBM Watson', title: 'Data Scientist', duration: '3 yrs', isCurrent: false },
      { company: 'Columbia Research', title: 'Research Assistant', duration: '1 yr', isCurrent: false }
    ],
    availability: '1 Month',
    visaStatus: 'H1-B',
    summary: 'Focusing on large-scale retrieval systems and fine-tuning open-source LLMs for enterprise use.',
    isFavorite: false,
    score: 92,
  }
];
