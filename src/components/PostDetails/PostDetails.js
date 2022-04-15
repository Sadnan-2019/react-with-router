import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div>
      <h2>This is post Details....{postId}</h2>
      <h4>Post Name:{post.title}</h4>
      <p>Post Body:{post.body}</p>
    </div>
  );
};

export default PostDetails;
