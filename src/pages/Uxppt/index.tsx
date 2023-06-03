import React from "react";
import "./app.scss";
import Swiper, { ReactIdSwiperProps } from "react-id-swiper";
import "swiper/scss";
import "animate.css";

import P1 from "./pages/p1";
import P2 from "./pages/p2";
import P3 from "./pages/p3";
import P4 from "./pages/p4";
import P5 from "./pages/p5";
import P6 from "./pages/p6";
import P7 from "./pages/p7";
import Layout from "@theme/Layout";

export default class Uxppt extends React.Component {
  render() {
    return (
      <Layout>
          <div className="pages">
            <Swiper
              {...this.swiperConfig}
              activeSlideKey={this.state.showPageIndex.toString()}
              renderPagination={(props) => {
                return (
                  <div className="pagination">
                    {(props.children as any[]).map((d, index) => {
                      return (
                        <i
                          key={index}
                          className={`${
                            index == this.state.showPageIndex && "on"
                          }`}
                          onClick={() => this.onPage(index)}
                        >
                          {index + 1}
                        </i>
                      );
                    })}
                  </div>
                );
              }}
            >
              {this.pageConfigs.map((Config, pageNum) => (
                <div key={pageNum} className={`swiper-slide  p${pageNum + 1}`}>
                  <Config.render spaceNum={this.state.spaceNum[pageNum] || 0} />
                </div>
              ))}
            </Swiper>
            <div className="shangxia">
              <i
                className="iconfonthw ic-jiantou"
                onClick={() => {
                  this.setPageSpace({
                    difference: -1,
                  });
                }}
              />
              <i
                className="iconfonthw ic-jiantou"
                onClick={() => {
                  this.setPageSpace({
                    difference: 1,
                  });
                }}
              />
            </div>
          </div>
      </Layout>
    );
  }

  componentDidMount() {
    document.addEventListener("keyup", (e) => {
      console.log(e.code);
      // 上一个小介绍
      if (e.code == "ArrowLeft") {
        this.setPageSpace({
          difference: -1,
        });
      }
      // 下一个小介绍
      if (e.code == "Space" || e.code == "ArrowRight") {
        this.setPageSpace({
          difference: 1,
        });
      }
    });
  }

  onPage(pageIndex: number) {
    this.setState({
      showPageIndex: pageIndex,
    });
  }

  /** 设置当前页的空格次数 */
  setPageSpace({
    showPageIndex = this.state.showPageIndex,
    spaceNum = 0,
    difference = 0,
  }) {
    const spaceNums = this.state.spaceNum;

    if (difference != 0) {
      spaceNum = (spaceNums[this.state.showPageIndex] || 0) + difference;
    }

    if (spaceNum < 0) spaceNum = 0;

    this.setState((state: any, prop) => {
      state.spaceNum[showPageIndex] = spaceNum;

      return {
        spaceNum: state.spaceNum,
      };
    });
  }

  state = {
    /** 当前显示的页面 */
    showPageIndex: 0,
    /** 当前页面下按下空格次数 */
    spaceNum: [0],
  };

  swiperConfig: ReactIdSwiperProps = {
    direction: "vertical",
    followFinger: false,
    speed: 600,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    on: {
      slideChange: (s) => {
        this.setState({
          // 设置显示的页面
          showPageIndex: s.activeIndex,
        });
        this.setPageSpace({
          showPageIndex: s.activeIndex,
          spaceNum: 0,
        });
      },
      transitionStart() {
        for (let i = 0; i < this.slides.length; i++) {
          const slide = this.slides.eq(i);

          if (!slide?.[0].classList.contains("swiper-slide-active"))
            slide.addClass("aniEnd");
        }
      },
      transitionEnd() {
        const slide = this.slides.eq(this.activeIndex);

        slide.removeClass("aniEnd");
      },
    },
  };

  pageConfigs: any[] = [
    {
      render: P1,
    },
    {
      render: P2,
    },
    {
      render: P3,
    },
    {
      render: P4,
    },
    {
      render: P5,
    },
    {
      render: P6,
    },
    {
      render: P7,
    },
  ];
}
