import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import StatCard from '../components/StatCard';
import { dashboardStats, rankings, researchData } from '../data/mockData';
import {
  GraduationCap, Users, BookOpen, Building2,
  BarChart3, Sprout, Trophy, Search, Info, ArrowRight,
  Globe, Award, Beaker, Briefcase
} from 'lucide-react';

const iconMap = { GraduationCap, Users, BookOpen, Building2 };

const quickLinks = [
  { path: '/hr-planning', label: 'HR Planning', icon: BarChart3, desc: 'Demand & Supply Forecasting', color: 'from-blue-500 to-blue-600' },
  { path: '/hrd-practices', label: 'HRD Practices', icon: Sprout, desc: 'Training, Appraisal & Growth', color: 'from-green-500 to-green-600' },
  { path: '/achievements', label: 'Achievements', icon: Trophy, desc: 'KPIs & Metrics Dashboard', color: 'from-amber-500 to-orange-500' },
  { path: '/gap-analysis', label: 'Gap Analysis', icon: Search, desc: 'Skills Gap Assessment', color: 'from-purple-500 to-purple-600', adminOnly: true },
  { path: '/about', label: 'About LPU', icon: Info, desc: 'University Info & References', color: 'from-gray-500 to-gray-600' },
];

export default function Dashboard() {
  const { user } = useAuth();

  const filteredLinks = quickLinks.filter(
    link => !link.adminOnly || user?.role === 'admin'
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-maroon-dark via-maroon to-maroon-light p-8 lg:p-12 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold blur-2xl" />
        </div>
        <div className="relative">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            LPU <span className="text-gold">HRConnect</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 font-light max-w-2xl">
            Empowering People, Powering Progress
          </p>
          <p className="text-sm text-white/60 mt-4 max-w-3xl">
            Welcome to the HR Planning & Development Portal of Lovely Professional University — 
            India's largest single-campus university, NAAC A++ accredited, ranked #31 among universities (NIRF 2025).
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat, i) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            icon={iconMap[stat.icon]}
            delay={i * 100}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="card-hover group bg-white rounded-xl p-5 shadow-md border border-gray-100 flex items-start gap-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0`}>
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-maroon transition-colors">{link.label}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{link.desc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-maroon transition-colors flex-shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>

      {/* About + Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* About LPU HR */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-maroon" />
            About LPU HR
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lovely Professional University (LPU), established in 2005 in Phagwara, Punjab, is one of India's 
            largest private universities with a 600-acre campus, 34,871+ students, and 2,065+ faculty members. 
            LPU's HR framework integrates modern practices — from AI-powered recruitment and digital appraisal 
            systems to comprehensive faculty development programs — ensuring a world-class academic environment.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-gold-dark" />
              <span className="text-gray-600">1,800+ international students from 40 countries</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Beaker className="w-4 h-4 text-gold-dark" />
              <span className="text-gray-600">1,418 patents filed — #1 in India</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-gold-dark" />
              <span className="text-gray-600">NAAC A++ accredited</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="w-4 h-4 text-gold-dark" />
              <span className="text-gray-600">95% placement rate, 2100+ recruiters</span>
            </div>
          </div>
        </div>

        {/* Rankings */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-gold-dark" />
            Rankings & Recognition
          </h2>
          <div className="space-y-2">
            {rankings.map((r) => (
              <div key={r.body} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-600">{r.body}</span>
                <span className="text-sm font-semibold text-maroon">{r.rank}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Stats */}
      <div className="bg-gradient-to-r from-maroon-50 to-gold-50 rounded-xl p-6 border border-maroon-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Beaker className="w-5 h-5 text-maroon" />
          Research & Innovation Highlights
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Patents Filed', value: researchData.patents },
            { label: 'Scopus Papers', value: researchData.scopusPublications },
            { label: 'Citations', value: researchData.scopusCitations },
            { label: 'Granted IPRs', value: researchData.grantedIPRs },
            { label: 'Global Collabs', value: researchData.globalCollabs },
            { label: 'Stanford Top 2%', value: researchData.stanfordTop2 },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-xl font-bold text-maroon">{item.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
