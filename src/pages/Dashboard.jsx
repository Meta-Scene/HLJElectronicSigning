import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>仪表盘</h1>
      <p>这里是登录后才能访问的内容。</p>
      <button onClick={handleLogout}>退出登录</button>
    </div>
  );
}
