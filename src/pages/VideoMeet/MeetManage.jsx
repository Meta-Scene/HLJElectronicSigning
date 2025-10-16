import React from 'react';
import styles from './VideoMeet.module.css';

const MeetManage = () => {
  return (
    <div>
      <div className={styles.topNav}>
        <div className={styles.topNavLeft}>
          <div className={styles.title}>视频洽谈系统</div>
          <div className={styles.subtitle}>会议管理</div>
          <div className={styles.subtitle}>创建会议</div>
          <div className={styles.subtitle}>会议记录</div>
        </div>
        <div className={styles.topNavRight}>
          <div className={styles.header}></div>
          <div className={styles.userRole}>管理员</div>
        </div>
      </div>
      <div className={styles.cardbox}>
        <div className={styles.cardItem}>
            <div className={styles.cardtitle}>今日会议数</div>
            <div className={styles.carddata1}>12</div>
        </div>
        <div className={styles.cardItem}>
            <div className={styles.cardtitle}>进行中会议</div>
            <div className={styles.carddata2}>5</div>
        </div>
        <div className={styles.cardItem}>
            <div className={styles.cardtitle}>已结束会议</div>
            <div className={styles.carddata3}>7</div>
        </div>
        <div className={styles.cardItem}>
            <div className={styles.cardtitle}>待开始会议</div>
            <div className={styles.carddata4}>3</div>
        </div>

      </div>
    </div>
  );
}

export default MeetManage;
