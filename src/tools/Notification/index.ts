import { ReactNode } from "react";
import { Notification } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

Notification.config({
  maxCount: 5,
});

type NotificationsProps = {
  /** icon */
  icon?: ReactNode;
  /** 标题 */
  title?: string;
  /** 具体信息 */
  info: string;
};

export const Notifications = {
  success: ({ icon, title, info }: NotificationsProps) => {
    Notification.success({
      icon: icon,
      title: title,
      content: info,
    });
  },
  error: ({ icon, title, info }: NotificationsProps) => {
    Notification.error({
      icon: icon,
      title: title,
      content: info,
    });
  },
  warning: ({ icon, title, info }: NotificationsProps) => {
    Notification.warning({
      icon: icon,
      title: title,
      content: info,
    });
  },
  info: ({ icon, title, info }: NotificationsProps) => {
    Notification.info({
      icon: icon,
      title: title,
      content: info,
    });
  },
};
