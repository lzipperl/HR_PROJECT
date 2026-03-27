import { useState } from 'react';
import SectionCard from '../../components/SectionCard';
import { employeeInventory, replacementCharts, markovMatrix } from '../../data/mockData';
import { Search, ArrowRight, Info } from 'lucide-react';

export default function SupplyForecasting() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employeeInventory.filter(emp =>
    Object.values(emp).some(v => String(v).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Internal Skill Inventory */}
      <SectionCard title="📋 Internal Skill Inventory" subtitle="Searchable employee database with skills and promotion eligibility">
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, department, skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-maroon-50">
                <th className="text-left p-2.5 font-semibold text-gray-700">ID</th>
                <th className="text-left p-2.5 font-semibold text-gray-700">Name</th>
                <th className="text-left p-2.5 font-semibold text-gray-700">Dept</th>
                <th className="text-left p-2.5 font-semibold text-gray-700">Skills</th>
                <th className="text-center p-2.5 font-semibold text-gray-700">Exp (Yrs)</th>
                <th className="text-left p-2.5 font-semibold text-gray-700">Training</th>
                <th className="text-center p-2.5 font-semibold text-gray-700">Promo Eligible</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="p-2.5 font-mono text-xs text-gray-500">{emp.id}</td>
                  <td className="p-2.5 font-medium text-gray-900">{emp.name}</td>
                  <td className="p-2.5 text-gray-600">{emp.dept}</td>
                  <td className="p-2.5 text-gray-600 max-w-xs truncate">{emp.skills}</td>
                  <td className="p-2.5 text-center font-medium">{emp.experience}</td>
                  <td className="p-2.5 text-gray-600 text-xs">{emp.training}</td>
                  <td className="p-2.5 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${emp.promotionEligible === 'Yes' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {emp.promotionEligible}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Replacement Charts */}
      <SectionCard title="🔄 Replacement Charts" subtitle="Current role holders with potential replacements">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {replacementCharts.map((chart) => (
            <div key={chart.current} className="p-4 border border-gray-200 rounded-xl bg-gray-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-maroon flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">{chart.current}</p>
              </div>
              <div className="space-y-2 ml-4 border-l-2 border-gold pl-4">
                {chart.replacements.map((rep, i) => (
                  <div key={rep} className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-gold-dark" />
                    <span className="text-sm text-gray-600">{rep}</span>
                    <span className="text-[10px] bg-maroon-50 text-maroon px-1.5 py-0.5 rounded-full">
                      R{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Markov Analysis */}
      <SectionCard title="📐 Markov Analysis" subtitle="Year-over-year transition probability matrix">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-maroon-50">
                <th className="text-left p-3 font-semibold text-gray-700">Employee Level</th>
                <th className="text-center p-3 font-semibold text-gray-700">
                  <div className="flex items-center justify-center gap-1">
                    Stay %
                    <span className="group relative">
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                      <span className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-xs bg-gray-800 text-white p-2 rounded-lg shadow-lg z-10">
                        Probability of employee staying in the same position
                      </span>
                    </span>
                  </div>
                </th>
                <th className="text-center p-3 font-semibold text-gray-700">
                  <div className="flex items-center justify-center gap-1">
                    Promote %
                    <span className="group relative">
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                      <span className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-xs bg-gray-800 text-white p-2 rounded-lg shadow-lg z-10">
                        Probability of promotion to the next level
                      </span>
                    </span>
                  </div>
                </th>
                <th className="text-center p-3 font-semibold text-gray-700">
                  <div className="flex items-center justify-center gap-1">
                    Leave %
                    <span className="group relative">
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                      <span className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-xs bg-gray-800 text-white p-2 rounded-lg shadow-lg z-10">
                        Probability of attrition/leaving the university
                      </span>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {markovMatrix.map((row) => (
                <tr key={row.level} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-900">{row.level}</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {(row.stayProb * 100).toFixed(0)}%
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      {(row.promoteProb * 100).toFixed(0)}%
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-0.5 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                      {(row.leaveProb * 100).toFixed(0)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
