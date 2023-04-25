import React from "react";
import styles from "./styles.module.scss";
import { RandomProps } from "./interface";
import { Input, InputNumber, Button, Radio, message, Tooltip } from "antd";
import type { RadioChangeEvent } from "antd";
import { IconCopy, IconLoop } from "@arco-design/web-react/icon";
import {
  randomStringType,
  copyToClipboard,
  randomNum,
} from "@site/src/public/src";
import clsx from "clsx";

const TextArea = Input.TextArea;
const RadioGroup = Radio.Group;

/** 随机值模组 */
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
            <InputNumber
              onChange={(e) => this.setState({ min: e })}
              style={{ width: 100 }}
              value={min}
              type="number"
              min={0}
              max={9999}
              defaultValue={0}
            />
            ~
            <InputNumber
              onChange={(e) => {
                console.log(e);
                this.setState({ max: e });
              }}
              style={{ width: 100 }}
              value={max}
              min={0}
              max={99999}
              defaultValue={9999}
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
            <InputNumber
              onChange={(e) => {
                this.setState({ strLen: e });
              }}
              min={0}
              max={99999}
              size="large"
              style={{ width: 350 }}
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
                  const res = copyToClipboard(this.state.resultString);
                  if (res) {
                    message.success("复制成功");
                  }
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
      </>
    );
  }

  state: RandomProps = {
    getStrLoading: false,
    strLen: 5,
    resultString: "",
    type: "string",
    copyDis: true,
    display: "none",
    lenDisplay: "",
    min: 0,
    max: 9999,
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
    const { min, max } = this.state;
    if (min === null || min === undefined) {
      message.error("区间起始值不能为空");
    } else if (!max) {
      message.error("区间结束值不能为空");
    } else {
      this.setState({
        resultString: randomNum(min, max),
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
