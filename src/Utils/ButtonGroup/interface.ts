import { CSSProperties, ReactNode } from "react";
export interface ButtonProps {
  className?: string | string[];
  style?: CSSProperties;
  /** 按钮文本 */
  label?: string;
  /** 形状 */
  shape?: "circle" | "round" | "square";
  /** icon */
  icon?: ReactNode;
  /** 跳转链接 */
  href?: string;
  /** a 链接的 target 属性，href时候生效 */
  target?: string;
  /** 样式类型 */
  type?: "default" | "primary" | "dashed" | "text" | "secondary" | "outline";
  /** 点击事件 */
  onClick?: (e: Event) => void;
  /** 单按钮可见性，默认可见 */
  show?: boolean;
}

export interface ButtonGroupProps {
  /** 按钮列表 */
  buttonList: ButtonProps[];
  /** 按钮组是否可见，默认可见 */
  show?: boolean;
  /** 布局方向 */
  direction?: "row" | "column";
}
