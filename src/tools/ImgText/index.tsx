import React from "react";
import "./index.scss";

import { ImgTextProps } from "./interface";

/** 盒子的初始样式 */
const styles = {
  borderStyle: "solid",
  borderColor: "#3c92f032",
  borderWidth: 1,
  borderRadius: 8,
  marginTop: 5,
  marginBottom: 10,
};

/** 图文列表 */
export default function ImgText({
  imgSrc = "/img/Empty.png",
  content = "测试文本",
  style: customStyle,
  imgStyle,
  contentStyle,
  position,
}: ImgTextProps) {
  /** 盒子样式 */
  const boxStyles = {
    ...styles,
    // 传递的自定义样式
    ...customStyle,
  };

  /** 盒子中图文布局 */
  const imgTextClasses = `ImgText ${position ? "img-right" : "img-left"}`;

  return (
    <div className={imgTextClasses} style={boxStyles}>
      <div className="ImgText_img" style={imgStyle}>
        <img src={imgSrc} alt="加载失败" />
      </div>
      <div className="ImgText_border"></div>
      <div className="ImgText_content" style={contentStyle}>
        <p>{content}</p>
      </div>
    </div>
  );
}
