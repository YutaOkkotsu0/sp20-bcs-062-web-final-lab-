import React from "react";
import "./App.css";
import CARD from "./Components/CARD";

import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get("https://dummyjson.com/docs/posts");
      console.log(res.data.posts);
      setPosts(res.data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <CARD
          id={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

export default Home;
