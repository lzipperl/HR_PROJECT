import { useState } from 'react';
import SectionCard from '../../components/SectionCard';
import { ratioAnalysis, delphiRounds, skillGapData, successionPipeline } from '../../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calculator, Users, AlertTriangle, TrendingUp } from 'lucide-react';

export default function DemandForecasting() {
  const [growthRate, setGrowthRate] = useState(15);

  const projectedStudents = Math.round(ratioAnalysis.currentStudents * (1 + growthRate / 100));
  const projectedFaculty = Math.ceil(projectedStudents / 20);
  const additionalHires = projectedFaculty - ratioAnalysis.currentFaculty;

  const readinessColors = { green: 'bg-green-500', yellow: 'bg-yellow-400', red: 'bg-red-500' };
  const readinessLabels = { green: 'Ready', yellow: 'In Development', red: 'Gap' };

  return (
    <div className="space-y-6">
      {/* Ratio Analysis */}
      <SectionCard title="📊 Ratio Analysis" subtitle="Student-to-Faculty ratio based demand projection">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <label className="text-sm font-medium text-gray-700">Projected Student Growth:</label>
            <input
              type="range"
              min="5"
              max="30"
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-48 accent-maroon"
            />
            <span className="text-sm font-bold text-maroon">{growthRate}%</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-maroon-50">
                  <th className="text-left p-3 font-semibold text-gray-700">Metric</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Current</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Projected</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Total Students</td>
                  <td className="p-3 text-right font-medium">{ratioAnalysis.currentStudents.toLocaleString()}</td>
                  <td className="p-3 text-right font-bold text-maroon">{projectedStudents.toLocaleString()}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Student:Faculty Ratio</td>
                  <td className="p-3 text-right font-medium">20:1</td>
                  <td className="p-3 text-right font-medium">20:1</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-600">Faculty Required</td>
                  <td className="p-3 text-right font-medium">{ratioAnalysis.currentFaculty.toLocaleString()}</td>
                  <td className="p-3 text-right font-bold text-maroon">{projectedFaculty.toLocaleString()}</td>
                </tr>
                <tr className="bg-gold-50">
                  <td className="p-3 font-semibold text-gray-700">Additional Hires Needed</td>
                  <td className="p-3 text-right">—</td>
                  <td className="p-3 text-right font-bold text-lg text-maroon">{additionalHires > 0 ? `+${additionalHires}` : '0'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>

      {/* Delphi Technique */}
      <SectionCard title="🔮 Delphi Technique" subtitle="Multi-round expert consensus panel">
        <div className="space-y-4">
          {delphiRounds.map((round) => (
            <div key={round.round} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-maroon-50 px-4 py-2">
                <h4 className="font-semibold text-maroon text-sm">Round {round.round}</h4>
              </div>
              <div className="p-4 space-y-3">
                {round.experts.map((expert) => (
                  <div key={expert.name} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-maroon to-gold flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{expert.name}</p>
                      <p className="text-sm text-gray-600">{expert.opinion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-semibold text-green-800 text-sm">Consensus Reached</p>
              <p className="text-sm text-green-700">Hire <strong>120 new faculty</strong> in the next academic year, with priority in AI, Biotech, and Law departments.</p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Skill Gap Analysis Chart */}
      <SectionCard title="📈 Skill Gap Analysis" subtitle="Required vs Available skill levels by department">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillGapData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="dept" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb', fontSize: '13px' }}
              />
              <Legend />
              <Bar dataKey="required" fill="#8B0000" name="Required Skills" radius={[4,4,0,0]} />
              <Bar dataKey="available" fill="#FFD700" name="Available Skills" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      {/* Succession Planning */}
      <SectionCard title="🏛️ Succession Planning" subtitle="Leadership pipeline & succession readiness">
        <div className="space-y-3">
          {successionPipeline.map((item, i) => (
            <div key={item.role} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center text-white font-bold text-sm">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{item.role}</p>
                <p className="text-xs text-gray-500">{item.holder}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${readinessColors[item.readiness]}`} />
                <span className="text-xs font-medium text-gray-600">{readinessLabels[item.readiness]}</span>
              </div>
              <div className="text-xs text-gray-400">→ {item.replacement}</div>
            </div>
          ))}
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
            <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-green-500" /> Ready</div>
            <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /> In Development</div>
            <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-red-500" /> Gap</div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
