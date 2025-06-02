import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-300 via-purple-400 to-indigo-700 relative overflow-hidden">
      {/* Background Mountains */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#4f46e5" fillOpacity="0.6" d="M0,400 C400,300 800,500 1440,400 L1440,600 L0,600 Z" />
          <path fill="#6366f1" fillOpacity="0.5" d="M0,350 C500,250 900,450 1440,350 L1440,600 L0,600 Z" />
          <path fill="#818cf8" fillOpacity="0.4" d="M0,300 C600,200 1000,400 1440,300 L1440,600 L0,600 Z" />
        </svg>
      </div>
      {/* Birds */}
      <div className="absolute top-10 right-20 z-10">
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
          <path d="M0 10 Q5 0 10 10 Q15 20 20 10" stroke="#fff" strokeWidth="1" fill="none"/>
          <path d="M30 10 Q35 0 40 10 Q45 20 50 10" stroke="#fff" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-8 py-10 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg border border-white border-opacity-20">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Login</h2>
        <form>
          <div className="mb-5">
            <label className="block text-white text-opacity-80 mb-2" htmlFor="email">Email ID</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 rounded-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-12"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white opacity-70">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" stroke="none"/>
                  <path d="M4 4l8 8 8-8" />
                </svg>
              </span>
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-white text-opacity-80 mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-12"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white opacity-70">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center text-white text-opacity-80 text-sm">
              <input type="checkbox" className="form-checkbox rounded text-indigo-500 mr-2" />
              Remember me
            </label>
            <a href="#" className="text-indigo-200 text-sm hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-white bg-opacity-80 text-indigo-700 font-semibold text-lg shadow-md hover:bg-opacity-100 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-white text-opacity-80 text-sm">Don't have an account? </span>
          <a href="#" className="text-indigo-200 text-sm hover:underline">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;