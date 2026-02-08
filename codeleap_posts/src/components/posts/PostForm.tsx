import { FiSend, FiType, FiAlignLeft } from "react-icons/fi";

export const PostForm = () => {
  return (
    <section className="relative group backdrop-blur-xl bg-[#7695ec25] rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(118,149,236,0.1)] overflow-hidden">
      <div className="relative">
        <header className="mb-4">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            What's on your mind?
            <span className="w-2 h-2 bg-[#7695EC] rounded-full animate-pulse" />
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Share your thoughts with the CodeLeap community.
          </p>
        </header>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 ml-1"
            >
              <FiType className="text-[#7695EC]" /> Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Give it a catchy name..."
              className="w-full bg-gray-50/50 rounded-2xl border-2 border-[#7695EC]/15 px-5 py-3.5 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-[#7695EC]/30 focus:outline-none focus:ring-4 focus:ring-[#7695EC]/10 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="content"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 ml-1"
            >
              <FiAlignLeft className="text-[#7695EC]" /> Content
            </label>
            <textarea
              id="content"
              rows={4}
              placeholder="Write your story here..."
              className="w-full bg-gray-50/50 rounded-2xl border-2 border-[#7695EC]/15 px-5 py-3.5 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-[#7695EC]/30 focus:outline-none focus:ring-4 focus:ring-[#7695EC]/10 transition-all duration-300 resize-none"
            />
          </div>

          <div className="flex justify-end items-center gap-4">
            <button
              type="submit"
              className="group/btn relative flex items-center gap-2 bg-[#7695EC] hover:bg-[#5d7cd1] text-white font-bold py-3 px-10 rounded-2xl transition-all duration-300 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Create</span>
              <FiSend className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
