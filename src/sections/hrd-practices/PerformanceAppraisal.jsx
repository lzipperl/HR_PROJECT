import { useState } from 'react';
import SectionCard from '../../components/SectionCard';
import { departmentAppraisalScores } from '../../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const criteria = [
  { name: 'Teaching Quality', key: 'teaching' },
  { name: 'Research Output', key: 'research' },
  { name: 'Administrative Contribution', key: 'admin' },
  { name: 'Student Feedback', key: 'student' },
  { name: 'Punctuality & Discipline', key: 'punctuality' },
];

function getGrade(pct) {
  if (pct >= 90) return { grade: 'A+', color: 'text-green-600', label: 'Outstanding' };
  if (pct >= 80) return { grade: 'A', color: 'text-green-500', label: 'Excellent' };
  if (pct >= 70) return { grade: 'B', color: 'text-blue-500', label: 'Very Good' };
  if (pct >= 60) return { grade: 'C', color: 'text-yellow-600', label: 'Good' };
  return { grade: 'D', color: 'text-red-500', label: 'Needs Improvement' };
}

export default function PerformanceAppraisal() {
  const [empName, setEmpName] = useState('');
  const [empDept, setEmpDept] = useState('');
  const [ratings, setRatings] = useState(
    Object.fromEntries(criteria.map(c => [c.key, 3]))
  );

  const totalScore = Object.values(ratings).reduce((a, b) => a + b, 0);
  const maxScore = criteria.length * 5;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const { grade, color, label } = getGrade(percentage);

  return (
    <div className="space-y-6">
      {/* 360-Degree Appraisal Model */}
      <SectionCard title="🔄 360-Degree Appraisal Model" subtitle="Multi-source performance evaluation system at LPU">
        <div className="flex justify-center py-6">
          <div className="relative w-72 h-72">
            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-maroon to-maroon-dark flex items-center justify-center shadow-xl z-10">
              <span className="text-white text-xs font-bold text-center leading-tight">360°<br/>Appraisal</span>
            </div>
            {/* Evaluators */}
            {[
              { label: 'Self', angle: -90, color: 'from-blue-400 to-blue-600' },
              { label: 'Peers', angle: -18, color: 'from-green-400 to-green-600' },
              { label: 'Students', angle: 54, color: 'from-purple-400 to-purple-600' },
              { label: 'HOD', angle: 126, color: 'from-amber-400 to-amber-600' },
              { label: 'Subordinates', angle: 198, color: 'from-pink-400 to-pink-600' },
            ].map((ev) => {
              const rad = (ev.angle * Math.PI) / 180;
              const x = 50 + 38 * Math.cos(rad);
              const y = 50 + 38 * Math.sin(rad);
              return (
                <div
                  key={ev.label}
                  className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${ev.color} flex items-center justify-center shadow-lg`}
                  style={{
                    top: `${y}%`,
                    left: `${x}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <span className="text-white text-[10px] font-bold text-center">{ev.label}</span>
                </div>
              );
            })}
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              {[
                { angle: -90 }, { angle: -18 }, { angle: 54 }, { angle: 126 }, { angle: 198 }
              ].map((ev, i) => {
                const rad = (ev.angle * Math.PI) / 180;
                const x = 50 + 38 * Math.cos(rad);
                const y = 50 + 38 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1="50%" y1="50%"
                    x2={`${x}%`} y2={`${y}%`}
                    stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </SectionCard>

      {/* Mock Appraisal Form */}
      <SectionCard title="📝 Mock Appraisal Form" subtitle="Rate faculty performance across 5 criteria">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employee Name</label>
            <input
              type="text"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
              placeholder="Enter employee name"
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <input
              type="text"
              value={empDept}
              onChange={(e) => setEmpDept(e.target.value)}
              placeholder="Enter department"
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon"
            />
          </div>
        </div>

        <div className="space-y-4">
          {criteria.map((c) => (
            <div key={c.key} className="flex items-center gap-4">
              <label className="w-48 text-sm font-medium text-gray-700 flex-shrink-0">{c.name}</label>
              <input
                type="range"
                min="1"
                max="5"
                value={ratings[c.key]}
                onChange={(e) => setRatings(prev => ({ ...prev, [c.key]: Number(e.target.value) }))}
                className="flex-1 accent-maroon"
              />
              <span className="w-8 text-center font-bold text-maroon">{ratings[c.key]}</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <div key={s} className={`w-2 h-6 rounded-sm ${s <= ratings[c.key] ? 'bg-maroon' : 'bg-gray-200'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Score */}
        <div className="mt-6 p-5 bg-gradient-to-r from-maroon-50 to-gold-50 rounded-xl border border-maroon-100">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Score</p>
              <p className="text-3xl font-bold text-maroon">{totalScore} <span className="text-lg text-gray-400">/ {maxScore}</span></p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Percentage</p>
              <p className="text-3xl font-bold text-maroon">{percentage}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Grade</p>
              <p className={`text-4xl font-bold ${color}`}>{grade}</p>
              <p className={`text-sm font-medium ${color}`}>{label}</p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Department Scores Chart */}
      <SectionCard title="📊 Department-wise Appraisal Scores (2024)" subtitle="Average performance scores by department">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={departmentAppraisalScores}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="dept" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 5]} tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb', fontSize: '13px' }} />
              <Bar dataKey="score" fill="#8B0000" name="Avg. Score" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>
    </div>
  );
}
