import React, { useState } from "react";
import { Button } from "antd";
import Avatar from "@/assets/avatar.jpg";
import "./index.css";

const Start: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <main className="start-container">
      <div>
          <img src={Avatar} className="user-avatar" alt="Avatar" />
      </div>
      <span className="start-words">人生如集市，众人在此相聚，却不久留；人生如客栈，路人在此歇脚，而后又走。</span>
    </main>
  );
};

export default Start;
