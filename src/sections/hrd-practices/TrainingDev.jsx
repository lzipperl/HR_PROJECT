import { useState } from 'react';
import SectionCard from '../../components/SectionCard';
import { trainingPrograms, trainingModeDistribution, tnaDepartmentGaps } from '../../data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Calendar, Clock, Users, MapPin, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const statusColors = {
  Upcoming: 'bg-blue-100 text-blue-700',
  Ongoing: 'bg-yellow-100 text-yellow-700',
  Completed: 'bg-green-100 text-green-700',
};

const statusIcons = {
  Upcoming: Calendar,
  Ongoing: Loader,
  Completed: CheckCircle,
};

export default function TrainingDev() {
  const [tnaDept, setTnaDept] = useState('');

  return (
    <div className="space-y-6">
      {/* Training Calendar */}
      <SectionCard title="📅 Training Calendar 2024-25" subtitle="Faculty & Staff development programs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainingPrograms.map((prog) => {
            const StatusIcon = statusIcons[prog.status];
            return (
              <div key={prog.name} className="card-hover p-4 border border-gray-200 rounded-xl bg-white">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{prog.name}</h4>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${statusColors[prog.status]}`}>
                    <StatusIcon className="w-3 h-3 inline mr-1" />
                    {prog.status}
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-500">
                  <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5" /> {prog.target}</div>
                  <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {prog.duration}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {prog.mode}</div>
                  <div className="flex items-center gap-2"><span className="w-3.5 h-3.5 text-center">👨‍🏫</span> {prog.trainer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>

      {/* Training Mode Distribution */}
      <SectionCard title="📊 Training Mode Distribution" subtitle="Online vs Offline vs Hybrid breakdown">
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={trainingModeDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {trainingModeDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      {/* TNA Tool */}
      <SectionCard title="🔍 Training Needs Assessment (TNA) Tool" subtitle="Select a department to identify skill gaps and recommended training">
        <div className="mb-4">
          <select
            value={tnaDept}
            onChange={(e) => setTnaDept(e.target.value)}
            className="w-full md:w-64 px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
          >
            <option value="">Select department...</option>
            {Object.keys(tnaDepartmentGaps).map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {tnaDept && tnaDepartmentGaps[tnaDept] && (
          <div className="animate-fade-in space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <h4 className="font-semibold text-red-800 text-sm flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4" /> Identified Skill Gaps
              </h4>
              <div className="flex flex-wrap gap-2">
                {tnaDepartmentGaps[tnaDept].gaps.map(gap => (
                  <span key={gap} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                    {gap}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <h4 className="font-semibold text-green-800 text-sm flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4" /> Recommended Training Program
              </h4>
              <p className="text-sm text-green-700 font-medium">{tnaDepartmentGaps[tnaDept].recommended}</p>
            </div>
          </div>
        )}
      </SectionCard>
    </div>
  );
}
