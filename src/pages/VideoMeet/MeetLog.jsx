import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import styles from './VideoMeet.module.css';

const MeetLog = () => {
  const nav = useNavigate();
  

  return (
    <div>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <div className={styles.topNavLeft}>
          <div className={styles.title}>视频洽谈系统</div>
          <div onClick={() => nav("/MeetManage")} className={styles.subtitle}>会议管理</div>
          <div onClick={() => nav("/CreateMeet")} className={styles.subtitle}>创建会议</div>
          <div onClick={() => nav("/MeetLog")} className={styles.subtitle}>会议记录</div>
        </div>
        <div className={styles.topNavRight}>
          <div className={styles.header}></div>
          <div className={styles.userRole}>管理员</div>
        </div>
      </div>

      {/* ===== 会议记录卡片 ===== */}
<div className={styles.scrollArea}>
  <div className={styles.logCard}>
    <div className={styles.logHeader}>
      <div className={styles.meetingCardTitle}>会议记录</div>

      <div className={styles.logTools}>
        <input
          className={styles.logSearch}
          placeholder="搜索会议记录..."
        />
        <select className={styles.logSelect}>
          <option>全部类型</option>
        </select>
        <button className={styles.logFilterBtn}>筛选</button>
      </div>
    </div>

    <table className={styles.table}>
      <thead>
        <tr>
          <th>会议名称</th>
          <th>会议时间</th>
          <th>主持人</th>
          <th>参会人数</th>
          <th>记录人员</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>产品设计评审会</td>
          <td>2023-10-15 14:00</td>
          <td>张经理</td>
          <td>8人</td>
          <td>李助理</td>
          <td><button className={styles.viewRecordBtn}>查看记录</button></td>
        </tr>
        <tr className={styles.rowAlt}>
          <td>客户需求沟通会</td>
          <td>2023-10-14 10:00</td>
          <td>王总监</td>
          <td>5人</td>
          <td>刘助理</td>
          <td><button className={styles.viewRecordBtn}>查看记录</button></td>
        </tr>
        <tr>
          <td>技术方案讨论会</td>
          <td>2023-10-13 15:30</td>
          <td>李主管</td>
          <td>7人</td>
          <td>王助理</td>
          <td><button className={styles.viewRecordBtn}>查看记录</button></td>
        </tr>
        <tr className={styles.rowAlt}>
          <td>项目进度汇报会</td>
          <td>2023-10-12 16:00</td>
          <td>赵经理</td>
          <td>9人</td>
          <td>张助理</td>
          <td><button className={styles.viewRecordBtn}>查看记录</button></td>
        </tr>
        <tr>
          <td>市场策略研讨会</td>
          <td>2023-10-11 09:00</td>
          <td>孙总监</td>
          <td>6人</td>
          <td>赵助理</td>
          <td><button className={styles.viewRecordBtn}>查看记录</button></td>
        </tr>
      </tbody>
    </table>

    <div className={styles.pager}>
      <button className={styles.pagerBtn}>上一页</button>
      <button className={`${styles.pagerBtn} ${styles.pagerNum} ${styles.pagerActive}`}>1</button>
      <button className={`${styles.pagerBtn} ${styles.pagerNum}`}>2</button>
      <button className={`${styles.pagerBtn} ${styles.pagerNum}`}>3</button>
      <button className={styles.pagerBtn}>下一页</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default MeetLog;
