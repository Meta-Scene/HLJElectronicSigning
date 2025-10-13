import React from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>项目详情</h1>
      <p>当前项目 ID：{id}</p>
    </div>
  );
}
