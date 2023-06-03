import React, { ReactNode } from 'react';

export default class extends React.PureComponent<{className?:string, style?:React.CSSProperties, children:ReactNode}>{
  render(){
    return (
      <div className={`content ${this.props.className}`} style={this.props.style}>{this.props.children}</div>
    );
  }
}
