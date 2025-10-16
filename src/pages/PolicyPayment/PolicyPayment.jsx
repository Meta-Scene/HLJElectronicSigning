// PolicyPayment.jsx
import React, { useState } from "react";
import styles from "./PolicyPayment.module.css";

const PolicyPayment = () => {
  const [files] = useState([
    { name: "2023预算测算申请书.pdf", size: "5.2MB", progress: 78, type: "pdf", uploading: true },
    { name: "企业资质盖章照.jpeg", size: "1.8MB", progress: 100, type: "img", uploading: false },
  ]);

  return (
    <div className={styles.wrap}>
      {/* 顶栏（固定 56px） */}
      <div className={styles.topbar}>
        <div className={styles.brand}>政策兑付系统（企业端）</div>
      </div>

      {/* 视窗容器：在全局 overflow:hidden 下使用内部滚动 */}
      <div className={styles.viewport}>
        <div className={styles.body}>
          {/* 侧边栏 */}
          <aside className={styles.sidebar}>
            <div className={styles.navItem}>企业档案</div>
            <div className={styles.navItem}>政策推荐</div>
            <div className={styles.navItem}>政策检索</div>
            <div className={`${styles.navItem} ${styles.active}`}>我的补贴</div>
            <div className={styles.navItem}>我的审核</div>
          </aside>

          {/* 主内容滚动区 */}
          <main className={styles.mainScroll}>
            {/* 补贴申请基本信息 */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>补贴申请基本信息</div>
              </div>
              <div className={styles.grid2}>
                <div className={styles.item}>
                  <label>申请编号</label>
                  <div className={styles.inputRow}>
                    <input className={styles.input} defaultValue="Rd202309290001" />
                    <span className={styles.badgeOk}>已完成</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <label>申请日期</label>
                  <div className={styles.inputRow}>
                    <input className={styles.input} type="date" defaultValue="2023-09-29" />
                    <span className={styles.badgeOk}>已完成</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <label>企业名称</label>
                  <input className={styles.input} defaultValue="杭州某某科技有限公司" />
                </div>
                <div className={styles.item}>
                  <label>统一社会信用代码</label>
                  <input className={styles.input} defaultValue="913330XXXXXXXXXXXX" />
                </div>
              </div>
            </section>

            {/* 企业研发项目及实施信息 */}
            <section className={styles.card}>
              <div className={styles.cardHeaderLite}>
                <div className={styles.cardTitle}>企业研发项目及实施信息</div>
                <div className={styles.foldIcon}>▾</div>
              </div>
              <div className={styles.grid2}>
                <div className={styles.item}>
                  <label>项目名称</label>
                  <input className={styles.input} placeholder="请输入项目名称" />
                </div>
                <div className={styles.item}>
                  <label>项目所属领域</label>
                  <select className={styles.select} defaultValue="人工智能">
                    <option>人工智能</option>
                    <option>集成电路</option>
                    <option>新材料</option>
                    <option>生物医药</option>
                  </select>
                </div>
                <div className={styles.item}>
                  <label>项目起始日期</label>
                  <input className={styles.input} type="date" />
                </div>
                <div className={styles.item}>
                  <label>项目结束日期</label>
                  <input className={styles.input} type="date" />
                </div>
                <div className={styles.item}>
                  <label>项目投入人员规模</label>
                  <input className={styles.input} type="number" placeholder="0" />
                </div>
                <div className={styles.itemFull}>
                  <label>项目简要说明</label>
                  <textarea className={styles.textarea} placeholder="请简要说明项目背景、目标与创新点" />
                </div>
              </div>
            </section>

            {/* 资金申请详情 */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>资金申请详情</div>
              </div>
              <div className={styles.grid2}>
                <div className={styles.item}>
                  <label>上年度研发投入（万元）</label>
                  <input className={styles.input} defaultValue="3,840,000" />
                </div>
                <div className={styles.item}>
                  <label>申请补贴金额（万元）</label>
                  <input className={styles.input} defaultValue="1,250,000" />
                </div>
                <div className={styles.item}>
                  <label>本年度研发投入（万元）</label>
                  <input className={styles.input} defaultValue="5,200,000" />
                </div>
                <div className={styles.item}>
                  <label>补贴接收账户</label>
                  <input className={styles.input} defaultValue="中国招商银行 甲开发支行 **** **** 6782" />
                </div>
                <div className={styles.item}>
                  <label>补贴用途</label>
                  <select className={styles.select} defaultValue="研发费用加计扣除">
                    <option>研发费用加计扣除</option>
                    <option>技术改造补助</option>
                    <option>人才引进补贴</option>
                  </select>
                </div>
                <div className={styles.item}>
                  <label>项目联系人</label>
                  <input className={styles.input} placeholder="请输入联系人姓名与电话" />
                </div>
                <div className={styles.itemFull}>
                  <label>项目概况说明</label>
                  <textarea className={styles.textarea} placeholder="请简要说明项目目标、里程碑与创新点" />
                </div>
              </div>
            </section>

            {/* 材料上传 */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>材料上传</div>
              </div>

              <div className={styles.hint}>
                支持上传的文件格式：PDF/DOC/DOCX/XLS/XLSX/JPEG/PNG，单个文件不超过100MB
              </div>

              <div className={styles.uploader}>
                <div className={styles.uploaderDashed}>点击或拖拽文件到此上传</div>
              </div>

              <div className={styles.fileList}>
                {files.map((f, i) => (
                  <div className={styles.fileRow} key={i}>
                    <div className={styles.fileLeft}>
                      <span
                        className={`${styles.fileIcon} ${
                          f.type === "pdf" ? styles.iconPdf : styles.iconImg
                        }`}
                      />
                      <div className={styles.fileMeta}>
                        <div className={styles.fileName}>{f.name}</div>
                        <div className={styles.fileSub}>上传中… • {f.size}</div>
                        {f.uploading && (
                          <div className={styles.progressBar}>
                            <div
                              className={styles.progress}
                              style={{ width: `${f.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={styles.fileRight}>
                      <button className={styles.linkBtn}>取消</button>
                      <button className={`${styles.linkBtn} ${styles.dropBtn}`}>⋮</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 底部按钮 */}
            <div className={styles.footerBtns}>
              <button className={styles.btnPrimary}>提交申请</button>
              <button className={styles.btnGhost}>保存草稿</button>
              <button className={styles.btnPlain}>取消</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PolicyPayment;
