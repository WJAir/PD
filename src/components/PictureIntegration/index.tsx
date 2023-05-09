import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Button, Form, Input, Spin, Empty } from "antd";

import axios from "axios";

export default class PictureIntegration extends React.Component {
  state = {
    iframeUrl: "",
    code: "",
    msg: "",
    loading: false,
  };

  onFinish = async (values: any) => {
    console.log("Success:", values);

    localStorage.setItem("params", JSON.stringify(values));

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
        console.log(5555);
        this.setState({
          iframeUrl: data.result.url,
          code: "1",
          loading: false,
        });
      }
      if (data.hasOwnProperty("error")) {
        console.log(555555555);
        this.setState({
          code: "0",
          msg: JSON.stringify(data.error),
          loading: false,
        });
      }
    }
  };

  onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  onChange = (value) => {
    console.log(value.target.value);
  };

  render() {
    const { code, msg } = this.state;
    5;

    var content: string | number | boolean | React.ReactFragment | JSX.Element;

    switch (code) {
      case "2":
        content = <Spin tip="Loading" />;
        break;

      case "1":
        content = (
          <iframe src={this.state.iframeUrl} className={styles.pic_iframeBox} />
        );
        break;

      case "0":
        content = (
          <>
            <img src="/img/icon/error.svg" className={styles.pic_errImg} />
            <div>
              <p className={styles.pic_errP}>code：{JSON.parse(msg).code}</p>
              <p className={styles.pic_errP}>
                message：{JSON.parse(msg).message}
              </p>
            </div>
          </>
        );
        break;

      default:
        content = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
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
              onFinishFailed={this.onFinishFailed}
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
          <div className={clsx(styles.pic_iframeBox)}>{content}</div>
        </div>
      </>
    );
  }
}
