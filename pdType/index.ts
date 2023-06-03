/** 错误信息配置 */
export interface ErrMsgProps {
  /** 错误编码 */
  code: string;
  /** 错误信息体 */
  message: string;
}

export interface WorkProps {
  /** 站点 */
  site?: string;
  /** 头像 */
  img?: string;
  /** 姓名 */
  author?: string;
  /** 基本信息 */
  info?: string;
  /** 跳转模式 */
  target?: "_blank" | "";
}
