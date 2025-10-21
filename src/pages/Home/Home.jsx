// CloudLoungeWelcome.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

import starBG   from "../../assets/star_background.png";
import bgGreen  from "../../assets/green_btn_bg.png";
import bgBlue1  from "../../assets/blue_btn_bg_1.png";
import bgBlue2  from "../../assets/blue_btn_bg_2.png";
import bgPink   from "../../assets/pink_btn_bg.png";
import icoRoam  from "../../assets/图片 7@2x.png";
import icoVideo from "../../assets/图片 8@2x.png";
import icoPolicy from "../../assets/图片 9@2x.png";
import icoSign  from "../../assets/图片 10@2x.png";

export default function CloudLoungeWelcome() {
  const nav = useNavigate();

  useEffect(() => {
    const preload = (src) => { const i = new Image(); i.src = src; };
    [starBG, bgGreen, bgBlue1, bgBlue2, bgPink, icoRoam, icoVideo, icoPolicy, icoSign].forEach(preload);
    const onResize = () => {};
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleTitleClick = () => {};
  const handleSubtitleClick = () => {};

  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeBackground}>
        <div
          className={styles.starryBackground}
          style={{ backgroundImage: `url(${starBG})` }}
        />
      </div>

      <div className={styles.titleSection}>
        <h1 className={styles.welcomeTitle} onClick={handleTitleClick}>
          欢迎来到云上会客厅
        </h1>
        <p className={styles.welcomeSubtitle} onClick={handleSubtitleClick}>
          家底清,服务优,产业兴
        </p>
      </div>

      <div className={styles.featuresSection}>
        {/* 云上漫游 —— 改为新标签页打开 127.0.0.1:8888 */}
        <button
          type="button"
          className={styles.featureImage}
          onClick={() => window.open("http://127.0.0.1:8888", "_blank", "noopener,noreferrer")}
          aria-label="云上漫游"
        >
          <img src={bgGreen} alt="" className={styles.featureImg} />
          <div className={styles.featureContent}>
            <img src={icoRoam} alt="" className={styles.featureIcon} />
            <div className={styles.featureText}>云上漫游</div>
          </div>
        </button>

        {/* 视频洽谈 */}
        <button
          type="button"
          className={styles.featureImage}
          onClick={() => nav("/MeetManage")}
          aria-label="视频洽谈"
        >
          <img src={bgBlue1} alt="" className={styles.featureImg} />
          <div className={styles.featureContent}>
            <img src={icoVideo} alt="" className={styles.featureIcon} />
            <div className={styles.featureText}>视频洽谈</div>
          </div>
        </button>

        {/* 政策兑付 */}
        <button
          type="button"
          className={styles.featureImage}
          onClick={() => nav("/PolicyPayment")}
          aria-label="政策兑付"
        >
          <img src={bgBlue2} alt="" className={styles.featureImg} />
          <div className={styles.featureContent}>
            <img src={icoPolicy} alt="" className={styles.featureIcon} />
            <div className={styles.featureText}>政策兑付</div>
          </div>
        </button>

        {/* 电子签约 */}
        <button
          type="button"
          className={styles.featureImage}
          onClick={() => nav("/ESigning")}
          aria-label="电子签约"
        >
          <img src={bgPink} alt="" className={styles.featureImg} />
          <div className={styles.featureContent}>
            <img src={icoSign} alt="" className={styles.featureIcon} />
            <div className={styles.featureText}>电子签约</div>
          </div>
        </button>
      </div>
    </div>
  );
}
