import { getOnePostService, getPostService } from "./services.js";
import type { IPost } from "./types/index.types.js";

const getPosts = async () => {
  const response = await getPostService();
  const posts: IPost[] = await response.json();
  const rootElement = document.getElementById("root");
  if (rootElement && Array.isArray(posts) && posts[0]) {
    rootElement.innerHTML = posts[0].body;
  }
};

const getOnePost = async (id: number) => {
  const post: IPost = await getOnePostService(id);
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = post.body;
  }
};

setTimeout(() => {
  getOnePost(201);
}, 1000);

setTimeout(() => {
  getPosts();
}, 1000);
