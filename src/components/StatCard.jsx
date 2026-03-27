import { useState, useEffect, useRef } from 'react';

export default function StatCard({ label, value, suffix = '', icon: Icon, decimals = 0, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      const duration = 1500;
      const steps = 40;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, value, delay, decimals]);

  return (
    <div ref={ref} className="card-hover bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center flex-shrink-0">
        {Icon && <Icon className="w-7 h-7 text-white" />}
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">
          {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm text-gray-500 font-medium">{label}</div>
      </div>
    </div>
  );
}
