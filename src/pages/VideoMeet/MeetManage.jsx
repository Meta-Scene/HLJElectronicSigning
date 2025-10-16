import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import styles from './VideoMeet.module.css';

const MeetManage = () => {
  const nav = useNavigate();
  const cardItems = [
    { title: '今日会议数', data: 12, className: styles.carddata1 },
    { title: '进行中会议', data: 5, className: styles.carddata2 },
    { title: '已结束会议', data: 7, className: styles.carddata3 },
    { title: '待开始会议', data: 3, className: styles.carddata4 },
  ];

  const [statusFilter, setStatusFilter] = useState('全部');  // 默认状态为 "全部"
  const [searchQuery, setSearchQuery] = useState(''); // 存储搜索关键词

  const meetings = [
    { name: "产品设计评审会", host: "张经理", time: "2023-10-15 14:00", participants: 8, status: "进行中" },
    { name: "季度业务分析会", host: "王总监", time: "2023-10-16 09:30", participants: 12, status: "未开始" },
    { name: "客户需求沟通会", host: "李主管", time: "2023-10-14 10:00", participants: 5, status: "已结束" },
    { name: "技术方案讨论会", host: "刘工程师", time: "2023-10-13 15:30", participants: 7, status: "已结束" },
    { name: "项目进度汇报会", host: "赵经理", time: "2023-10-15 16:00", participants: 9, status: "进行中" }
  ];

  // 根据筛选条件和搜索关键词过滤会议
  const filteredMeetings = meetings.filter(meeting => {
    const matchesStatus = statusFilter === '全部' || meeting.status === statusFilter;
    const matchesSearch = meeting.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

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

      {/* Card Section */}
      <div className={styles.cardbox}>
        {cardItems.map((item, index) => (
          <div key={index} className={styles.cardItem}>
            <div className={styles.cardtitle}>{item.title}</div>
            <div className={item.className}>{item.data}</div>
          </div>
        ))}
      </div>

      <div className={styles.meetingCard}>
        <div className={styles.flexbox}>
          
          <div className={styles.meetingCardTitle}>会议列表</div>
          <div className={styles.flexbox}>
          <div className={styles.filterBox}>
            <select 
              className={styles.filterSelect} 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="全部">全部状态</option>
              <option value="进行中">进行中</option>
              <option value="未开始">未开始</option>
              <option value="已结束">已结束</option>
            </select>
          </div>

          {/* Search by name */}
          <div className={styles.searchBox}>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="搜索会议名称..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>会议名称</th>
              <th>主办方</th>
              <th>时间</th>
              <th>参会人数</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredMeetings.map((meeting, index) => (
              <tr key={index}>
                <td>{meeting.name}</td>
                <td>{meeting.host}</td>
                <td>{meeting.time}</td>
                <td>{meeting.participants}人</td>
                <td className={styles[meeting.status]}>{meeting.status}</td>
                <td>
                  {meeting.status === '进行中' || meeting.status === '未开始' ? (
                    <button className={styles.enterBtn}>进入会议</button>
                  ) : (
                    <button className={styles.viewRecordBtn}>查看记录</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetManage;
