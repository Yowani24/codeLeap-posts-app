import { AxiosError } from "axios";
import { api } from "../../../components/utils/axios";
import type { IPost } from "../user";

export const createPost = async (data: IPost) => {
  try {
    const response = await api.post("/", data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const message =
        error.response.data?.message ||
        `Request failed with status ${error.response.status}`;
      throw new Error(message);
    }

    throw new Error(
      "An error occurred while creating the post. Please check your network connection.",
    );
  }
};

export async function updatePost(id: string, data: IPost) {
  try {
    const response = await api.patch(`${id}/`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError) {
      const message =
        error.response?.data?.message ||
        `Request failed with status ${error.response?.status}`;
      throw new Error(message);
    }
  }
}

export async function getPosts() {
  try {
    const response = await api.get("/");
    return response.data.results;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function deletePost(id: string) {
  try {
    const response = await api.delete(`${id}/`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
