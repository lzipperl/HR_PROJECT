import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, Lock, User, UserPlus, Mail } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (isLogin) {
        const result = login(username, password);
        if (result.success) {
          navigate('/dashboard');
        } else {
          setError(result.error);
        }
      } else {
        const result = signup(name, email, username, password);
        if (result.success) {
          setIsLogin(true);
          setPassword('');
          // toast is handled in AuthContext
        } else {
          setError(result.error);
        }
      }
      setIsLoading(false);
    }, 500);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setUsername('');
    setPassword('');
    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-dark via-maroon to-maroon-light flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,0.3) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(255,215,0,0.2) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative w-full max-w-md animate-fade-in">
        {/* Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 transition-all duration-300">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-maroon to-maroon-dark flex items-center justify-center mb-4 shadow-lg">
              <span className="text-3xl font-bold text-gold">LPU</span>
            </div>
            <h1 className="text-xl font-bold text-gold-dark text-center">
              Lovely Professional University
            </h1>
            <h2 className="text-lg font-semibold text-maroon mt-1">HRConnect Portal</h2>
            <p className="text-xs text-gray-400 mt-1 italic">
              HR Planning & Development
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name Field (Sign Up Only) */}
            {!isLogin && (
              <div className="animate-fade-in space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <div className="relative">
                    <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter full name"
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm
                        focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20
                        transition-all duration-200"
                      required={!isLogin}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm
                        focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20
                        transition-all duration-200"
                      required={!isLogin}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm
                    focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20
                    transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-xl text-sm
                    focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20
                    transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl animate-fade-in mt-4">
                <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-maroon to-maroon-dark text-white font-semibold
                  rounded-xl shadow-lg hover:shadow-xl hover:from-maroon-dark hover:to-maroon
                  transform hover:-translate-y-0.5 transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                  focus:outline-none focus:ring-4 focus:ring-maroon/30"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {isLogin ? 'Signing in...' : 'Creating account...'}
                  </span>
                ) : (
                  isLogin ? 'Login' : 'Sign Up'
                )}
              </button>
            </div>
          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                type="button"
                onClick={toggleMode}
                className="text-maroon font-semibold hover:text-maroon-dark transition-colors duration-200 focus:outline-none focus:underline"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>

          {/* Tagline */}
          <p className="text-center text-xs text-gray-400 mt-6 italic">
            "Where the world comes to learn"
          </p>
        </div>

        {/* Bottom text */}
        <p className="text-center text-white/40 text-[10px] mt-4">
          HRM203 — Human Resource Planning & Development
        </p>
      </div>
    </div>
  );
}
