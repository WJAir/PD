import React, { Component } from "react";
import { ButtonProps, ButtonGroupProps } from "./interface";
import styles from "./style.module.scss";
import { Button } from "@arco-design/web-react";
import { IconFile, IconRecord, IconTool } from "@arco-design/web-react/icon";

/** 基础按钮配置 */
class Buttons extends Component<ButtonProps> {
  render() {
    const {
      label,
      shape = "round",
      icon = <IconRecord />,
      href,
      type = "outline",
      target,
      onClick,
      show,
      style = { marginRight: 10, marginBottom: 10 },
      className,
    } = this.props;

    // 为true时但按钮不可见
    if (show) return <></>;

    const buttonProps = {
      shape,
      icon,
      type,
      onClick,
      target,
      style,
      className,
      children: label,
      ...(href && { href }), // 可选链运算符和空值合并运算符
    };
    return <Button {...buttonProps} />;
  }
}

/** 按钮组 */
class ButtonGroup extends Component<ButtonGroupProps> {
  render() {
    const { buttonList, show, direction = "row" } = this.props;

    // 为true时不可见
    if (show) return <></>;

    return (
      <div
        className={styles.buttonGroup_box}
        style={{ flexDirection: direction }}
      >
        {buttonList?.map((props, idx) => (
          <Buttons key={idx} {...props} />
        ))}
      </div>
    );
  }
}

export default ButtonGroup;
