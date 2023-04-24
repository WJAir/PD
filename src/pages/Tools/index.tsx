import React from "react";
import Layout from "@theme/Layout";
import Random from "@site/src/components/Random";
import DateTime from "@site/src/components/DateTime";
import Others from "@site/src/components/Others";
import styles from "./styles.module.scss";

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
    label: `其他`,
    children: <Others />,
  },
];

const Index: React.FC = () => (
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

export default Index;
