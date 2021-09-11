import React from "react";
import "./index.less";
import logo from "./imgs/logo.png";
import wechat from "./imgs/wechat.png";
import weibo from "./imgs/weibo.png";

const Footer = () => (
  <div className="Geek-DiligentBees-Footer">
    <div>
      <div className="top">
        <img src={logo} className="logo" />
        <div className="font">
          <div className="cha">
            极客<span>&</span>勤奋蜂
          </div>
          <div className="lines">
            <div className="circle" />
            <div className="line" />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="item">
          <div>********有限公司</div>
          <ul>
            <li>地址：重庆邮电大学</li>
            <li>电话：000-0100000</li>
            <li>邮箱：support@madao.cc</li>
          </ul>
        </div>
        <div className="item">
          <div>企业介绍</div>
          <ul>
            <li>品牌介绍</li>
            <li>团队介绍</li>
            <li>关于我们</li>
          </ul>
        </div>
        <div className="item">
          <div>服务范围</div>
          <ul>
            <li>产品介绍</li>
            <li>新闻动态</li>
            <li>服务品牌</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <a href="https://weibo.com/" target="_blank">
            <img src={weibo} />
          </a>
          <img src={wechat} />
        </div>
        <div className="href">
          <div className="cha">
            <div>友情链接：</div>
            <ul>
              <a href="https://www.baidu.com/" target="_blank">
                <li>百度</li>
              </a>
              <li>|</li>
              <a href="https://www.sina.com.cn/" target="_blank">
                <li>新浪</li>
              </a>
              <li>|</li>
              <a href="https://www.163.com/" target="_blank">
                <li>网易</li>
              </a>
            </ul>
          </div>
          <div className="line"/>
          <ul className="circles">
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
