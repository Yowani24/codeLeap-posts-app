import { useState } from "react";
import { FiArrowRight, FiUser } from "react-icons/fi";

interface SignupProps {
  onSubmit: (username: string) => void;
}

export function Signup({ onSubmit }: SignupProps) {
  const [username, setUsername] = useState("");

  const isDisabled = username.trim().length === 0;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isDisabled) {
      onSubmit(username);
    }
  };

  return (
    <main className="fixed inset-0 flex items-center justify-center bg-[#F4F7FF] p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#7695EC]/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#A5B4FC]/10 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-125 bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-8 md:p-12 transition-all animate-in fade-in zoom-in duration-700">
        <header className="space-y-3 mb-10">
          <div className="w-12 h-12 bg-[#7695EC] rounded-2xl flex items-center justify-center shadow-lg shadow-[#7695EC]/20 mb-6">
            <span className="text-white font-black text-2xl">C</span>
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
            Welcome to
            <span className="text-[#7695EC]"> CodeLeap network!</span>
          </h1>
          <p className="text-gray-400 font-medium">
            Connect with developers around the world.
          </p>
        </header>

        <div className="space-y-8">
          <div className="space-y-3">
            <label
              htmlFor="username"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 ml-1"
            >
              <FiUser className="text-[#7695EC]" />
              Please enter your username
            </label>

            <div className="relative group">
              <input
                id="username"
                type="text"
                autoFocus
                placeholder="Ex: joaocosta"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-full bg-gray-50 rounded-2xl border-2 border-transparent px-6 py-4 text-gray-700 font-semibold placeholder-gray-300 focus:bg-white focus:border-[#7695EC]/30 focus:outline-none focus:ring-4 focus:ring-[#7695EC]/10 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              disabled={isDisabled}
              onClick={() => onSubmit(username)}
              className={`
                group relative flex items-center gap-3 px-10 py-4 rounded-2xl font-black text-sm tracking-widest transition-all duration-300
                ${
                  isDisabled
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-[#7695EC] text-white shadow-[0_10px_20px_rgba(118,149,236,0.3)] hover:shadow-[0_15px_25px_rgba(118,149,236,0.4)] hover:-translate-y-0.5 active:scale-95"
                }
              `}
            >
              ENTER
              <FiArrowRight
                className={`transition-transform duration-300 ${isDisabled ? "" : "group-hover:translate-x-1"}`}
                size={18}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
