import type { IPost } from "./types/index.types";

const DATA_URL = "/04-codeyad-ts/data/index.json";

export const getPostService = () => {
  return fetch(DATA_URL);
};

export const getOnePostService = async (postId: number) => {
  try {
    const response = await fetch(DATA_URL);
    
    const posts = await response.json();
    const selectedpost = posts.find((p: IPost) => p.id === postId);
    return selectedpost;

  } catch (error: any) {
    console.error("Error fetching post by ID:", error);
    return {
      ok: false,
      json: () =>
        Promise.resolve({ error: `Failed to fetch data: ${error.message}` }),
    };
  }
};
