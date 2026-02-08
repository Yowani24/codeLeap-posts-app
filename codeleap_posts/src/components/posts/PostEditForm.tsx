import { FiAlignLeft, FiSend, FiType } from "react-icons/fi";
import type { IPost } from "../../service/data/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { updatePost } from "../../service/data/posts/posts";

interface PostEditFormProps {
  data: IPost;
}

export const PostEditForm = ({ data }: PostEditFormProps) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<IPost>({
    defaultValues: {
      title: data.title,
      content: data.content,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: IPost) => updatePost(String(data.id), formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post updated successfully!");
    },
    onError: (error: Error) => {
      toast.error(
        error.message || "An error occurred while updating the post.",
      );
    },
  });

  const onSubmit = (formData: IPost) => {
    mutate(formData);
  };

  const isButtonDisabled = !isValid || !isDirty || isPending;

  return (
    <section className="relative group backdrop-blur-xl bg-[#7695ec25] rounded-3xl border border-white p-4 transition-all duration-500 overflow-hidden">
      <div className="relative">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("title", { required: true })}
              className="w-full bg-gray-50/50 rounded-2xl border-2 border-[#7695EC]/15 px-5 py-3.5 text-gray-700 focus:bg-white focus:border-[#7695EC]/30 focus:outline-none focus:ring-4 focus:ring-[#7695EC]/10 transition-all duration-300"
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
              {...register("content", { required: true })}
              className="w-full bg-gray-50/50 rounded-2xl border-2 border-[#7695EC]/15 px-5 py-3.5 text-gray-700 focus:bg-white focus:border-[#7695EC]/30 focus:outline-none focus:ring-4 focus:ring-[#7695EC]/10 transition-all duration-300 resize-none"
            />
          </div>

          <div className="flex justify-end items-center gap-4">
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`group/btn relative flex items-center gap-2 bg-[#7695EC] text-white font-bold py-3 px-10 rounded-2xl transition-all duration-300 overflow-hidden
                ${isButtonDisabled ? "opacity-40 grayscale" : "hover:bg-[#5d7cd1] active:scale-95 shadow-lg shadow-[#7695EC]/20"}
              `}
            >
              {isPending ? (
                "Updating..."
              ) : (
                <>
                  <span className="relative z-10">Update Post</span>
                  <FiSend
                    className={`relative z-10 ${isButtonDisabled ? "" : "group-hover/btn:-translate-y-1 transition-transform duration-300"}`}
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
