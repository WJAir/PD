import React, { Component } from "react";

interface ImgProps {
  src: string;
  title?: string;
  alt?: string;
  center?: boolean;
  position?: "left" | "center" | "right";
  width?: string;
  height?: string;
}

interface ImgState {
  title: string;
  alt: string;
  position: string;
}

class Img extends Component<ImgProps, ImgState> {
  constructor(props: ImgProps) {
    super(props);
    this.state = {
      title: this.props.title || this.getFileName(this.props.src),
      alt: this.props.alt || "加载失败！",
      position: this.props.center
        ? "center"
        : this.positions(this.props.position),
    };
  }

  getFileName = (imgSrc: string) => {
    return imgSrc.substring(
      imgSrc.lastIndexOf("/") + 1,
      imgSrc.lastIndexOf(".")
    );
  };

  positions = (type: string | undefined) => {
    const map: Record<string, string> = {
      left: "start",
      center: "center",
      right: "end",
    };

    return map[type as string] || "";
  };

  componentDidMount() {
    if (!this.props.title) {
      const fileNames = this.getFileName(this.props.src);
      this.setState({ title: fileNames });
    }

    if (this.props.center && !this.props.position) {
      this.setState({ position: "center" });
    }
  }

  componentDidUpdate(prevProps: ImgProps) {
    if (this.props.title !== prevProps.title) {
      this.setState({ title: this.props.title || "" });
    }

    if (this.props.alt !== prevProps.alt) {
      this.setState({ alt: this.props.alt || "" });
    }

    if (this.props.position !== prevProps.position) {
      this.setState({ position: this.positions(this.props.position) });
    }
  }

  render() {
    const { src, width, height } = this.props;
    const { title, alt, position } = this.state;

    const styles = {
      display: "flex",
      justifyContent: position,
    };

    return (
      <div style={styles}>
        <img
          title={title}
          alt={alt}
          src={src}
          style={{
            width: width || "",
            height: height || "",
          }}
        />
      </div>
    );
  }
}

export default Img;
