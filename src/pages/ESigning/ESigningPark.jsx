// src/pages/ESigningPark/ESigningPark.jsx
import React, { useMemo } from "react";
import styles from "../ESigning/ESigning.module.css";
import { useNavigate } from "react-router-dom";

const rows = [
  { no: "ZS20250901", name: "智能制造产业园入驻协议", status: "待企业签署" },
  { no: "ZS20250822", name: "科技创新孵化合作协议", status: "待园区签署" },
  { no: "ZS20250910", name: "高端装备制造合作框架协议", status: "待审批" },
  { no: "ZS20250805", name: "生物医药产业合作协议", status: "已完成" },
];

export default function ESigningPark() {
  const nav = useNavigate();
  const statusAction = useMemo(
    () => ({
      待企业签署: "发送提醒",
      待园区签署: "签署",
      待审批: "查看详情",
      已完成: "下载存证",
    }),
    []
  );

  return (
    <div className={styles.shell}>
      {/* 顶栏 */}
      <header className={styles.topbar}>
        <div className={styles.brand}>电子签约与存证系统 - 园区端</div>
        <div className={styles.user}>园区管理员</div>
      </header>

      <div className={styles.body}>
        {/* 侧栏 */}
        <aside className={styles.sidebar}>
          <div className={styles.menuItemActive}>招商合同</div>
          <div className={styles.menuItem}>模板维护</div>
          <div className={styles.menuItem}>合同管理</div>
          <div className={styles.menuItem}>存证查询</div>
        </aside>

        {/* 主区 */}
        <main className={styles.main}>
          <h2 className={styles.pageTitle}>招商合同管理</h2>

          {/* 顶部筛选 + 搜索（园区端 Tabs） */}
          <section className={`${styles.toolbar} ${styles.toolbarPark}`}>
            <div className={styles.tabs}>
              <button className={`${styles.tab} ${styles.tabActive}`}>全部</button>
              <button className={styles.tab}>我发起</button>
              <button className={styles.tab}>导出签约列表</button>
            </div>
                <div className={styles.rightOpsPark}>
                    <select className={styles.select}>
                    <option>全部状态</option>
                    <option>待企业签署</option>
                    <option>待园区签署</option>
                    <option>待审批</option>
                    <option>已完成</option>
                    </select>
                    <input className={styles.search} placeholder="搜索企业名称" />
                    <button className={styles.searchBtn} aria-label="搜索" />
                </div>
          </section>

          {/* 列表 */}
          <section className={styles.tableWrap}>
            <div className={`${styles.row} ${styles.rowHead}`}>
              <div>合同编号</div>
              <div>合同名称</div>
              <div>状态</div>
              <div className={styles.colActions}>操作</div>
            </div>

            {rows.map((r) => (
              <div key={r.no} className={styles.row}>
                <div>{r.no}</div>
                <div className={styles.ellipsis}>{r.name}</div>
                <div>
                  <span className={`${styles.badge} ${styles[`badge_${r.status}`]}`}>
                    {r.status}
                  </span>
                </div>
                <div className={styles.colActions}>
                  <button className={styles.linkBtn}>查看</button>
                  <button
                    className={styles.primaryBtn}
                    onClick={() => nav(`/contract/${r.no}`)}
                  >
                    {statusAction[r.status]}
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* 右侧统计 */}
        <aside className={styles.rightbar}>
          <section className={styles.card}>
            <h3 className={styles.cardTitle}>签约数据统计</h3>
            <div className={styles.fieldRow}>
              <span>完成签约：</span>
              <b>12份</b>
            </div>
            <div className={styles.fieldRow}>
              <span>进行中签约：</span>
              <b>8份</b>
            </div>
            <div className={styles.fieldRow}>
              <span>招商转化率：</span>
              <b className={styles.success}>85.7%</b>
            </div>
            <div className={styles.progress}>
              <div className={styles.progressBar} style={{ width: "85.7%" }} />
            </div>
          </section>

          <section className={styles.card}>
            <h3 className={styles.cardTitle}>待处理事项</h3>
            <ul className={styles.todoList}>
              <li>
                <span><i className={`${styles.dot} ${styles.red}`} />2份合同待签署</span>
                <span>今天</span>
              </li>
              <li>
                <span><i className={`${styles.dot} ${styles.blue}`} />5家企业申请入驻</span>
                <span>3天内</span>
              </li>
              <li>
                <span><i className={`${styles.dot} ${styles.yellow}`} />3份合同即将到期</span>
                <span>10天内</span>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
