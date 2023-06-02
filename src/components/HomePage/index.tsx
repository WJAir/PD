import React, { Component } from "react";
import { Button } from "@arco-design/web-react";
import { IconToRight, IconToBottom } from "@arco-design/web-react/icon";
import "@arco-design/web-react/dist/css/arco.css";
import styles from "./styles.module.scss";
import ButtonGroup from "@site/src/tools/ButtonGroup";

import { WelcomeList } from "@site/data/WelcomeList";

interface StateProps {
  /** 方向 */
  direction: boolean;
}

/** 主页 */
export default class HomePage extends Component {
  state: StateProps = {
    direction: false,
  };

  /** 模式方向切换 */
  changeDirection = () => {
    if (!this.state.direction) {
      this.setState({
        direction: true,
      });
    } else {
      this.setState({
        direction: false,
      });
    }
  };
  render() {
    return (
      <div className={styles.welcome_hero}>
        <h1 className={styles.welcome_title}>欢迎访问海为产品部专用服务!</h1>
        <h3 className={styles.welcome_subtitle}>
          这里记录了关于产品需要的资料和文档
        </h3>
        <Button
          type="secondary"
          shape="circle"
          onClick={this.changeDirection}
          icon={this.state.direction ? <IconToRight /> : <IconToBottom />}
          style={{
            marginBottom: 10,
          }}
        />
        <ButtonGroup
          direction={this.state.direction ? "column" : "row"}
          buttonList={WelcomeList}
        />
      </div>
    );
  }
}
