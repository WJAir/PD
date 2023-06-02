import React from "react";
import "./index.scss";

import { ImgTextProps } from "./interface";

/** 盒子的初始样式 */
const styles = {
  borderStyle: "solid",
  borderColor: "#3c92f032",
  borderWidth: 1,
  borderRadius: 8,
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

  /** 是否传入图片 */
  const showImage = imgSrc && typeof imgSrc !== "boolean";
  /** 是否传入文本内容 */
  const showContent = content && typeof content !== "boolean";
  /** 只有图或文时隐藏间隔线 */
  const showBorder = showImage && showContent;

  /** 盒子中图文布局 */
  const imgTextClasses = `ImgText ${position ? "img-right" : "img-left"}`;

  return (
    <div className={imgTextClasses} style={boxStyles}>
      {showImage && (
        <div className="ImgText_img" style={imgStyle}>
          <img src={imgSrc} alt="加载失败" />
        </div>
      )}
      {showBorder && <div className="ImgText_border"></div>}
      {showContent && (
        <div className="ImgText_content" style={contentStyle}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
