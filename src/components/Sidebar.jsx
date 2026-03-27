import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, BarChart3, Sprout, Trophy, Search, Info, X
} from 'lucide-react';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin', 'employee'] },
  { path: '/hr-planning', label: 'HR Planning', icon: BarChart3, roles: ['admin', 'employee'] },
  { path: '/hrd-practices', label: 'HRD Practices', icon: Sprout, roles: ['admin', 'employee'] },
  { path: '/achievements', label: 'Achievements', icon: Trophy, roles: ['admin', 'employee'] },
  { path: '/gap-analysis', label: 'Gap Analysis', icon: Search, roles: ['admin'] },
  { path: '/about', label: 'About', icon: Info, roles: ['admin', 'employee'] },
];

export default function Sidebar({ isOpen, onClose }) {
  const { user } = useAuth();
  const location = useLocation();

  const filteredItems = navItems.filter(item => item.roles.includes(user?.role));

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-maroon-dark to-maroon z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto`}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-maroon font-bold text-lg">L</span>
              </div>
              <div>
                <h2 className="text-white font-bold text-sm">LPU HRConnect</h2>
                <p className="text-gold text-[10px] font-medium">HR Planning & Development</p>
              </div>
            </div>
            <button onClick={onClose} className="lg:hidden text-white/60 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 mt-2 space-y-1">
          {filteredItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-white/15 text-gold shadow-lg'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-gold' : ''}`} />
                {item.label}
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gold" />}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <p className="text-white/40 text-[10px] text-center italic">
            "Where the world comes to learn"
          </p>
          <p className="text-white/30 text-[9px] text-center mt-1">
            Lovely Professional University
          </p>
        </div>
      </aside>
    </>
  );
}
