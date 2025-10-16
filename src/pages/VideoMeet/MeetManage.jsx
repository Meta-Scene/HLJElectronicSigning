import React from 'react';
import styles from './VideoMeet.module.css';

const MeetManage = () => {
  return (
    <div>
        <div className={styles.topNav} >
            <div className={styles.topNavLeft}>
                <div className={styles.title}>视频洽谈系统</div>
                <div className={styles.subtitle}>会议管理</div>
                <div className={styles.subtitle}>创建会议</div>
                <div className={styles.subtitle}>会议管理</div>
            </div>
            <div className={styles.topNavRight}>
                <div className={styles.hearder} />
                <div>管理员</div>
            </div>
        </div>
    </div>
  );
}

export default MeetManage;
