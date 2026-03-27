import { useState } from 'react';
import DemandForecasting from '../sections/hr-planning/DemandForecasting';
import SupplyForecasting from '../sections/hr-planning/SupplyForecasting';
import DecisionPanel from '../sections/hr-planning/DecisionPanel';
import { TrendingUp, Database, ArrowRightLeft } from 'lucide-react';

const tabs = [
  { id: 'demand', label: 'Demand Forecasting', icon: TrendingUp },
  { id: 'supply', label: 'Supply Forecasting', icon: Database },
  { id: 'decision', label: 'Decision Panel', icon: ArrowRightLeft },
];

export default function HRPlanning() {
  const [activeTab, setActiveTab] = useState('demand');

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">HR Planning</h1>
        <p className="text-sm text-gray-500 mt-1">Demand & Supply Forecasting for Human Resources</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200
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
      {activeTab === 'demand' && <DemandForecasting />}
      {activeTab === 'supply' && <SupplyForecasting />}
      {activeTab === 'decision' && <DecisionPanel />}
    </div>
  );
}
