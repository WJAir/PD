import React from "react";
import Layout from "@theme/Layout";
import "./index.scss";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { WorkProps } from "@site/pdType";
import { WorksList } from "@site/data/WorksList";

function Work({ site, img, author, info, target }: WorkProps) {
  return (
    <>
      <div className="portfolio_content">
        <div className="portfolio_content_avatar">
          <a href={site} target={target}>
            <Avatar size={64} src={img} icon={<UserOutlined />} />
          </a>
        </div>
        <div className="portfolio_content_text">
          <h3>{author}</h3>
          <p>{info}</p>
        </div>
      </div>
    </>
  );
}

export default class Portfolio extends React.Component {
  render() {
    return (
      <Layout>
        <div className="portfolio">
          <div className="portfolio_title main_title ">
            <h1>作品集</h1>
          </div>

          <div className="portfolio_contentBox">
            {WorksList.map((props, idx) => (
              <Work key={idx} {...props} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
