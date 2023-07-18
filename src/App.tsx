import { useState } from "react";
import Avatar from "@/assets/avatar.jpg";
import { Button, ConfigProvider, theme } from "antd";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [customTheme, setCustomTheme] = useState({
    algorithm: theme.defaultAlgorithm, // 默认算法
  });

  return (
    <ConfigProvider theme={customTheme}>
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
      <Button
        type="primary"
        onClick={() => setCustomTheme({ algorithm: theme.darkAlgorithm })}
      >
        Button
      </Button>
    </ConfigProvider>
  );
}

export default App;
