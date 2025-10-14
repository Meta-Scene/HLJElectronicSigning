import React from "react";
import {
  createBrowserRouter,
  redirect
} from "react-router-dom";

// 页面组件
import App from "./pages/App";
import Home from "./pages/Home/Home";
import ESigningGVM from "./pages/ESigning/ESigningGVM";
import ESigningPark from "./pages/ESigning/ESigningPark";
import ESigningCorp from "./pages/ESigning/ESigningCorp";




import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

// 模拟权限判断
const isAuthed = () => !!localStorage.getItem("token");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,      // 顶层布局
    children: [
      { index: true, element: <Home /> },  // 默认主页
      // { path: "ESigning", element: <ESigningPark /> },
      // { path: "ESigning", element: <ESigningGVM /> },
      { path: "ESigning", element: <ESigningCorp /> },

      { path: "about", element: <About /> },

      // 动态参数页 /project/123
      { path: "project/:id", element: <Project /> },

      // 登录页
      { path: "login", element: <Login /> },

      // 受保护路由
      {
        path: "dashboard",
        loader: () => {
          if (!isAuthed()) {
            throw redirect("/login?from=/dashboard");
          }
          return null;
        },
        element: <Dashboard />,
      },

      // 通配符匹配 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
