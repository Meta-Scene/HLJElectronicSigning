import React from 'react';
import styles from './VideoMeet.module.css';

const MeetManage = () => {
  const cardItems = [
    { title: '今日会议数', data: 12, className: styles.carddata1 },
    { title: '进行中会议', data: 5, className: styles.carddata2 },
    { title: '已结束会议', data: 7, className: styles.carddata3 },
    { title: '待开始会议', data: 3, className: styles.carddata4 },
  ];

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
        {cardItems.map((item, index) => (
          <div key={index} className={styles.cardItem}>
            <div className={styles.cardtitle}>{item.title}</div>
            <div className={item.className}>{item.data}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetManage;
