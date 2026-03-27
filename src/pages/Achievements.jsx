import { useState, useEffect, useRef } from 'react';
import SectionCard from '../components/SectionCard';
import { kpiStats, productivityData, nirfCorrelation, techSolutions } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import {
  UserCheck, TrendingUp, ArrowUpCircle, Star, UserPlus, Award,
  Monitor, Brain, BookOpen, Fingerprint, ClipboardCheck, BarChart3
} from 'lucide-react';

const iconMap = { UserCheck, TrendingUp, ArrowUpCircle, Star, UserPlus, Award };
const techIconMap = { Monitor, Brain, BookOpen, Fingerprint, ClipboardCheck, BarChart3 };

function AnimatedKPI({ label, value, suffix, icon: iconName, decimals = 0, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const Icon = iconMap[iconName] || Star;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      const duration = 1500;
      const steps = 40;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
        }
      }, duration / steps);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, value, delay, decimals]);

  return (
    <div ref={ref} className="card-hover p-5 bg-white rounded-xl shadow-lg border border-gray-100 text-center">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-maroon to-gold mx-auto mb-3 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-3xl font-bold text-maroon">
        {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-500 mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Achievements & Metrics</h1>
        <p className="text-sm text-gray-500 mt-1">Key Performance Indicators & HR Impact Dashboard</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpiStats.map((kpi, i) => (
          <AnimatedKPI key={kpi.label} {...kpi} delay={i * 100} />
        ))}
      </div>

      {/* Productivity Chart */}
      <SectionCard title="📊 Productivity Improvement — Before vs After HRD Intervention" subtitle="Impact of HR development programs across key metrics">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productivityData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="metric" tick={{ fontSize: 10 }} angle={-15} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb', fontSize: '13px' }} />
              <Legend />
              <Bar dataKey="before" fill="#D06060" name="Before HRD" radius={[4,4,0,0]} />
              <Bar dataKey="after" fill="#8B0000" name="After HRD" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      {/* NIRF Correlation */}
      <SectionCard title="📈 HR Investment vs NIRF Ranking Improvement" subtitle="Correlation between HR spending and university ranking (illustrative)">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-maroon-50">
                <th className="text-left p-3 font-semibold text-gray-700">Year</th>
                <th className="text-center p-3 font-semibold text-gray-700">HR Investment</th>
                <th className="text-center p-3 font-semibold text-gray-700">NIRF Rank</th>
                <th className="text-left p-3 font-semibold text-gray-700">Key Highlights</th>
              </tr>
            </thead>
            <tbody>
              {nirfCorrelation.map((row) => (
                <tr key={row.year} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-3 font-semibold text-gray-900">{row.year}</td>
                  <td className="p-3 text-center font-bold text-maroon">{row.hrInvestment}</td>
                  <td className="p-3 text-center">
                    <span className="px-3 py-1 bg-gold-50 text-gold-dark rounded-full font-bold">#{row.nirfRank}</span>
                  </td>
                  <td className="p-3 text-gray-600">{row.highlights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Tech Solutions */}
      <SectionCard title="💻 Tech-Enabled HR Solutions" subtitle="Digital tools powering LPU's HR operations">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techSolutions.map((tech) => {
            const Icon = techIconMap[tech.icon] || Monitor;
            return (
              <div key={tech.name} className="card-hover text-center p-4 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-maroon-50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-maroon to-maroon-light mx-auto mb-2 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xs font-semibold text-gray-900">{tech.name}</h4>
                <p className="text-[10px] text-gray-400 mt-0.5">{tech.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionCard>
    </div>
  );
}
