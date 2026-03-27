import { useState } from 'react';
import SectionCard from '../../components/SectionCard';
import { decisionPanelData } from '../../data/mockData';
import { ArrowRightLeft, UserPlus, UserCheck, CheckCircle } from 'lucide-react';

export default function DecisionPanel() {
  const [dept, setDept] = useState('');
  const [vacancy, setVacancy] = useState('');

  const getRecommendation = () => {
    if (!dept || !vacancy) return null;
    const type = decisionPanelData.recommendations[dept]?.[vacancy];
    if (!type) return null;
    return {
      type,
      label: type === 'internal' ? 'Internal Promotion' : 'External Hire',
      reasons: decisionPanelData.reasons[type],
    };
  };

  const recommendation = getRecommendation();

  return (
    <SectionCard title="🔄 Internal Promotion vs External Hiring" subtitle="Interactive decision support tool">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Select Department</label>
          <select
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
          >
            <option value="">Choose a department...</option>
            {decisionPanelData.departments.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Vacancy Type</label>
          <select
            value={vacancy}
            onChange={(e) => setVacancy(e.target.value)}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
          >
            <option value="">Choose vacancy type...</option>
            {decisionPanelData.vacancyTypes.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      {recommendation && (
        <div className={`p-6 rounded-xl border-2 animate-fade-in ${
          recommendation.type === 'internal'
            ? 'bg-green-50 border-green-200'
            : 'bg-blue-50 border-blue-200'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            {recommendation.type === 'internal' ? (
              <UserCheck className="w-8 h-8 text-green-600" />
            ) : (
              <UserPlus className="w-8 h-8 text-blue-600" />
            )}
            <div>
              <h4 className={`text-lg font-bold ${recommendation.type === 'internal' ? 'text-green-800' : 'text-blue-800'}`}>
                Recommended: {recommendation.label}
              </h4>
              <p className="text-sm text-gray-600">For {vacancy} in {dept} Department</p>
            </div>
          </div>
          <div className="space-y-2">
            {recommendation.reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${recommendation.type === 'internal' ? 'text-green-500' : 'text-blue-500'}`} />
                <p className="text-sm text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!recommendation && dept && vacancy && (
        <p className="text-sm text-gray-500 text-center py-4">No recommendation available for this combination.</p>
      )}

      {(!dept || !vacancy) && (
        <div className="text-center py-8 text-gray-400">
          <ArrowRightLeft className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p className="text-sm">Select a department and vacancy type to get a recommendation</p>
        </div>
      )}
    </SectionCard>
  );
}
