import { useQuery } from "@tanstack/react-query";
import type { IPost } from "../user";
import { getPosts } from "./posts";

export const usePosts = () => {
  return useQuery<IPost[]>({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
};
