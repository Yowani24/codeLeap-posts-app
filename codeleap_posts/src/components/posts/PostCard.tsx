import { FiEdit3, FiTrash2, FiClock, FiUser } from "react-icons/fi";
import { TimeFormat } from "../utils/TimeFormat";
import { CustomModal } from "../CustomModal";
import { useState } from "react";
import { PostEditForm } from "./PostEditForm";
import { deletePost } from "../../service/data/posts/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface IPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

interface PostCardProps {
  data: IPost;
  currentloggedInUser: string;
}

export const PostCard = ({ data, currentloggedInUser }: PostCardProps) => {
  const isAuthor =
    data.username.toLowerCase() === currentloggedInUser.toLowerCase();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const handleDeletePost = useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("Post deleted successfully!");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  if (isEditModalOpen) {
    return (
      <CustomModal
        title="Edit Post"
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
      >
        <PostEditForm data={data} />
      </CustomModal>
    );
  }

  if (isDeleteModalOpen) {
    return (
      <CustomModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Are you sure you want to delete this item?"
        maxWidth="max-w-[660px]"
      >
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => setDeleteModalOpen(false)}
            className="px-8 py-2.5 border-2 border-gray-200 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDeletePost.mutate(String(data.id))}
            className="px-8 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-500/20 transition-all active:scale-95"
          >
            Delete
          </button>
        </div>
      </CustomModal>
    );
  }

  return (
    <article className="group relative bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 overflow-hidden">
      <header className="relative h-16 bg-[#7695EC] flex items-center justify-between px-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <h2 className="relative z-10 font-semibold text-xl tracking-tight truncate max-w-[70%]">
          {data.title}
        </h2>

        {isAuthor && (
          <div className="relative z-10 flex items-center gap-2">
            <button
              onClick={() => setDeleteModalOpen(true)}
              className="p-2 bg-white/10 hover:bg-red-500/80 hover:scale-110 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10"
              aria-label="Excluir post"
            >
              <FiTrash2 size={16} />
            </button>
            <button
              onClick={() => setEditModalOpen(true)}
              className="p-2 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10"
              aria-label="Editar post"
            >
              <FiEdit3 size={16} />
            </button>
          </div>
        )}
      </header>

      <div className="p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-gray-50">
          <div className="flex items-center gap-2 group/user cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#7695EC]/10 flex items-center justify-center text-[#7695EC]">
              <FiUser size={16} />
            </div>
            <span className="text-sm font-bold text-gray-400 group-hover/user:text-[#7695EC] transition-colors">
              @{data.username}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium bg-gray-50 px-3 py-1.5 rounded-full">
            <FiClock size={14} className="text-[#7695EC]" />
            <time dateTime={data.created_datetime}>
              {TimeFormat(data.created_datetime)}
            </time>
          </div>
        </div>

        <p className="text-gray-600 leading-[1.8] text-base font-medium selection:bg-[#7695EC]/10">
          {data.content}
        </p>
      </div>

      <div className="h-1 w-0 group-hover:w-full bg-[#7695EC]/20 transition-all duration-700" />
    </article>
  );
};
