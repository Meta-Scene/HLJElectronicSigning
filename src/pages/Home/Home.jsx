// CloudLoungeWelcome.jsx  —— React 版（按你最新 Vue 代码等效）
// 资源路径一律以 ../../ 开头
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

// 背景与标题文案（标题这里直接用文字，不用图片）
import starBG   from "../../assets/star_background.png";

// 四张按钮底图
import bgGreen  from "../../assets/green_btn_bg.png";
import bgBlue1  from "../../assets/blue_btn_bg_1.png";
import bgBlue2  from "../../assets/blue_btn_bg_2.png";
import bgPink   from "../../assets/pink_btn_bg.png";

// 图标（文件名与路径按你的资源为准）
import icoRoam  from "../../assets/图片 7@2x.png";
import icoVideo from "../../assets/图片 8@2x.png";
import icoPolicy from "../../assets/图片 9@2x.png";
import icoSign  from "../../assets/图片 10@2x.png";

export default function CloudLoungeWelcome() {
  const nav = useNavigate();

  // 预加载与 resize（等价于 Vue 的 mounted / beforeUnmount）
  useEffect(() => {
    const preload = (src) => { const i = new Image(); i.src = src; };
    [starBG, bgGreen, bgBlue1, bgBlue2, bgPink, icoRoam, icoVideo, icoPolicy, icoSign].forEach(preload);

    const onResize = () => {
      // 背景 cover；此处留空即可，逻辑已由 CSS 处理
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleTitleClick = () => {
    // 你的交互
    // console.log("主标题被点击");
  };
  const handleSubtitleClick = () => {
    // console.log("副标题被点击");
  };

  return (
    <div className={styles.welcome}>
      {/* 星空背景 */}
      <div className={styles.welcomeBackground}>
        <div
          className={styles.starryBackground}
          style={{ backgroundImage: `url(${starBG})` }}
        />
      </div>

      {/* 标题区（使用文字版本） */}
      <div className={styles.titleSection}>
        <h1 className={styles.welcomeTitle} onClick={handleTitleClick}>
          欢迎来到云上会客厅
        </h1>
        <p className={styles.welcomeSubtitle} onClick={handleSubtitleClick}>
          赋能双鸭山:家底清,服务优,产业兴
        </p>
      </div>

      {/* 功能卡片 */}
      <div className={styles.featuresSection}>
        {/* 云上漫游 */}
        <button
          type="button"
          className={styles.featureImage}
          onClick={() => nav("/Roaming")}
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
