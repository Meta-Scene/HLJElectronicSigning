import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './VideoMeet.module.css';

const CreateMeet = () => {
  const nav = useNavigate();

  return (
    <div>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <div className={styles.topNavLeft}>
          < div className={styles.title}>视频洽谈系统</div>
            <div onClick={() => nav("/MeetManage")} className={styles.subtitle}>会议管理</div>
            <div onClick={() => nav("/CreateMeet")} className={styles.subtitle}>创建会议</div>
            <div onClick={() => nav("/MeetLog")} className={styles.subtitle}>会议记录</div>
        </div>
        <div className={styles.topNavRight}>
          <div className={styles.header}></div>
          <div className={styles.userRole}>管理员</div>
        </div>
      </div>
    </div>
  );
};

export default CreateMeet;
