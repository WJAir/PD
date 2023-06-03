import React from 'react';
import Content from './components/content';
import './p3.scss';

/**
 * 希克定律
 *
 * 说人话，就是提供尽可能少的选项
 * 下面这个是对这个定律的研究历史，我就不介绍了。
 *
 * 我们看案例1：APP Store 与 苹果官网
 * 苹果在这几年可以说是不遗余力地缩减给予用户的选择，从接口 到 iOS 原生应用，我们可以看到不论是从产品还是设计，苹果都义无反顾地遵循着希克定律。
 *
 * 这个例子是页面元素比简单
 * 我们经常可能遇到的是元素复杂，选项很多的情况。
 *
 * 看案例2：京东、虎课分类页
 * 分类如果全部展示需要达到百种或者上千种，
 * 这个案例的处理方式也是很常见的，就是归类。
 *
 * 结论：
 * 这个文章里面还说明了其他更加详细的问题解决方式，但也并非完美，
 * 希克定律是一个不断追求的方向，以后肯定能见到更多好的设计跟创意，
 *
 * 对这个希克定律总结引用知乎上一位网友关小羽的话：
 * 对用户来讲，选择太多就等于没有选择，尤其我们绝大多数时候都处于信息过剩的状况，需要解决的问题已经不是「选择不够」，而是「选择不够好」。
 */

export default class extends React.Component<{spaceNum:number}>{
  render(){
    const max = 5;
    const spaceNum = this.props.spaceNum > max ? max : this.props.spaceNum;


    return (
      <div className={`spaceNum${spaceNum}`}>
        <h1>希克定律</h1>
        <Content className="s1">
          <h3>提供尽可能少的选项</h3>
          <p>1868 年，Franciscus Donders 发现多重刺激之下人们做出选择需要花更久的时间；1885 年，J. Merkel 进一步发现当这些刺激变得更大时，同样会阻碍人们做出选择。心理学家认为这种现象与信息理论高度吻合，故而做出进一步的研究。<br></br>

          1981 年，Hick 在研究中发现人们做出选择所需要的时间与候选数量是呈对数关系的，而 Hyman 在细化研究之下声称这两者的关系应该呈线性。但总之，无论是对数还是线性，选择数量越多，我们就需要花费更多的时间作出决定 (候选项的复杂度相等的情况下)。</p>
        </Content>
        <Content className="s2">
          <h3 style={{display: 'block'}}>案例1：APP Store</h3>
          <div className="img" style={{width: 700, display: 'inline-block', marginRight: 50}}/>
          <iframe style={{width: 350, height: 520, display: 'inline-block'}} src="https://www.apple.com.cn/"></iframe>
        </Content>
        <Content className="s3">
          <h3>必须有较多选项的时候</h3>
          <p>有时候我们又不得不面临应用具有大量可选项的情况，比如涉及商品选择、设置列表的时候，再比如一些体量比较庞大，功能点多的应用时，多选项是不可避免，怎么规避如此多的选项带给用户的选择压力，是设计师需要反复思考的一个问题。</p>
        </Content>
        <Content className="s4">
          <h3>案例2：京东、虎课分类页</h3>
          <div className="img"/>
        </Content>
        <Content className="s5">
          <h3>对这个希克定律总结引用知乎上一位网友关小羽的话</h3>
          <p>对用户来讲，选择太多就等于没有选择，尤其我们绝大多数时候都处于信息过剩的状况，需要解决的问题已经不是「选择不够」，而是「选择不够好」。</p>
        </Content>
      </div>
    );
  }
}
