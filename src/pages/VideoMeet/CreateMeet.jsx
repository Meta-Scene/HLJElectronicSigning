import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VideoMeet.module.css";
import roomImg from "../../assets/hys.jpg";

const CreateMeet = () => {
  const nav = useNavigate();
  const [inMeeting, setInMeeting] = useState(false);

  return (
    <div>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <div className={styles.topNavLeft}>
          <div className={styles.title}>视频洽谈系统</div>
          <div onClick={() => nav("/MeetManage")} className={styles.subtitle}>
            会议管理
          </div>
          <div onClick={() => nav("/CreateMeet")} className={styles.subtitle}>
            创建会议
          </div>
          <div onClick={() => nav("/MeetLog")} className={styles.subtitle}>
            会议记录
          </div>
        </div>
        <div className={styles.topNavRight}>
          <div className={styles.header}></div>
          <div className={styles.userRole}>管理员</div>
        </div>
      </div>

      {/* 条件渲染：未入会 -> 表单；已入会 -> 会议中页面 */}
      {!inMeeting ? (
        /* ===== 创建会议表单 ===== */
        <div className={styles.scrollArea}>
          <div className={styles.pageWrap}>
            {/* 会议基本信息 */}
            <div className={styles.card}>
              <div className={styles.sectionTitle}>会议基本信息</div>

              <div className={styles.formGrid2}>
                <div className={styles.formItem}>
                  <label className={styles.label}>会议名称</label>
                  <input className={styles.input} placeholder="请输入会议名称" />
                </div>

                <div className={styles.formItem}>
                  <label className={styles.label}>会议时间</label>
                  <input
                    className={styles.input}
                    type="datetime-local"
                    placeholder="yyyy/mm/dd --:--"
                  />
                </div>

                <div className={styles.formItemFull}>
                  <label className={styles.label}>会议议题</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="简要描述会议议题..."
                  />
                </div>

                <div className={styles.formItem}>
                  <label className={styles.label}>预计时长</label>
                  <select className={styles.select}>
                    <option>30分钟</option>
                    <option>45分钟</option>
                    <option>60分钟</option>
                    <option>90分钟</option>
                  </select>
                </div>
              </div>

              <div className={styles.dashedDivider} />
            </div>

            {/* 数字孪生场景设置 */}
            <div className={styles.card}>
              <div className={styles.sectionTitle}>数字孪生场景设置</div>

              <div className={styles.formGrid2}>
                <div className={styles.formItem}>
                  <label className={styles.label}>场景风格</label>
                  <select className={styles.select}>
                    <option>会议室场景</option>
                    <option>讲台演示</option>
                    <option>报告厅</option>
                  </select>
                </div>

                <div className={styles.formItem}>
                  <label className={styles.label}>场景效果</label>
                  <select className={styles.select}>
                    <option>现代感</option>
                    <option>科技感</option>
                    <option>简约风</option>
                  </select>
                </div>

                <div className={styles.formItemFull}>
                  <label className={styles.label}>场景预览</label>
                  <div className={styles.previewBox}>场景3D预览图</div>
                </div>
              </div>
            </div>

            {/* 参会人员管理 */}
            <div className={styles.card}>
              <div className={styles.sectionTitle}>参会人员管理</div>

              <div className={styles.addRow}>
                <input
                  className={styles.input}
                  placeholder="输入/粘贴需要邀请的参会人员"
                />
                <button className={styles.primaryBtn}>添加</button>
              </div>

              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>姓名</th>
                    <th>职位</th>
                    <th>邮箱</th>
                    <th>角色</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>张经理</td>
                    <td>产品经理</td>
                    <td>zhang@example.com</td>
                    <td>
                      <select className={styles.roleSelect} defaultValue="主持人">
                        <option>主持人</option>
                        <option>参会者</option>
                        <option>旁听</option>
                      </select>
                    </td>
                    <td className={styles.linkDanger}>移除</td>
                  </tr>
                  <tr>
                    <td>李工程师</td>
                    <td>技术主管</td>
                    <td>li@example.com</td>
                    <td>
                      <select className={styles.roleSelect} defaultValue="参会者">
                        <option>主持人</option>
                        <option>参会者</option>
                        <option>旁听</option>
                      </select>
                    </td>
                    <td className={styles.linkDanger}>移除</td>
                  </tr>
                  <tr>
                    <td>王设计师</td>
                    <td>UI设计师</td>
                    <td>wang@example.com</td>
                    <td>
                      <select className={styles.roleSelect} defaultValue="参会者">
                        <option>主持人</option>
                        <option>参会者</option>
                        <option>旁听</option>
                      </select>
                    </td>
                    <td className={styles.linkDanger}>移除</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 会议选项 */}
            <div className={styles.card}>
              <div className={styles.sectionTitle}>会议选项</div>

              <div className={styles.optionGrid}>
                <div className={styles.optionCol}>
                  <div className={styles.checkRow}>
                    <input type="checkbox" id="muteAll" />
                    <label htmlFor="muteAll">全员静音</label>
                  </div>

                  <div className={styles.checkRow}>
                    <input type="checkbox" id="autoRecord" />
                    <label htmlFor="autoRecord">自动录制会议</label>
                  </div>
                </div>

                <div className={styles.optionCol}>
                  <div className={styles.formItem}>
                    <label className={styles.label}>入会密码</label>
                    <input
                      className={styles.input}
                      placeholder="设置入会密码（可选）"
                    />
                  </div>
                </div>

                <div className={styles.optionCol}>
                  <div className={styles.formItem}>
                    <label className={styles.label}>会议提醒</label>
                    <select className={styles.select}>
                      <option>不提醒</option>
                      <option>会前10分钟</option>
                      <option>会前30分钟</option>
                      <option>会前1小时</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.footerBtns}>
                <button className={styles.btnGhost}>取消</button>
                <button
                  className={styles.btnPrimary}
                  onClick={() => setInMeeting(true)}
                >
                  创建会议
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ===== 会议中页面 ===== */
        <div className={styles.roomScroll}>
          <div className={styles.meetingRoomGrid}>
            {/* 左侧信息 */}
            <div className={styles.roomLeft}>
              <div className={styles.roomTitle}>产品设计评审会</div>

              <div className={styles.roomBlock}>
                <div className={styles.blockTitle}>会议议程</div>
                <ol className={styles.agendaList}>
                  <li>
                    <span className={styles.badge}>1</span> 产品原型展示（10:00–10:30）
                  </li>
                  <li>
                    <span className={styles.badge}>2</span> 设计评审与反馈（10:30–11:00）
                  </li>
                  <li>
                    <span className={styles.badge}>3</span> 修改方案讨论（11:00–11:30）
                  </li>
                </ol>
              </div>

              <div className={styles.roomBlock}>
                <div className={styles.blockTitle}>参会人员</div>
                <div className={styles.member}>
                  <div className={styles.avatar} />
                  <div>
                    <div className={styles.memberName}>张经理（主持人）</div>
                    <div className={styles.memberSub}>正在发言</div>
                  </div>
                </div>
                <div className={styles.member}>
                  <div className={styles.avatar} />
                  <div>
                    <div className={styles.memberName}>李设计师</div>
                    <div className={styles.memberSub}>产品设计部</div>
                  </div>
                </div>
                <div className={styles.member}>
                  <div className={styles.avatar} />
                  <div>
                    <div className={styles.memberName}>王工程师</div>
                    <div className={styles.memberSub}>技术研发部</div>
                  </div>
                </div>
              </div>

              <div className={styles.roomBlock}>
                <div className={styles.blockTitle}>会议资料</div>
                <div className={styles.fileRow}>
                  <span className={styles.fileIconPdf} />
                  <span>产品设计文档.pdf</span>
                  <a className={styles.linkBlue}>下载</a>
                </div>
                <div className={styles.fileRow}>
                  <span className={styles.fileIconZip} />
                  <span>设计方案图集.zip</span>
                  <a className={styles.linkBlue}>下载</a>
                </div>
              </div>
            </div>

            {/* 右侧虚拟会议室（图片铺满容器） */}
            <div className={styles.roomRight}>
              <div className={styles.virtualTitle}>虚拟会议室</div>
              <div className={styles.virtualBox}>
                <img
                  src={roomImg}
                  alt="虚拟会议室"
                  className={styles.virtualFill}
                />
              </div>
            </div>
          </div>

          {/* 底部操作栏 */}
          <div className={styles.roomFooter}>
            <button className={styles.btnGhostLarge}>共享屏幕</button>
            <button className={styles.btnGhostLarge}>共享文档</button>
            <button className={styles.btnGhostLarge}>打开摄像头</button>
            <button className={styles.btnGhostLarge}>开启麦克风</button>
            <button
              className={styles.btnPrimaryLarge}
              onClick={() => setInMeeting(false)}
            >
              离开会议
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateMeet;
