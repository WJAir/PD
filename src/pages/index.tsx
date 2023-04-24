import React from "react";
import Welcome from "../components/HomePage";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Welcome />
      </Layout>
    );
  }
}

export default function IndexPage() {
  return <BrowserOnly>{() => <App />}</BrowserOnly>;
}
