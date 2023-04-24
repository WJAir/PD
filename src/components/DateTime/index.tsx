import React, { Component } from "react";
import { Radio, Tooltip } from "antd";
import type { RadioChangeEvent } from "antd";
import styles from "./styles.module.scss";
import { times } from "@site/src/public/src";

const RadioGroup = Radio.Group;

interface DateTimeProps {
  /** 选择的类型 */
  type: "date" | "stamp";
}
class DateTime extends Component {
  state: DateTimeProps = {
    type: "date",
  };

  handleTypeChange = (e: RadioChangeEvent) => {
    this.setState({
      type: e.target.value,
    });
  };

  render() {
    return (
      <div className={styles.date_container}>
        <h1>获取当时间：</h1>
        <div className={styles.str_subBox}>
          <span>类型：</span>
          <RadioGroup
            defaultValue="date"
            style={{ marginBottom: 20 }}
            onChange={this.handleTypeChange}
          >
            <Tooltip title="yyyy/mm/dd hh:mm:ss">
              <Radio value="date">日期时间</Radio>
            </Tooltip>
            <Tooltip title="1681899427813">
              <Radio value="stamp">时间戳</Radio>
            </Tooltip>
          </RadioGroup>
        </div>
        {this.state.type == "date" ? times() : Date.now().toString()}
      </div>
    );
  }
}

export default DateTime;
