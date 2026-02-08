export const PostCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden animate-pulse">
      <header className="h-16 bg-gray-200 flex items-center justify-between px-8">
        <div className="h-6 bg-gray-300 rounded-md w-1/2" />
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-xl" />
          <div className="w-10 h-10 bg-gray-300 rounded-xl" />
        </div>
      </header>

      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between py-3 border-b border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="h-4 bg-gray-200 rounded w-24" />
          </div>
          <div className="h-6 bg-gray-100 rounded-full w-20" />
        </div>

        <div className="space-y-3">
          <div className="h-4 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-100 rounded w-3/4" />
        </div>
      </div>
    </div>
  );
};
