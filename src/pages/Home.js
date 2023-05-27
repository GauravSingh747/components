import React from "react";
import videoBg from "../assets/video-2.mp4";
import "./home.css";
import Scroll from "../topbar/Scroll";
const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>To my site.</p>
          <h1>Welcome</h1>
          <p>To my site.</p>
          <h1>Welcome</h1>
          <p>To my site.</p>
          <h1>Welcome</h1>
          <p>To my site.</p>
          <h1>Welcome</h1>
          <p>To my site.</p>
          <h1>Welcome</h1>
          <p>To my site.</p>
          <h1>Welcome</h1>
          <p>To my site.</p>
          <h1>Welcome</h1>
          <p>To my site.</p>
        </div>
      </div>
      <div className="text-5xl">
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
      </div>
    </div>
  );
};

export default Home;
