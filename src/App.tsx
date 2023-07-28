import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx"
import BasicLayout from "./view/layout/basic-layout";
import ErrorPage from './view/error/error-page.tsx'
import Start from "./view/start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <BasicLayout />,
    children: [
      {
        path: "/home",
        element: <Root />,
      },
    ]
  }
  
]);

function App() {
  const [customTheme, setCustomTheme] = useState({
    algorithm: theme.defaultAlgorithm, // 默认算法
  });

  return (
    <ConfigProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
