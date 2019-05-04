import React, { Component } from "react";
import styled from "styled-components";

class CarouselImage extends Component {
  state = {
    style: { opacity: 0 }
    //loaded: false
  };

  setHeight = () => {
    let tmpImage = new Image();
    // let width = 0,
    //   height = 0;
    // //let height = 0;
    //
    // tmpImage.onload = _ => {
    //   height = tmpImage.height;
    //   width = tmpImage.width;
    // };

    tmpImage.src = this.props.url;

    if (this.state.opacity === 1) return;

    this.setState(state => {
      let width = tmpImage.width;
      let height = tmpImage.height;

      console.log(height, width);
      if (width > Number(this.props.maxWidth)) {
        const ratio = this.props.maxWidth / width;
        width = Number(this.props.maxWidth);
        height *= ratio;
      }
      console.log(height, width);

      return { style: { width, height, opacity: 1 } };
    });
  };

  render() {
    return (
      <ImgWrapper
        onLoad={e => {
          this.setHeight();
        }}
        src={this.props.url}
        alt={this.props.desc}
        style={this.state.style}
      />
    );
  }
}

export default CarouselImage;

const ImgWrapper = styled.img`
  align-self: center;
`;
