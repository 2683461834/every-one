import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import BasicLayout from "./view/layout/basic-layout";
import Start from "./view/start";

function App() {
  const [customTheme, setCustomTheme] = useState({
    algorithm: theme.defaultAlgorithm, // 默认算法
  });

  return (
    <ConfigProvider theme={customTheme}>
      
      <Start />
    </ConfigProvider>
  );
}

export default App;
