import { useState } from 'react';
import SectionCard from '../components/SectionCard';
import { gapAnalysisData } from '../data/mockData';
import { Search, Target, Clock, BookOpen, Users, ArrowRight } from 'lucide-react';

export default function GapAnalysis() {
  const [dept, setDept] = useState('');
  const [role, setRole] = useState('');
  const [level, setLevel] = useState('');
  const [analyzed, setAnalyzed] = useState(false);

  const analyze = () => {
    if (dept && role && level) setAnalyzed(true);
  };

  const currentVal = gapAnalysisData.currentLevel[level] || 0;
  const requiredVal = gapAnalysisData.requiredLevel[role] || 0;
  const gap = requiredVal - currentVal;

  const getGapSize = () => {
    if (gap <= 0) return 'none';
    if (gap <= 15) return 'small';
    if (gap <= 35) return 'medium';
    return 'large';
  };

  const gapSize = getGapSize();
  const plan = gapAnalysisData.actionPlans[gapSize];

  const gapColor = {
    none: 'bg-green-500',
    small: 'bg-blue-500',
    medium: 'bg-yellow-500',
    large: 'bg-red-500',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gap Analysis Tool</h1>
        <p className="text-sm text-gray-500 mt-1">Identify skill gaps & get recommended action plans (HR Admin Only)</p>
      </div>

      <SectionCard title="🔍 Skill Gap Assessment" subtitle="Select parameters to analyze the gap and get recommendations">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Department</label>
            <select
              value={dept}
              onChange={(e) => { setDept(e.target.value); setAnalyzed(false); }}
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            >
              <option value="">Select department...</option>
              {gapAnalysisData.departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
            <select
              value={role}
              onChange={(e) => { setRole(e.target.value); setAnalyzed(false); }}
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            >
              <option value="">Select role...</option>
              {gapAnalysisData.roles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Skill Level</label>
            <select
              value={level}
              onChange={(e) => { setLevel(e.target.value); setAnalyzed(false); }}
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
            >
              <option value="">Select level...</option>
              {gapAnalysisData.levels.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        </div>

        <button
          onClick={analyze}
          disabled={!dept || !role || !level}
          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-maroon to-maroon-dark text-white rounded-xl text-sm font-medium
            hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Search className="w-4 h-4" /> Analyze Gap
        </button>

        {analyzed && (
          <div className="mt-6 space-y-4 animate-fade-in">
            {/* Progress Bars */}
            <div className="p-5 bg-gray-50 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-800 mb-4">Skill Level Comparison</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-600">Current Level ({level})</span>
                    <span className="text-xs font-bold text-maroon">{currentVal}%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-maroon to-maroon-light rounded-full transition-all duration-1000"
                      style={{ width: `${currentVal}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-600">Required Level ({role})</span>
                    <span className="text-xs font-bold text-gold-dark">{requiredVal}%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full transition-all duration-1000"
                      style={{ width: `${requiredVal}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${gapColor[gapSize]}`} />
                <span className="text-sm font-medium text-gray-800">
                  Gap: {gap > 0 ? `${gap} points` : 'No gap — meets requirements!'} 
                  <span className="ml-1 text-xs text-gray-500 capitalize">({gapSize} gap)</span>
                </span>
              </div>
            </div>

            {/* Action Plan */}
            <div className={`p-5 rounded-xl border-2 ${
              gapSize === 'none' ? 'bg-green-50 border-green-200'
                : gapSize === 'small' ? 'bg-blue-50 border-blue-200'
                : gapSize === 'medium' ? 'bg-yellow-50 border-yellow-200'
                : 'bg-red-50 border-red-200'
            }`}>
              <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" /> Recommended Action Plan
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Action</p>
                    <p className="text-sm text-gray-600">{plan.action}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Estimated Time to Close Gap</p>
                    <p className="text-sm text-gray-600">{plan.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </SectionCard>
    </div>
  );
}
