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
        <CarouselNavigator onClick={_ => this.navigate(LEFT)}>
          {"<"}
        </CarouselNavigator>
        {this.state.images[0]}
        <CarouselNavigator onClick={_ => this.navigate(RIGHT)}>
          {">"}
        </CarouselNavigator>
      </CarouselWrapper>
    );
  }
}

export default Carousel;

const CarouselWrapper = styled.div`
  //margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
  max-width: 300px;
  min-height: 400px;
  height: fit-content;
`;

const CarouselNavigator = styled.div`
  align-self: center;
  font-size: 24px;
  background-color: PeachPuff;
  border-radius: 50%;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: gainsboro;
  }
`;

// const CarouselImage = styled.img`
//   max-width: 100%;
// `;
