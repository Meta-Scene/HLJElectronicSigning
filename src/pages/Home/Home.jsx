import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const actions = [
  { label: "云上漫游", path: "/Roaming" },
  { label: "视频洽谈", path: "/Negotiation" },
  { label: "电子签约", path: "/ESigning" },
  { label: "政策兑付", path: "/Policy" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper} aria-labelledby="page-title">
      <header className={styles.header}>
        <h1 id="page-title" className={styles.title}>欢迎来到云上会客厅</h1>
        <p className={styles.subtitle}>赋能双鸭山：家底清，服务优，产业兴</p>
      </header>

      <div className={styles.grid} role="group" aria-label="功能入口">
        {actions.map(({ label, path }) => (
          <button
            key={path}
            type="button"
            className={styles.card}
            onClick={() => navigate(path)}
          >
            <span className={styles.cardText}>{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
