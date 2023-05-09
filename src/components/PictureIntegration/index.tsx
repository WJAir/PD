import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Button, Form, Input } from "antd";
import { MyInfo } from "@site/src/tools/Info";
import { ErrMsgProps } from "@site/pdType";
import { Notifications } from "@site/src/tools/Notification";

import axios from "axios";

interface StateProps {
  /** iframe的地址 */
  iframeUrl: string;
  /** 编号 */
  code: string;
  /** 错误信息 */
  errMsg: ErrMsgProps;
  /** 加载 */
  loading: boolean;
}

export default class PictureIntegration extends React.Component {
  state: StateProps = {
    iframeUrl: "",
    code: "",
    errMsg: {
      code: "",
      message: "",
    },
    loading: false,
  };

  onFinish = async (values: any) => {
    this.setState({
      loading: true,
      code: "2",
    });

    const getUrl = await axios(
      "https://cloud.haiwell.com/api/project/getProjectMachineVisitUrl",
      {
        method: "POST",
        data: values,
      }
    );

    const data = getUrl.data;

    if (data) {
      if (data.hasOwnProperty("result")) {
        this.setState({
          iframeUrl: data.result.url,
          code: "1",
          loading: false,
        });
        Notifications.success({ info: "获取成功" });
        localStorage.setItem("getDada", JSON.stringify(values));
      }
      if (data.hasOwnProperty("error")) {
        this.setState({
          code: "0",
          errMsg: {
            code: data.error.code,
            message: data.error.message,
          },
          loading: false,
        });
        Notifications.error({
          title: "获取失败",
          info: JSON.stringify(this.state.errMsg),
        });
      }
    }
  };

  render() {
    const { code, errMsg } = this.state;

    var content: React.ReactFragment | JSX.Element;

    switch (code) {
      case "2":
        content = <MyInfo.Loading />;
        break;

      case "1":
        content = (
          <iframe src={this.state.iframeUrl} className={styles.pic_iframeBox} />
        );
        break;

      case "0":
        content = <MyInfo.Error errMsg={errMsg} />;
        break;

      default:
        content = <MyInfo.Empty />;
        break;
    }

    return (
      <>
        <h1>画面集成：</h1>
        <div className={styles.pic_container}>
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 1000, width: 500 }}
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="account"
                name="account"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="privateKey"
                name="privateKey"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="machineCode"
                name="machineCode"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="platform"
                name="platform"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={this.state.loading}
                >
                  GET
                </Button>
              </Form.Item>
            </Form>
          </div>
          {this.state.iframeUrl ? (
            <Button
              href={this.state.iframeUrl}
              target="_blank"
              aria-disabled={true}
            >
              访问
            </Button>
          ) : (
            <></>
          )}
          <div className={clsx(styles.pic_iframeBox)}>{content}</div>
        </div>
      </>
    );
  }
}
