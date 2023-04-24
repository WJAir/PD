import React from "react";
import styles from "./styles.module.scss";
import { Input, Button, Radio, message, Tooltip } from "antd";
import type { RadioChangeEvent } from "antd";
import {
  IconCopy,
  IconLoop,
  IconToLeft,
  IconToRight,
  IconSwap,
} from "@arco-design/web-react/icon";
import { randomStringType, copy, randomNum } from "@site/src/public/src";
import clsx from "clsx";

const TextArea = Input.TextArea;
const RadioGroup = Radio.Group;

interface RandomProps {
  /** 获取状态位 */
  getStrLoading: boolean;
  /** 字符长度 */
  strLen: string;
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
  min: string;
  /** 最大值 */
  max: string;
  /** 检测的字符 */
  importString: string;
}

export default class Random extends React.Component {
  render() {
    const {
      display,
      getStrLoading,
      max,
      min,
      lenDisplay,
      strLen,
      resultString,
      copyDis,
      importString,
    } = this.state;
    return (
      <>
        <div className={styles.str_container}>
          <h1>获取随机值：</h1>
          <div className={clsx(styles.str_subBox)}>
            <span>类型：</span>
            <RadioGroup
              defaultValue="string"
              style={{ marginBottom: 20 }}
              onChange={this.handelChangeType}
              options={[
                { label: "指定长度的数字&字母组合", value: "string" },
                { label: "指定长度的随机数字", value: "number" },
                { label: "指定区间的随机数字", value: "random" },
              ]}
            />
          </div>
          <div style={{ display: display }} className={styles.str_subBox}>
            <span>区间：</span>
            <Input
              onChange={(e) => this.setState({ min: e.target.value })}
              style={{ width: 100 }}
              placeholder="-99999"
              value={min}
            />
            ~
            <Input
              onChange={(e) => {
                this.setState({ max: e.target.value });
              }}
              style={{ width: 100 }}
              placeholder="99999"
              value={max}
            />
            <Tooltip title="获取指定区间随机数">
              <Button
                loading={getStrLoading}
                style={{ marginLeft: 5 }}
                onClick={this.getRandomNumber}
                icon={<IconLoop />}
              />
            </Tooltip>
          </div>
          <div
            style={{ display: lenDisplay }}
            className={clsx(styles.str_subBox, styles.str_lenBox)}
          >
            <span>长度：</span>
            <Input
              onChange={(e) => {
                this.setState({ strLen: e.target.value });
              }}
              type="number"
              size="large"
              maxLength={5}
              // showCount
              style={{ width: 350 }}
              allowClear
              placeholder="请输入长度"
              value={strLen}
            />
            <Tooltip title="获取字符">
              <Button
                loading={getStrLoading}
                className={styles.str_lenBut}
                onClick={this.getString}
                icon={<IconLoop />}
              />
            </Tooltip>

            <Tooltip title="复制结果">
              <Button
                className={styles.str_lenBut}
                onClick={() => {
                  copy(resultString, (err: any) => {
                    if (!err) {
                      message.success("复制成功！");
                    }
                  });
                }}
                icon={<IconCopy />}
                disabled={copyDis}
              />
            </Tooltip>
          </div>
          <div className={clsx(styles.str_subBox, styles.str_resultBox)}>
            <TextArea
              placeholder="这里将显示获取到的字符"
              value={resultString}
              autoSize={{ maxRows: 10 }}
              style={{ width: 1000 }}
            />
          </div>
        </div>
        <div className={styles.str_container}>
          <h1>字符长度检测：</h1>
          <div className={clsx(styles.str_subBox, styles.str_stringBox)}>
            <TextArea
              placeholder="这里输入字符"
              value={importString}
              autoSize={{ maxRows: 10 }}
              allowClear
              style={{ width: 1000 }}
              onChange={(e) => {
                // console.log(e);
                this.setState({
                  importString: e.target.value,
                });
              }}
            />
            <div style={{ marginTop: 10 }}>
              <span>当前字符长度： {importString.length}</span>

              <Tooltip title="清除前方空格">
                <Button
                  icon={<IconToLeft />}
                  style={{ marginLeft: 10 }}
                  disabled={!importString.length}
                  onClick={() => {
                    this.setState(
                      {
                        importString: importString.replace(/^\s*/g, ""),
                      },
                      () => {
                        message.success("success");
                      }
                    );
                  }}
                />
              </Tooltip>

              <Tooltip title="清除所有空格">
                <Button
                  icon={<IconSwap />}
                  style={{ marginLeft: 10 }}
                  disabled={!importString.length}
                  onClick={() => {
                    this.setState(
                      {
                        importString: importString.replace(/\s+/g, ""),
                      },
                      () => {
                        message.success("success");
                      }
                    );
                  }}
                />
              </Tooltip>

              <Tooltip title="清除后方空格">
                <Button
                  icon={<IconToRight />}
                  disabled={!importString.length}
                  style={{ marginLeft: 10 }}
                  onClick={() => {
                    this.setState(
                      {
                        importString: importString.replace(/\s*$/g, ""),
                      },
                      () => {
                        message.success("success");
                      }
                    );
                  }}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </>
    );
  }

  state: RandomProps = {
    getStrLoading: false,
    strLen: "5",
    resultString: "",
    type: "string",
    copyDis: true,
    display: "none",
    lenDisplay: "",
    min: "0",
    max: "9999",
    importString: "",
  };

  handelChangeType = (event: RadioChangeEvent) => {
    this.setState(
      {
        type: event.target.value,
      },
      () => {
        if (this.state.type === "random") {
          this.setState({
            display: "",
            lenDisplay: "none",
          });
        } else {
          this.setState({
            display: "none",
            lenDisplay: "",
          });
        }
      }
    );
  };

  /** 获取随机数值 */
  getRandomNumber = () => {
    const res = randomNum(this.state.min, this.state.max);

    if (this.state.min === "") {
      message.error("区间起始值不能为空");
    } else if (this.state.max === "") {
      message.error("区间结束值不能为空");
    } else {
      this.setState({
        resultString: res,
      });
    }
  };

  /** 获取随机字串 */
  getString = () => {
    const { strLen, type } = this.state;
    this.setState({
      getStrLoading: true,
    });

    if (!this.state.strLen) {
      message.error("长度为空");
      this.setState({
        getStrLoading: false,
      });
    }
    /** 根据选择的类型定义传入的字符 */
    const strType =
      type === "string"
        ? "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890"
        : "0123456789";
    /** 随机获取的字符串 */
    const stringRes = randomStringType(strLen, strType);

    if (stringRes) {
      this.setState({
        resultString: stringRes,
        copyDis: false,
        getStrLoading: false,
      });
    }
  };
}
