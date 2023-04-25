import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Input, Button, message, Tooltip } from "antd";
import { IconToLeft, IconToRight, IconSwap } from "@arco-design/web-react/icon";

const TextArea = Input.TextArea;

interface StringProps {
  /** 检测的字符 */
  importString: string;
}

/** 字符串操作模组 */
export default class String extends React.Component {
  state: StringProps = {
    importString: "",
  };
  render() {
    const { importString } = this.state;
    return (
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
    );
  }
}
