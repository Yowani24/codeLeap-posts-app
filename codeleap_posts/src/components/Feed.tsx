import { MdLogout } from "react-icons/md";
import { PostCard } from "./posts/PostCard";
import { PostForm } from "./posts/PostForm";
import { usePosts } from "../service/data/posts/queryData";
import { PostCardSkeleton } from "./posts/PostCardSkeleton";
import { useState } from "react";

interface FeedProps {
  username: string;
  logoutFn: () => void;
}

const TABS = [
  { id: 1, label: "All" },
  { id: 2, label: "My Posts" },
];
export default function Feed({ username, logoutFn }: FeedProps) {
  // use local storage to keep track of current tab
  const [currentTab, setCurrentTab] = useState(
    Number(localStorage.getItem("currentTab")) || 1,
  );
  const { data: posts, isLoading } = usePosts();

  //filter posts based on current tab
  const filteredPosts = posts?.filter((post) => {
    if (currentTab === 1) {
      return true;
    }
    return post.username.toLowerCase() === username.toLowerCase();
  });
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
          <div className="rounded-lg bg-gray-200 flex items-center justify-center gap-4 p-2">
            {/* consider local storage to keep track of current tab */}
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setCurrentTab(tab.id);
                  localStorage.setItem("currentTab", String(tab.id));
                }}
                className={`px-4 py-1 rounded-lg text-sm font-bold ${
                  tab.id === currentTab
                    ? "bg-[#7695EC] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {tab.label} ({tab.id === 1 && posts?.length}
                {tab.id === 2 &&
                  posts?.filter((post) => post.username === username).length}
                )
              </button>
            ))}
          </div>
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <PostCardSkeleton key={i} />
            ))
          ) : filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((data) => (
              <PostCard
                key={data.id}
                data={data}
                currentloggedInUser={username}
              />
            ))
          ) : (
            <div className="text-center text-gray-500">
              There are no posts to show
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
