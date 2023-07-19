import React, { useState } from "react";
import { Button } from "antd";
import Avatar from "@/assets/avatar.jpg";

const Start: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Avatar} className="user-avatar" alt="Avatar" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default Start;
