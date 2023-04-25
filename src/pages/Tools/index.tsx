import React, { Component } from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.scss";

import Random from "@site/src/components/Random";
import DateTime from "@site/src/components/DateTime";
import String from "@site/src/components/String";

import { Tabs, Button } from "antd";
import type { TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `随机`,
    children: <Random />,
  },
  {
    key: "2",
    label: `时间`,
    children: <DateTime />,
  },
  {
    key: "3",
    label: `字符`,
    children: <String />,
  },
];

export default class Tools extends Component {
  render() {
    return (
      <Layout>
        <Tabs
          tabBarExtraContent={<Button href="/">back</Button>}
          className={styles.arco_tabs_new}
          centered
          defaultActiveKey="1"
          items={items}
        />
      </Layout>
    );
  }
}
