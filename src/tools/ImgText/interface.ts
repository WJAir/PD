import { CSSProperties, ReactNode } from "react";

export interface ImgTextProps {
  /** 盒子样式 */
  style?: CSSProperties;
  /** 图片盒子样式 */
  imgStyle?: CSSProperties;
  /** 文本盒子样式 */
  contentStyle?: CSSProperties;
  /** 图片路径 */
  imgSrc?: string | boolean;
  /** 内容 */
  content?: ReactNode;
  /** 图文位置 */
  position?: boolean;
}
