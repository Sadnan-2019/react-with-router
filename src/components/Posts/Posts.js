import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h1>This is posts side ...{posts.length} </h1>

      {posts.map((allpost) => (
        <Link key={allpost.id} to={`/posts/${allpost.id}`}>
          {allpost.id}
        </Link>
      ))}
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
