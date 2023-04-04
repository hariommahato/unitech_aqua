import React from "react";
import VideoCompo from "../Video";
import Blog from "../Blog";

const HomeRightSection = () => {
  return (
    <div>
      <div style={{
        width:"100%",
        height:"100%"
      }}>
        <VideoCompo />
        <Blog />
      </div>
    </div>
  );
};

export default HomeRightSection;
