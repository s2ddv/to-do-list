import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 to-indigo-100">
      <div className="bg-white w-[400px] p-10 rounded-2xl shadow-2xl">

        {}
        <div className="flex items-center mb-8">
          <span className="w-4 h-4 bg-indigo-600 skew-x-[-20deg] mr-2"></span>
          <span className="text-lg font-semibold">Invooce</span>
        </div>

        {}
        <h2 className="mb-1 text-2xl font-semibold text-center">Login</h2>
        <p className="mb-6 text-sm text-center text-gray-500">
          Hi, Welcome back 👋
        </p>

        {}
        <button className="flex items-center justify-center w-full py-2 mb-4 transition border border-gray-300 rounded-lg hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-4 mr-2"
          />
          Login with Google
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6 text-xs text-gray-400">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="mx-3">or Login with Email</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {}
        <form className="flex flex-col">
          {}
          <label className="mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="E.g. johndoe@email.com"
            className="px-3 py-2 mb-4 transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />

          {}
          <label className="mb-1 text-sm font-medium">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-3 py-2 transition border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              👁
            </button>
          </div>

          {}
          <div className="flex items-center justify-between mb-6 text-xs">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="accent-indigo-600" />
              Remember Me
            </label>
            <span className="text-indigo-600 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {}
          <button className="py-2 font-medium text-white transition bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700">
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="mt-6 text-sm text-center">
          Not registered yet?{" "}
          <span className="font-medium text-indigo-600 cursor-pointer hover:underline">
            Create an account ↗
          </span>
        </p>

      </div>
    </div>
  );
}