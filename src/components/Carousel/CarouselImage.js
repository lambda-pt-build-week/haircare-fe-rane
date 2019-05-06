import React, { Component } from "react";
import styled from "styled-components";

class CarouselImage extends Component {
  state = {
    style: { opacity: 0 },
    loaded: false
  };

  setHeight = () => {
    let tmpImage = new Image();

    tmpImage.src = this.props.url;

    this.setState(state => {
      let width = tmpImage.width;
      let height = tmpImage.height;

      if (width > Number(this.props.maxWidth)) {
        const ratio = this.props.maxWidth / width;
        width = Number(this.props.maxWidth);
        height *= ratio;
      }

      return { style: { width, height, opacity: 1 }, loaded: true };
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
