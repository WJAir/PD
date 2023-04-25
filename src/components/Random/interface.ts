import {} from "react";

export interface RandomProps {
  /** 获取状态位 */
  getStrLoading: boolean;
  /** 字符长度 */
  strLen: number;
  /** 结果字符串 */
  resultString: string;
  /** 获取的类型 */
  type: "string" | "number" | "random";
  /** 复制按钮操作性 */
  copyDis: boolean;
  /** 随机数区间可见性 */
  display: string;
  /** 可见性 */
  lenDisplay: string;
  /** 最小值 */
  min: number;
  /** 最大值 */
  max: number;
}
