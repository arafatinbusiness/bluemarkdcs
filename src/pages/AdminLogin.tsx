import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ArrowLeft, LogIn } from 'lucide-react';
import { motion } from 'motion/react';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <div className="p-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="flex-grow flex items-center justify-center px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-blue-100 border border-gray-100"
        >
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200">
              <Lock size={40} />
            </div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
              ADMIN <span className="text-blue-600">LOGIN</span>
            </h1>
            <p className="text-gray-500 font-bold mt-2">Authorized Personnel Only</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-gray-700 ml-2 flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                EMAIL ADDRESS
              </label>
              <input 
                required
                type="email" 
                placeholder="admin@dubaidocs.com" 
                className="p-5 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-900"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-gray-700 ml-2 flex items-center gap-2">
                <Lock size={16} className="text-blue-600" />
                PASSWORD
              </label>
              <div className="relative">
                <input 
                  required
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••" 
                  className="w-full p-5 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-900 pr-14"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm font-bold text-blue-600 hover:underline">Forgot Password?</a>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white p-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 group mt-4"
            >
              LOGIN NOW
              <LogIn size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <p className="text-center mt-10 text-gray-500 text-sm font-bold">
            Dubai Document Clearance Management System v2.0
          </p>
        </motion.div>
      </div>
    </main>
  );
}
