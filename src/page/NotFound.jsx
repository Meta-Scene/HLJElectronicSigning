import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: 20 }}>
      <h1>404 - 页面不存在</h1>
      <p>抱歉，您访问的页面未找到。</p>
      <Link to="/">返回首页</Link>
    </div>
  );
}
