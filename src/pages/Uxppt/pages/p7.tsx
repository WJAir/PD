import React from 'react';
import Content from './components/content';
import './p6.scss';

/**
 * 交互设计原则很多，今天也介绍不完，但基本就围绕着有用-到-可用-再到-易用
 * 本来今天应该有个问答环节吧，但你们问了我也答不上来，就跳过这个环节把。
 */
export default class extends React.Component<{spaceNum:number}>{
  render(){
    const max = 2;
    const spaceNum = this.props.spaceNum > max ? max : this.props.spaceNum;

    return (
      <div className={`spaceNum${spaceNum}`}>
        <h1>有用-可用-易用</h1>
        <Content className="s1">
          <h3>最终以符合用户使用需求为准:有用、可用、易用</h3>
          <div className="img"></div>
        </Content>
        <Content className="s2">
          <div className="img"></div>
        </Content>
      </div>
    );
  }
}
