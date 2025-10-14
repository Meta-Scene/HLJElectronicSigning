import React, { useMemo } from "react";
import styles from "../ESigning/ESigning.module.css";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "待审核", value: 12 },
  { label: "待签章", value: 8 },
  { label: "待初审", value: 5 },
  { label: "已完成", value: 16 },
];

const rows = [
  { no: "HT20230018", name: "产业园项目", status: "待审核" },
  { no: "HT20230059", name: "招商入驻补", status: "待初审" },
  { no: "HT20230072", name: "产业基金合", status: "待复核" },
  { no: "HT20230081", name: "科技创新扶", status: "已完成" },
];

const latestOverview = {
  title: "产业园项目投资协议",
  code: "HT20230018",
  company: "新源科技有限公司",
  park: "常州科技园",
  date: "2025-07-15",
  status: "待审核",
};

export default function ESigningGov() {
  const nav = useNavigate();
  const statusAction = useMemo(
    () => ({ 待审核: "审核", 待初审: "初审", 待复核: "复核", 已完成: "存证" }),
    []
  );

  return (
    <div className={styles.shell}>
      {/* 顶栏 */}
      <header className={styles.topbar}>
        <div className={styles.brand}>电子签约与存证系统 - 政府端</div>
        <div className={styles.user}>管理员</div>
      </header>

      <div className={styles.body}>
        {/* 左侧栏 */}
        <aside className={styles.sidebar}>
          <div className={styles.menuTitle}>合同管理</div>
          <button className={styles.menuItem}>待办合同</button>

          <div className={styles.menuTitle}>模板库</div>
          <button className={styles.menuItem}>合同模板</button>

          <div className={styles.menuTitle}>存证查询</div>
          <button className={styles.menuItem}>查询记录</button>
        </aside>

        {/* 主内容 */}
        <main className={styles.main}>
          {/* 顶部统计 */}
          <section className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </section>

          {/* 搜索工具条：左“合同类型”，右“关键词搜索+按钮” */}
          <section className={`${styles.toolbar} ${styles.toolbarGov}`}>
            <select className={styles.select}>
              <option>合同类型</option>
              <option>投资协议</option>
              <option>补贴协议</option>
            </select>

            <div className={styles.toolbarSearch}>
              <input className={styles.input} placeholder="关键词搜索" />
              <button className={styles.searchBtn} aria-label="搜索" />
            </div>
          </section>

          {/* 合同列表 */}
          <section className={styles.tableWrap}>
            <div className={`${styles.row} ${styles.rowHead}`}>
              <div>合同编号</div>
              <div>合同名称</div>
              <div>状态</div>
              <div className={styles.colActions}>操作</div>
            </div>

            {rows.map(r => (
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
                  <button className={styles.primaryBtn} onClick={() => nav(`/contract/${r.no}`)}>
                    {statusAction[r.status]}
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* 右侧栏：概览 + 存证服务 */}
        <aside className={styles.rightbar}>
          <section className={styles.card}>
            <h3 className={styles.cardTitle}>合同概览</h3>
            <div className={styles.field}><span>合同名称：</span>{latestOverview.title}</div>
            <div className={styles.field}><span>合同编号：</span>{latestOverview.code}</div>
            <div className={styles.field}><span>签订企业：</span>{latestOverview.company}</div>
            <div className={styles.field}><span>所属园区：</span>{latestOverview.park}</div>
            <div className={styles.field}><span>签订日期：</span>{latestOverview.date}</div>
            <div className={styles.field}>
              <span>当前状态：</span>
              <span className={`${styles.badge} ${styles[`badge_${latestOverview.status}`]}`}>
                {latestOverview.status}
              </span>
            </div>
            <button className={styles.primaryBtn} style={{ width: "100%", marginTop: 12 }}>
              立即审核
            </button>
          </section>

          <section className={styles.card}>
            <h3 className={styles.cardTitle}>存证服务</h3>
            <input className={styles.inputFull} placeholder="输入合同编号或存证哈希" />
            <button className={styles.primaryBtn} style={{ width: "100%", marginTop: 8 }}>
              查询存证
            </button>
            <div className={styles.meta}>
              <div>今日生成存证：<b>6</b> 份</div>
              <div>本月生成存证：<b>48</b> 份</div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
