import { useState } from 'react';
import SectionCard from '../../components/SectionCard';
import { engagementInitiatives, engagementTrend, surveyQuestions } from '../../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Award, Star, Heart, Cake, Send, CheckCircle } from 'lucide-react';

const iconMap = { Trophy, Award, Star, Heart, Cake };

export default function EmployeeEngagement() {
  const [surveyAnswers, setSurveyAnswers] = useState(
    Array(surveyQuestions.length).fill(0)
  );
  const [submitted, setSubmitted] = useState(false);

  const totalScore = surveyAnswers.reduce((a, b) => a + b, 0);
  const maxScore = surveyQuestions.length * 5;

  const getFeedback = (score) => {
    const pct = (score / maxScore) * 100;
    if (pct >= 80) return { msg: 'Highly Engaged! You are a valued and motivated member of LPU.', color: 'text-green-600' };
    if (pct >= 60) return { msg: 'Moderately Engaged. There is room for growth — explore LPU\'s development programs!', color: 'text-blue-600' };
    if (pct >= 40) return { msg: 'Partially Engaged. Consider connecting with your HR representative for support.', color: 'text-yellow-600' };
    return { msg: 'Low Engagement. We encourage you to discuss concerns with your department and HR team.', color: 'text-red-600' };
  };

  const handleSubmit = () => {
    if (surveyAnswers.every(a => a > 0)) {
      setSubmitted(true);
    }
  };

  const resetSurvey = () => {
    setSurveyAnswers(Array(surveyQuestions.length).fill(0));
    setSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {/* Engagement Initiatives */}
      <SectionCard title="🎉 Employee Engagement Initiatives" subtitle="Programs that foster a thriving workplace culture at LPU">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {engagementInitiatives.map((init) => {
            const Icon = iconMap[init.icon] || Star;
            return (
              <div key={init.name} className="card-hover p-4 bg-gradient-to-br from-maroon-50 to-white border border-maroon-100 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-maroon to-gold flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{init.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{init.description}</p>
              </div>
            );
          })}
        </div>
      </SectionCard>

      {/* Engagement Trend */}
      <SectionCard title="📈 Engagement Score Trend (2020–2024)" subtitle="Year-over-year improvement in employee engagement">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={engagementTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb' }} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#8B0000"
                strokeWidth={3}
                dot={{ r: 6, fill: '#8B0000', stroke: '#fff', strokeWidth: 2 }}
                name="Engagement Score (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      {/* Employee Satisfaction Survey */}
      <SectionCard title="📝 Employee Satisfaction Survey" subtitle="Rate your experience at LPU (1 = Strongly Disagree, 5 = Strongly Agree)">
        {!submitted ? (
          <>
            <div className="space-y-5">
              {surveyQuestions.map((q, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm font-medium text-gray-800 mb-3">{i + 1}. {q}</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(val => (
                      <button
                        key={val}
                        onClick={() => {
                          const newAnswers = [...surveyAnswers];
                          newAnswers[i] = val;
                          setSurveyAnswers(newAnswers);
                        }}
                        className={`w-10 h-10 rounded-lg text-sm font-bold transition-all
                          ${surveyAnswers[i] === val
                            ? 'bg-maroon text-white shadow-lg scale-110'
                            : 'bg-white border border-gray-200 text-gray-600 hover:border-maroon'
                          }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={surveyAnswers.some(a => a === 0)}
              className="mt-4 flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-maroon to-maroon-dark text-white rounded-xl text-sm font-medium
                hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" /> Submit Survey
            </button>
          </>
        ) : (
          <div className="text-center py-8 animate-fade-in">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Your Engagement Score: {totalScore}/{maxScore}
            </h3>
            <p className={`text-base font-medium ${getFeedback(totalScore).color}`}>
              {getFeedback(totalScore).msg}
            </p>
            <button
              onClick={resetSurvey}
              className="mt-6 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-all"
            >
              Retake Survey
            </button>
          </div>
        )}
      </SectionCard>
    </div>
  );
}
