import React from 'react';
import {Empty, Progress, Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import './info.css';


export const Info = {
  Error: (props) => {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        className="other_margin"
        description={<p style={{color: 'red'}}>{props.msg}</p>}
      />
    );
  },
  Empty: (props) => {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        className="other_margin"
        description={<p>{props.desc}</p>}
      />
    );
  },
  Loading: (props) => {
    let tip;

    if (props.value){
      tip = `${props.tip} ${props.value}%`;
    }
    else {
      tip = `${props.tip}`;
    }

    return (
      <>
        <Spin
          tip={tip}
          className="loading_spin"
          indicator={<LoadingOutlined spin />}
        >
          <div className="other_margin" />
        </Spin>
      </>
    );
  }
};
