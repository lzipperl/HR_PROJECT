import { useState } from 'react';
import SectionCard from '../../components/SectionCard';
import { careerLadder } from '../../data/mockData';
import { ChevronRight, GraduationCap, CheckCircle, XCircle } from 'lucide-react';

export default function CareerGrowth() {
  const [years, setYears] = useState('');
  const [hasPHD, setHasPHD] = useState(false);
  const [pubs, setPubs] = useState('');
  const [result, setResult] = useState(null);

  const checkEligibility = () => {
    const y = parseInt(years) || 0;
    const p = parseInt(pubs) || 0;

    if (y >= 20 && hasPHD && p >= 15) setResult({ level: 'Dean', index: 4 });
    else if (y >= 12 && hasPHD && p >= 10) setResult({ level: 'Professor', index: 3 });
    else if (y >= 6 && hasPHD && p >= 5) setResult({ level: 'Associate Professor', index: 2 });
    else if (y >= 3 && p >= 2) setResult({ level: 'Assistant Professor', index: 1 });
    else setResult({ level: 'Lecturer', index: 0 });
  };

  return (
    <div className="space-y-6">
      {/* Career Ladder */}
      <SectionCard title="🪜 Career Ladder — LPU Faculty" subtitle="Progression pathway from Lecturer to Dean">
        <div className="space-y-0">
          {careerLadder.map((step, i) => (
            <div key={step.level} className="relative">
              {i < careerLadder.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-8 bg-gradient-to-b from-maroon to-gold" />
              )}
              <div className={`flex items-start gap-4 p-4 rounded-xl transition-all ${
                result && result.index === i ? 'bg-green-50 border border-green-200' : 'hover:bg-gray-50'
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ${
                  result && result.index === i
                    ? 'bg-gradient-to-br from-green-500 to-green-600'
                    : 'bg-gradient-to-br from-maroon to-maroon-light'
                }`}>
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    {step.level}
                    {result && result.index === i && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        ✓ You qualify here
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">{step.years}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-600">
                    <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5 text-maroon" /> {step.requirements}</span>
                    <span className="flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5 text-gold-dark" /> {step.publications}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Eligibility Checker */}
      <SectionCard title="🔎 Check My Eligibility" subtitle="Enter your details to see which level you qualify for">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
            <input
              type="number"
              min="0"
              max="40"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="e.g. 8"
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Publications</label>
            <input
              type="number"
              min="0"
              value={pubs}
              onChange={(e) => setPubs(e.target.value)}
              placeholder="e.g. 5"
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PhD Status</label>
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => setHasPHD(true)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                  hasPHD ? 'border-maroon bg-maroon text-white' : 'border-gray-200 text-gray-600 hover:border-maroon'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setHasPHD(false)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                  !hasPHD ? 'border-maroon bg-maroon text-white' : 'border-gray-200 text-gray-600 hover:border-maroon'
                }`}
              >
                No
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={checkEligibility}
          className="px-6 py-2.5 bg-gradient-to-r from-maroon to-maroon-dark text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all"
        >
          Check Eligibility
        </button>

        {result && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-800">You qualify for: <span className="text-lg">{result.level}</span></p>
              <p className="text-sm text-green-600">Based on {years || 0} years experience, {pubs || 0} publications, PhD: {hasPHD ? 'Yes' : 'No'}</p>
            </div>
          </div>
        )}
      </SectionCard>
    </div>
  );
}
