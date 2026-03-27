import { useState } from 'react';
import TrainingDev from '../sections/hrd-practices/TrainingDev';
import PerformanceAppraisal from '../sections/hrd-practices/PerformanceAppraisal';
import CareerGrowth from '../sections/hrd-practices/CareerGrowth';
import EmployeeEngagement from '../sections/hrd-practices/EmployeeEngagement';
import LeadershipDev from '../sections/hrd-practices/LeadershipDev';
import { BookOpen, ClipboardList, TrendingUp, Heart, Users } from 'lucide-react';

const tabs = [
  { id: 'training', label: 'Training & Dev', icon: BookOpen },
  { id: 'appraisal', label: 'Performance Appraisal', icon: ClipboardList },
  { id: 'career', label: 'Career Growth', icon: TrendingUp },
  { id: 'engagement', label: 'Engagement', icon: Heart },
  { id: 'leadership', label: 'Leadership', icon: Users },
];

export default function HRDPractices() {
  const [activeTab, setActiveTab] = useState('training');

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">HRD Practices</h1>
        <p className="text-sm text-gray-500 mt-1">Human Resource Development — Training, Appraisal, Career Growth, Engagement & Leadership</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200
              ${activeTab === tab.id
                ? 'bg-maroon text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-maroon-50 border border-gray-200'
              }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'training' && <TrainingDev />}
      {activeTab === 'appraisal' && <PerformanceAppraisal />}
      {activeTab === 'career' && <CareerGrowth />}
      {activeTab === 'engagement' && <EmployeeEngagement />}
      {activeTab === 'leadership' && <LeadershipDev />}
    </div>
  );
}
