import React, { Component } from "react";
import styled from "styled-components";
import CarouselImage from "./CarouselImage";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

class Carousel extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    let images = [];
    this.props.images.forEach(image =>
      images.push(
        <CarouselImage url={image.url} desc={image.desc} maxWidth="300" />
      )
    );

    this.setState({ images });
    console.log(images);
  }

  navigate = direction => {
    let tmpImg,
      images = this.state.images;

    switch (direction) {
      case LEFT:
        tmpImg = images.pop();
        images.unshift(tmpImg);
        break;
      case RIGHT:
        tmpImg = images.shift();
        images.push(tmpImg);
        break;
    }

    this.setState(prevState => ({ images }));
  };

  render() {
    return (
      <CarouselWrapper>
        <ImageWrapper>{this.state.images[0]}</ImageWrapper>
        <NavWrapper>
          <CarouselNavigator onClick={_ => this.navigate(LEFT)}>
            <span>{"<"}</span>
          </CarouselNavigator>
          <CarouselNavigator onClick={_ => this.navigate(RIGHT)}>
            <span>{">"}</span>
          </CarouselNavigator>
        </NavWrapper>
      </CarouselWrapper>
    );
  }
}

export default Carousel;

const CarouselWrapper = styled.div`
  //margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  max-width: 300px;
  min-height: 400px;
  height: fit-content;
`;

const CarouselNavigator = styled.div`
  align-self: center;
  align-items: center;
  vertical-align: center;
  font-size: 24px;
  cursor: pointer;
  span {
    padding: 5% 0;
`;

const ImageWrapper = styled.div`
  height: 400px;
  display: flex;
  //flex-direction: column;
  //align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -225px;
  margin-left: -25px;
  width: 350px;
`;

// const CarouselImage = styled.img`
//   max-width: 100%;
// `;
