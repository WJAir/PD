import React, { ReactElement } from "react";
import { Empty, Spin } from "antd";
import { LoadingOutlined, BugTwoTone } from "@ant-design/icons";
import { ErrMsgProps } from "@site/pdType";
import "./info.css";

interface ErrorProps {
  /** 错误信息 */
  errMsg: ErrMsgProps;
}

interface EmptyProps {
  /** 空值描述 */
  desc?: string;
}

interface LoadingProps {
  /** 加载描述 */
  tip?: string;
  /** 加载值 */
  value?: number;
}

interface InfoProps {
  /** 错误 */
  Error: ({ errMsg }: ErrorProps) => ReactElement;
  /** 空 */
  Empty: ({ desc }: EmptyProps) => ReactElement;
  /** 加载 */
  Loading: ({ tip, value }: LoadingProps) => ReactElement;
}

export const MyInfo: InfoProps = {
  Error: ({ errMsg }) => {
    return (
      <Empty
        image={<BugTwoTone twoToneColor="#ff0000" style={{ fontSize: 50 }} />}
        description={
          <>
            <p className="pic_errP">
              <strong>code：</strong>
              {errMsg.code}
            </p>
            <p className="pic_errP">
              <strong>message：</strong>
              {errMsg.message}
            </p>
          </>
        }
      />
    );
  },
  Empty: ({ desc = "No Data" }) => {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<p>{desc}</p>} />
    );
  },
  Loading: ({ tip = "Loading...", value }) => {
    let loadingTip: string;
    if (value) {
      loadingTip = `${tip} ${value}%`;
    } else {
      loadingTip = `${tip}`;
    }

    return (
      <Spin
        tip={loadingTip}
        className="loading_spin"
        indicator={<LoadingOutlined spin />}
        size="large"
      />
    );
  },
};
