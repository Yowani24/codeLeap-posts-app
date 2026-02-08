import { MdLogout } from "react-icons/md";
import { PostCard } from "./posts/PostCard";
import { PostForm } from "./posts/PostForm";
import { usePosts } from "../service/data/posts/queryData";
import { PostCardSkeleton } from "./posts/PostCardSkeleton";

interface FeedProps {
  username: string;
  logoutFn: () => void;
}

export default function Feed({ username, logoutFn }: FeedProps) {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="bg-[#DDDDDD] min-h-screen flex justify-center px-2 sm:px-4">
      <div className="w-full max-w-3xl lg:max-w-4xl bg-white space-y-4 sm:space-y-6">
        <header className="h-16 sm:h-20 flex items-center justify-between bg-[#7695EC] px-4 sm:px-6 md:px-10 shadow-md">
          <h1 className="text-lg sm:text-[22px] font-bold text-white tracking-tight">
            CodeLeap Network
          </h1>

          <div className="flex items-center gap-3 sm:gap-6">
            <span className="text-white font-medium hidden sm:block">
              <span className="font-bold">{username}</span>
            </span>

            <button
              onClick={logoutFn}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg font-bold transition-all active:scale-95 border border-white/20"
            >
              <MdLogout size={14} />
              <span className="hover:text-red-200 transition-all hidden sm:inline">
                Logout
              </span>
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-4 px-3 sm:px-6 pb-6">
          <PostForm username={username} />

          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <PostCardSkeleton key={i} />
              ))
            : posts?.map((data) => (
                <PostCard
                  key={data.id}
                  data={data}
                  currentloggedInUser={username}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
