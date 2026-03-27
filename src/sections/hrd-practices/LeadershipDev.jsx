import { useState } from 'react';
import SectionCard from '../../components/SectionCard';
import { leadershipPrograms, leadershipCompetencies, leadershipQuizQuestions } from '../../data/mockData';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { Users, Clock, CheckCircle, XCircle, Award } from 'lucide-react';

export default function LeadershipDev() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizScore = Object.values(quizAnswers).filter(v => v === true).length;
  const totalQuestions = leadershipQuizQuestions.length;

  const getLeadershipFeedback = (score) => {
    if (score >= 4) return { msg: 'Excellent! You demonstrate strong leadership readiness. Consider applying for the Emerging Leaders Program.', color: 'text-green-600', badge: '🌟 Leadership Ready' };
    if (score >= 3) return { msg: 'Good potential! You have solid leadership foundations. Focus on developing your weaker areas through mentorship.', color: 'text-blue-600', badge: '📈 High Potential' };
    if (score >= 2) return { msg: 'Developing! You show promise but need more experience. Engage in leadership workshops and seek feedback.', color: 'text-yellow-600', badge: '🌱 Developing' };
    return { msg: 'Early Stage. Focus on building foundational skills like communication, mentoring, and initiative-taking.', color: 'text-red-600', badge: '📚 Building Foundation' };
  };

  return (
    <div className="space-y-6">
      {/* Leadership Programs */}
      <SectionCard title="🎯 Leadership Development Programs" subtitle="Building the next generation of academic leaders at LPU">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {leadershipPrograms.map((prog) => (
            <div key={prog.name} className="card-hover p-5 border border-gray-200 rounded-xl bg-gradient-to-br from-white to-maroon-50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-maroon to-gold flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">{prog.name}</h4>
              <p className="text-xs text-gray-500 mb-3">{prog.description}</p>
              <div className="space-y-1 text-xs text-gray-500">
                <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {prog.target}</div>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {prog.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Leadership Competency Radar */}
      <SectionCard title="🎯 Leadership Competency Wheel" subtitle="Current vs Target competency scores at LPU">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={leadershipCompetencies}>
              <PolarGrid gridType="polygon" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar name="Current Score" dataKey="current" stroke="#8B0000" fill="#8B0000" fillOpacity={0.3} strokeWidth={2} />
              <Radar name="Target Score" dataKey="target" stroke="#FFD700" fill="#FFD700" fillOpacity={0.15} strokeWidth={2} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      {/* Leadership Quiz */}
      <SectionCard title="🧠 Are You Leadership Ready?" subtitle="Quick self-assessment — answer Yes or No to each question">
        {!quizSubmitted ? (
          <>
            <div className="space-y-4">
              {leadershipQuizQuestions.map((q, i) => (
                <div key={q.key} className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm font-medium text-gray-800 mb-3">{i + 1}. {q.question}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setQuizAnswers(prev => ({ ...prev, [q.key]: true }))}
                      className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all
                        ${quizAnswers[q.key] === true
                          ? 'bg-green-500 text-white shadow-lg'
                          : 'bg-white border border-gray-200 text-gray-600 hover:border-green-400'
                        }`}
                    >
                      <CheckCircle className="w-4 h-4" /> Yes
                    </button>
                    <button
                      onClick={() => setQuizAnswers(prev => ({ ...prev, [q.key]: false }))}
                      className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all
                        ${quizAnswers[q.key] === false
                          ? 'bg-red-500 text-white shadow-lg'
                          : 'bg-white border border-gray-200 text-gray-600 hover:border-red-400'
                        }`}
                    >
                      <XCircle className="w-4 h-4" /> No
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => Object.keys(quizAnswers).length === totalQuestions && setQuizSubmitted(true)}
              disabled={Object.keys(quizAnswers).length < totalQuestions}
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-maroon to-maroon-dark text-white rounded-xl text-sm font-medium
                hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          </>
        ) : (
          <div className="text-center py-8 animate-fade-in">
            <div className="text-5xl mb-4">{getLeadershipFeedback(quizScore).badge.split(' ')[0]}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Leadership Score: {quizScore}/{totalQuestions}
            </h3>
            <p className="text-sm bg-maroon-50 text-maroon px-3 py-1 rounded-full inline-block mb-3">
              {getLeadershipFeedback(quizScore).badge}
            </p>
            <p className={`text-base font-medium max-w-lg mx-auto ${getLeadershipFeedback(quizScore).color}`}>
              {getLeadershipFeedback(quizScore).msg}
            </p>
            <button
              onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }}
              className="mt-6 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-all"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </SectionCard>
    </div>
  );
}
