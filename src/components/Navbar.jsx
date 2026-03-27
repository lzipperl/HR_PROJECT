import { useAuth } from '../context/AuthContext';
import { LogOut, Menu, User } from 'lucide-react';

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 lg:px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center">
              <span className="text-white font-bold text-xs">LPU</span>
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-900">Lovely Professional University</h1>
              <p className="text-[10px] text-gold-dark font-medium -mt-0.5">Phagwara, Punjab — Established 2005</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-maroon-50 rounded-lg">
            <User className="w-4 h-4 text-maroon" />
            <span className="text-sm font-medium text-maroon">{user?.name}</span>
            <span className="text-[10px] bg-maroon text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
              {user?.role}
            </span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-600
              rounded-lg text-sm font-medium text-gray-600 transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
