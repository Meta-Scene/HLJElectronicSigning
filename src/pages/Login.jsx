import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const handleLogin = () => {
    localStorage.setItem("token", "1"); // 模拟登录
    const redirectTo = params.get("from") || "/dashboard";
    navigate(redirectTo, { replace: true });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>登录</h1>
      <button onClick={handleLogin}>点击登录</button>
    </div>
  );
}
