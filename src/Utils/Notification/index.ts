import { ReactNode } from "react";
import { Notification } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

Notification.config({
  maxCount: 5,
});

export const Notifications = {
  success: (icon: ReactNode, title: any, info: any) => {
    Notification.success({
      icon: icon,
      title: title,
      content: info,
    });
  },
  error: (icon: ReactNode, title: any, info: any) => {
    Notification.error({
      icon: icon,
      title: title,
      content: info,
    });
  },
  warning: (icon: ReactNode, title: any, info: any) => {
    Notification.warning({
      icon: icon,
      title: title,
      content: info,
    });
  },
  info: (icon: ReactNode, title: any, info: any) => {
    Notification.info({
      icon: icon,
      title: title,
      content: info,
    });
  },
};
