import React, { useState } from "react";
import Avatar from "@/assets/default-avatar.svg";
import "./index.css";
import { Link } from "react-router-dom";
import ThreeScene from "@/components/three-scene"

const Start: React.FC = () => {
  
  return (
    <main className="start-container">
      <div id="avatarContainer">
      <ThreeScene />
        <Link to="/home">
          <img src={Avatar} className="user-avatar" alt="Avatar" />
        </Link>
      </div>
      <span className="start-words">
        人生如集市，众人在此相聚，却不久留；人生如客栈，路人在此歇脚，而后又走。
      </span>
    </main>
  );
};

export default Start;
