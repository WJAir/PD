import React from "react";
import { ButtonProps } from "@site/src/tools/ButtonGroup/interface";
import {
  IconFile,
  IconCommon,
  IconRecord,
  IconTool,
  IconBook,
} from "@arco-design/web-react/icon";

export const WelcomeList: ButtonProps[] = [
  {
    label: "名词",
    type: "outline",
    icon: <IconFile />,
    href: "/docs/noun",
  },
  {
    label: "图文",
    type: "outline",
    icon: <IconCommon />,
    href: "/docs/ImgText",
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
  {
    label: "uxppt",
    type: "outline",
    icon: <IconBook />,
    href: "/uxppt",
  },
];
