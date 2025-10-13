import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleToAbout = () => {
    navigate("/about");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>欢迎来到首页</h1>
      <p>这里是 HLJElectronicSigning 应用的主页。</p>
      <button onClick={handleToAbout}>前往 About 页面</button>
    </div>
  );
}
