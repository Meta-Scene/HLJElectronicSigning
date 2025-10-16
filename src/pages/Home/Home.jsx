import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

import bgStars from "../../assets/starBG.png";
import icRoaming from "../../assets/RoamingClouds.png";
import icVideo from "../../assets/VideoChat.png";
import icSign from "../../assets/ElectronicSigning.png";
import icPolicy from "../../assets/PolicyFulfillment.png";

const cards = [
  { label: "云上漫游", path: "/Roaming",    grad: "g1", icon: icRoaming },
  { label: "视频洽谈", path: "/VideoMeet", grad: "g2", icon: icVideo },
  { label: "电子签约", path: "/ESigning",    grad: "g3", icon: icSign },
  { label: "政策兑付", path: "/Policy",      grad: "g4", icon: icPolicy },
];

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className={styles.hero}>
      <img src={bgStars} className={styles.bgStars} alt="" />
      <div className={styles.inner}>
        <h1 className={styles.title}>欢迎来到云上会客厅</h1>
        <p className={styles.subtitle}>赋能双鸭山：家底清，服务优，产业兴</p>
        <div className={styles.grid}>
          {cards.map(c => (
            <button
              key={c.path}
              type="button"
              className={`${styles.card} ${styles[c.grad]}`}
              onClick={() => nav(c.path)}
              aria-label={c.label}
            >
              <img className={styles.iconImg} src={c.icon} alt="" />
              <span className={styles.text}>{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
