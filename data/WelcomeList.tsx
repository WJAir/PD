import React from "react";
import { ButtonProps } from "@site/src/tools/ButtonGroup/interface";
import {
  IconFile,
  IconCommon,
  IconRecord,
  IconTool,
} from "@arco-design/web-react/icon";

export const WelcomeList: ButtonProps[] = [
  {
    label: "文档",
    type: "outline",
    icon: <IconFile />,
    href: "/docs/document",
  },
  {
    label: "组件",
    type: "outline",
    icon: <IconCommon />,
    href: "/docs/components",
  },
  {
    label: "记录",
    type: "outline",
    icon: <IconRecord />,
    href: "/blog",
  },
  {
    label: "工具",
    type: "outline",
    icon: <IconTool />,
    href: "/tools",
  },
];
