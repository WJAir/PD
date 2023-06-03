import React from 'react';
import Content from './components/content';
import './p2.scss';

/**
 * 美即是好用的效应
 * 我们可能经常会把页面操作的方便作为设计的最主要原则，但我们有时候把操作界面做的操作极其简单
 * 却好还是经常遭到用户抱怨，丑的界面有可能让用户不愿意花时间去看，去了解你的产品。
 *
 * 案例1：Everest官方主页
 * 我们接下来看一下别人的设计案例：这个网站最求的是界面体验，弱化了很多可用性的操作
 * 但是这个网站有一个很流畅生动的动画，有很不一样的体验，操作并不方便，却让你想去操作一下，这样你就更有耐心看下去。
 * 所以，一个操作方便，但是界面丑陋的画面可能十分的失败，大部分普通用户要的只是一种好的感觉。
 *
 * 案例2：潮汐App首页
 * 这个页面右边应该是产品原型，左边是UI最终设计效果
 * 可以说产品考虑的是操作方便性，UI则只管好看
 * 虽然这个界面牺牲了部分操作便捷，但完全不影响使用，而且界面更加有层次的感觉，左右滚动的卡片在操作上也不会让用户反感。
 *
 *
 * 结论：
 * 美即好用，只是用户的心理感觉，好看的页面能淡化用户对操作的流程的效率损失。
 * 但不是一味追求界面，而忽略操作体验。
 */

export default class extends React.Component<{spaceNum:number}>{
  render(){
    const spaceNum = this.props.spaceNum > 3 ? 3 : this.props.spaceNum;

    return (
      <div className={`spaceNum${spaceNum}`}>
        <h1>美即好用效应</h1>
        <Content className="s1">
          <h3>当界面被设计得足够美观时，用户往往会容忍一些较为轻微、影响较小的可用性问题。</h3>
          <p>1995 年，日立设计中心的研究员 Massaki Kurosu 和 Kaori Kashimura 通过26种不同的 ATM 交互界面对 252 位参与者进行详细的用户体验测试，并对界面中表观可用性的决定因素 (比如数字键布局、操作流程等) 进行了评估。结果发现，这些因素中很大一部分对真实可用性的影响微乎其微，反而界面美观度对真实可用性的影响出乎预料的大。</p>
        </Content>
        <Content className="s2">
          <h3>应用案例1：Everest官方主页</h3>
          <iframe src="https://www.everest.agency/"/>
        </Content>
        <Content className="s3">
          <h3>应用案例 2：潮汐 APP 首页</h3>
          <div className="img"/>
        </Content>
      </div>
    );
  }
}
