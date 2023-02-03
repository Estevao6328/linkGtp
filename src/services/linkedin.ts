import axios from "axios";
import { Post } from "../http/interface/post";

export const linkedinAuth = axios.create({
  baseURL: "https://www.linkedin.com/oauth/v2",
});

const linkedinApi = axios.create({
  baseURL: "https://api.linkedin.com/v2",
  headers: {
    "X-Restil-Protocol-Version": "2.0.0",
  },
});

export const createPost = (text: string, auth: string) => {
  try {
    const post = new Post(text);

    linkedinApi
      .post("/ugcPosts", post.getContent(), { headers: { Authorization: `Bearer ${auth}` } })
      .then((data) => {
        console.log("post created on linkedin!");
      })
      .catch((err) => console.log(err));
  } catch (err) {}
};
