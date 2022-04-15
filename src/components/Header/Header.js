import React from "react";
// import { Link } from 'react-router-dom';
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <nav
        className="d-flex justify-content-center  "
        style={{
          backgroundColor: "gray",
          height: "80px",
          alignItems: "center",
        }}
      >
        {/* <a href="/about">About</a> */}
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/countries">Countries</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
