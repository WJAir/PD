import React from 'react';
import Content from './components/content';
import './p5.scss';

export default class extends React.Component<{spaceNum:number}>{
  render(){
    const max = 6;
    const spaceNum = this.props.spaceNum > max ? max : this.props.spaceNum;

    return (
      <div className={`spaceNum${spaceNum}`}>
        <h1>邻近性原则</h1>
        <Content className="s1">
          <h3>彼此靠近的元素倾向于被视为一个组</h3>
          <p>
            邻近性原则是格式塔组织律中的一个部分，是简洁法则的一种具体的表现场景。<br/>
            在《写给大家看的设计书》中，Robin Williams 将邻近性原则变称为「亲密性」，称呼不一样，但表达的是同一个意思。</p>
        </Content>
        <Content className="s2">
          <h3>同一个组内的元素间距更小</h3>
          <p>
            案例1：起点、闲鱼、虾米音乐<br></br>
            邻近性原则在 UI 设计领域中的应用随处可见，小到一个 icon 的制作，大到一整个界面的排布，无处不在体现着邻近性原则，它也确实更多地应用在界面大大小小各种元素的排版当中。</p>
          <div className="img"></div>
          <p style={{paddingBottom: 50}}>如果我们对这些页面中的元素进行划分，可以得到 n 多不同的组，每一组内又由不同的元素构成。仔细观察我们可以发现元素与元素之间的间距永远要比组与组之间的更小，因为它们接近，所以它们成组，这就是邻近性原则的应用。</p>
        </Content>
        <Content className="s3">
          <h3>具有强关联性的模块互相靠近</h3>
          <p>应用案例2：Behance、Instagram</p>
          <p>
          注意观察分页组件的位置，以及受它影响的区域。这两者可以说是强关联性的，与一方交互，另一方就会发生改变，所以分页组件处于靠近受影响区域的上方，而不会出现在页面其他远离这个区域的位置。</p>
          <div className="img"></div>
        </Content>
        <Content className="s4">
          <h3>注意点1：无关联的元素或组件不要刻意做近</h3>
          <p>
          邻近性原则给予我们另外一个方面的警示，就是如果两个组件没有直接的视觉或交互关系，就不要把它们做得太近，尤其是类似商品列表的组件。<br />

有时候我们拿到一个商品列表的文字段信息并没有这么多，无法把图片右侧的纵向空间合理填满，有的新手设计师 (或在学者) 就会习惯性把标题做到与图片顶对齐，其余元素做到与图片底对齐。</p>
          <div className="img"></div>
          <p style={{paddingBottom: 50}}>这样做的坏处相信知道了临近原则的各位已经了然了，除了标题以外，其他元素看起来都与下面那个商品更接近，矛盾和疑惑就此产生了。那这时候应该怎么办呢？处理方案一般有以下几个：第一，标题向下、价格向上移动2-5pt；第二，利用比邻近性更强的同域原则</p>
        </Content>
        <Content className="s5">
          <h3>注意点2：距离的对比需要易被感知</h3>
          <p>
          所有元素相互间距都很小等于没有邻近性。邻近性原则在间距对比中才会产生效果，而想要让用户感受到邻近性原则的作用，那对比一定要足够明显，能被轻易感知。<br />
          如果间距的大小对比不够明显，那么邻近性法则的作用同样会不够明显，这时候界面元素之间的亲疏关系就依然是模糊的，页面在用户感知中也还是无序的、混乱的。</p>
        </Content>
        <Content className="s6">
          <h3>总结</h3>
          <p>1. 元素的关联性越大，间距就越小；</p>
          <p>2. 无关联的元素不要近到让大家产生误解；</p>
          <p>3. 间距的对比需要能够容易清晰得被感知到；</p>
        </Content>
      </div>
    );
  }
}
