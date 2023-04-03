import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";

const VideoCompo = () => {
  return (
    <div>
      <Image
        src={
          "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default VideoCompo;
