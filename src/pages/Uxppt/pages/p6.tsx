import React from 'react';
import Content from './components/content';
import './p6.scss';

export default class extends React.Component<{spaceNum:number}>{
  render(){
    const max = 5;
    const spaceNum = this.props.spaceNum > max ? max : this.props.spaceNum;

    return (
      <div className={`spaceNum${spaceNum}`}>
        <h1>系列位置效应</h1>
        <Content className="s1">
          <h3>分为：首因效应和近因效应</h3>
          <p>就是我们记事情更容易记住开头跟结尾，而中间的比较难以记住，比如你今天花一个小时背单词，前十五分钟跟结尾的十五分钟的单词更容易记住，而中间的半小时可能基本记不住。</p>
          <div className="img"></div>
        </Content>
        <Content className="s2">
          <h3 style={{display: 'block'}}>案例1：web 版 behance、dribbble、花瓣、pinterest 界面</h3>
          <p>多年使用 Web 的经验 (以及记忆) 会告诉我们这里大概率会是一个 logo，并且这个 logo 还能回首页。这种固定的设计和操作模式每次都是首先出现在我们的视野里，并已经储存在了长期记忆之中，我们能在第一时间反应出来这里是什么东西，有什么作用。此外，将 logo 放置在首因的位置还能很好地提升品牌形象的识别度和记忆度。</p>
          <div className="img"></div>
        </Content>
        <Content className="s3">
          <h3 style={{display: 'block'}}>案例2：造作、网易严选 商品详情页</h3>
          <p>系列中最近出现的几项 (多数情况下是最后几项) 更容易储存在我们的短期记忆中。<br/>
近因效应受时间因素的影响比较大，信息在短期记忆中存在的时间本身就不长 (数十秒)，如果有外部的干扰，时间则会更短。</p>
          <p>所以为了防止用户忘记把商品放入购物车，电商 APP 会把「加入购物车」等操作的按钮固定在屏幕下方的右侧，而不会出现在内容的序列当中，因为屏幕底部永远是用户最近能够看到的地方。</p>
          <p>补充：虽然文章说底部按钮是因为近因效应，但是我认为应该只是为了方便单手操作，手机端单手操作比这个近因效应重要多了。</p>
          <div className="img"></div>
        </Content>
        <Content className="s4">
          <h3 style={{display: 'block'}}>案例3：设计中的首位和末位</h3>
          <p>在界面设计中，首位和末位通常是指左上和右下，而在版式设计中，除了左上和右下，还可以是右上和左下。<br/></p>
          <div className="img"></div>
        </Content>
        <Content className="s5">
          <h3 style={{display: 'block'}}>总结</h3>
          <p>1. 在一连串的内容当中，用户更容易记住第一个和最后一个；</p>
          <p>2. 首因效应作用于长期记忆，近因效应作用于短期记忆</p>
        </Content>
      </div>
    );
  }
}
