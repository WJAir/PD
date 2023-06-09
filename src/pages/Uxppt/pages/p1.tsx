import React from 'react';
import Content from './components/content';
import './p1.scss';

/**
 工作了很多年，却依然说不出什么是交互设计。
 说起来，好像都懂，但又好像不是很懂。
 为什么会这样呢？可能是我们没有自己去总结，又可能是我们觉得这东西就那样，没必要深入了解。
 我再写这个模板的时候，我自己也不确切的知道交互设计是什么。
 那我们先来看看交互与设计是怎么定义的。
 交互设计师以创造有用且实用的产品及服务为宗旨。<br/>
 以用户为中心作为设计的基本原理，交互设计的实际操作必须建立在对实际用户的了解之上：包括他们的目标、任务、体验、需求等等。<br/>
 以用户为中心的角度出发，同时努力平衡用户需求、商业发展目标和科技发展水平之间的关系，交互设计师为复杂的设计挑战提供解决方法，同时定义和发展新的交互产品和服务。

 比较抽象，以我自己的理解，就是：为电脑或者手机与使用者进行的信息交流而设计操作界面。
 但这种定义的东西我们也就看看就好，这次我主要讲的是交互设计的一些原则。
 文章是参考知乎上的一篇文章
 */

export default class extends React.Component<{spaceNum:number}>{
  render(){
    return (
      <div className={`spaceNum${this.props.spaceNum}`}>
        <h1>交互设计</h1>
        <Content>
          <h3>交互设计协会的解释如下：</h3>
          <p>
            交互设计师以创造有用且实用的产品及服务为宗旨。<br/>
            以用户为中心作为设计的基本原理，交互设计的实际操作必须建立在对实际用户的了解之上：包括他们的目标、任务、体验、需求等等。<br/>
            以用户为中心的角度出发，同时努力平衡用户需求、商业发展目标和科技发展水平之间的关系，交互设计师为复杂的设计挑战提供解决方法，同时定义和发展新的交互产品和服务。
          </p>
          <p style={{color: 'rgba(255,255,255,0.3)'}}>参考文章：https://www.zhihu.com/question/19812118</p>
        </Content>
      </div>
    );
  }
}
