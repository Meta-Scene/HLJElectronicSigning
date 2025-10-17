// CloudLoungeWelcome.jsx  —— React 版本 + 路由跳转
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

// 背景 & 文案
import starBG from "../../assets/starBG.png";
import welcomeText from "../../assets/welcome_text.png";


// 四张按钮背景
import bgGreen from "../../assets/green_btn_bg.png";
import bgBlue1 from "../../assets/blue_btn_bg_1.png";
import bgBlue2 from "../../assets/blue_btn_bg_2.png";
import bgPink  from "../../assets/pink_btn_bg.png";

// 四个图标（按你的文件名替换）
import icoRoaming from "../../assets/图片 7@2x.png";
import icoVideo   from "../../assets/图片 8@2x.png";
import icoPolicy  from "../../assets/图片 9@2x.png";
import icoSign    from "../../assets/图片 10@2x.png";

// 文字精灵图（四段文字在一张图里）
import textSprite from "../../assets/图片 11@2x.png";

export default function CloudLoungeWelcome() {
  const nav = useNavigate();

  useEffect(() => {
    // 预加载
    const preload = (src) => { const i = new Image(); i.src = src; };
    [
      starBG, welcomeText,
      bgGreen, bgBlue1, bgBlue2, bgPink,
      icoRoaming, icoVideo, icoPolicy, icoSign,
      textSprite,
    ].forEach(preload);

    const onResize = () => {
      // 这里保留占位逻辑，背景尺寸已用 CSS cover 处理
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={styles.welcome}>
      {/* 星空背景 */}
      <div className={styles.welcomeBackground}>
        <div
          className={styles.starryBackground}
          style={{ backgroundImage: `url(${starBG})` }}
        />
      </div>

      {/* 标题 */}
      <div className={styles.titleSection}>
        <div className={styles.welcomeTextImage}>
          <img src={welcomeText} className={styles.welcomeTextImg} alt="欢迎来到云上会客厅" />
        </div>
      </div>

      {/* 功能图片 */}
      <div className={styles.featuresSection}>
        {/* 云上漫游 */}
        <button className={styles.featureImage} onClick={() => nav("/Roaming")} aria-label="云上漫游">
          <img src={bgGreen} className={styles.featureImg} alt="" />
          <div className={styles.featureContent}>
            <img src={icoRoaming} className={styles.featureIcon} alt="" />
            <div
              className={`${styles.featureTextImg} ${styles.textPart1}`}
              style={{ backgroundImage: `url(${textSprite})` }}
            />
          </div>
        </button>

        {/* 视频洽谈 */}
        <button className={styles.featureImage} onClick={() => nav("/MeetManage")} aria-label="视频洽谈">
          <img src={bgBlue1} className={styles.featureImg} alt="" />
          <div className={styles.featureContent}>
            <img src={icoVideo} className={styles.featureIcon} alt="" />
            <div
              className={`${styles.featureTextImg} ${styles.textPart2}`}
              style={{ backgroundImage: `url(${textSprite})` }}
            />
          </div>
        </button>

        {/* 政策兑付 */}
        <button className={styles.featureImage} onClick={() => nav("/PolicyPayment")} aria-label="政策兑付">
          <img src={bgBlue2} className={styles.featureImg} alt="" />
          <div className={styles.featureContent}>
            <img src={icoPolicy} className={styles.featureIcon} alt="" />
            <div
              className={`${styles.featureTextImg} ${styles.textPart3}`}
              style={{ backgroundImage: `url(${textSprite})` }}
            />
          </div>
        </button>

        {/* 电子签约 */}
        <button className={styles.featureImage} onClick={() => nav("/ESigning")} aria-label="电子签约">
          <img src={bgPink} className={styles.featureImg} alt="" />
          <div className={styles.featureContent}>
            <img src={icoSign} className={styles.featureIcon} alt="" />
            <div
              className={`${styles.featureTextImg} ${styles.textPart4}`}
              style={{ backgroundImage: `url(${textSprite})` }}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
