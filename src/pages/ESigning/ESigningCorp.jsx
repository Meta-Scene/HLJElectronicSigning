// src/pages/ESigningCorp/ESigningCorp.jsx
import React, { useMemo } from "react";
import styles from "./ESigning.module.css";

const contracts = [
  { name: "产业园入驻协议", status: "待签署" },   // 显示为“签署”操作
  { name: "产业扶持协议V3", status: "待复核" },
  { name: "科技企业孵化协议", status: "已完成" },
  { name: "创新创业资金申请", status: "待初审" }, // 用蓝色徽标替代“审核中”
];

export default function ESigningCorp() {
  const opText = useMemo(
    () => ({
      待签署: "签署",
      待复核: "查看详情",
      已完成: "下载存证",
      待初审: "查看进度",
    }),
    []
  );

  // 将“待签署”映射到已有徽标色：用“待企业签署”
  const badgeKey = (s) =>
    s === "待签署" ? "待企业签署" : s;

  return (
    <div className={styles.shell}>
      {/* 顶栏 */}
      <header className={styles.topbar}>
        <div className={styles.brand}>电子签约与存证系统 - 企业端</div>
        <div className={styles.user}>企业用户</div>
      </header>

      <div className={styles.body}>
        {/* 侧栏 */}
        <aside className={styles.sidebar}>
          <div className={styles.menuItemActive}>我的合同</div>
          <div className={styles.menuItem}>存证下载</div>
        </aside>

        {/* 主内容 */}
        <main className={styles.main}>
          {/* 标题 + 右上角按钮 */}
          <section className={styles.toolbar}>
            <h2 className={styles.pageTitle} style={{ margin: 0 }}>我的合同</h2>
            <button className={styles.primaryBtn}>＋ 新建合同签署</button>
          </section>

          {/* 列表 */}
          <section className={styles.tableWrap}>
            <div className={`${styles.row} ${styles.rowHead}`}>
              <div style={{ gridColumn: "1 / span 2" }}>合同名称</div>
              <div>状态</div>
              <div className={styles.colActions}>操作</div>
            </div>

            {contracts.map((c) => (
              <div key={c.name} className={styles.row}
                   style={{ gridTemplateColumns: "1.6fr 0fr 1fr 220px" }}>
                {/* 为了与政府/园区列表统一，这里把第一列扩大并占两格 */}
                <div style={{ gridColumn: "1 / span 2" }} className={styles.ellipsis}>
                  {c.name}
                </div>
                <div>
                  <span className={`${styles.badge} ${styles[`badge_${badgeKey(c.status)}`]}`}>
                    {c.status}
                  </span>
                </div>
                <div className={styles.colActions}>
                  {/* 次级与主按钮示例 */}
                  <button className={styles.linkBtn}>查看</button>
                  <button className={styles.primaryBtn}>{opText[c.status]}</button>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* 右侧栏 */}
        <aside className={styles.rightbar}>
          {/* 待办事项 */}
          <section className={styles.card}>
            <h3 className={styles.cardTitle}>待办事项</h3>
            <div className={styles.field}>
              <span>产业园入驻协议</span>
              <span className={`${styles.badge} ${styles["badge_待企业签署"]}`}>待签署</span>
            </div>
            <button className={styles.primaryBtn} style={{ width: "100%", marginTop: 12 }}>
              立即签署
            </button>
          </section>

          {/* 存证下载 */}
          <section className={styles.card}>
            <h3 className={styles.cardTitle}>存证下载</h3>

            {[
              { title: "科技企业孵化协议", date: "2025-08-15" },
              { title: "创新创业补助协议", date: "2025-06-02" },
              { title: "投资合作协议", date: "2025-05-12" },
            ].map((d) => (
              <div key={d.title} className={styles.field}>
                <div>
                  <div style={{ fontWeight: 600 }}>{d.title}</div>
                  <div style={{ color: "var(--muted)", fontSize: 12 }}>签署时间：{d.date}</div>
                </div>
                <button className={styles.linkBtn}>下载</button>
              </div>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
}
