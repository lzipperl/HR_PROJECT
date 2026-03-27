import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, X } from 'lucide-react';

export default function Toast() {
  const { toast, clearToast } = useAuth();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(clearToast, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast, clearToast]);

  if (!toast) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-up">
      <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-xl border border-green-200">
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
        <span className="text-sm font-medium text-gray-800">{toast.message}</span>
        <button onClick={clearToast} className="ml-2 text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
