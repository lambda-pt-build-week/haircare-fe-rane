import React, { Component } from "react";

class CarouselImage extends Component {
  state = {
    style: {}
  };

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setHeight);
  }

  setHeight = () => {
    let width = this.imageRef.current.clientWidth;
    let height = this.imageRef.current.clientHeight;
    console.log(height, width);

    if (width > Number(this.props.maxWidth)) {
      const ratio = this.props.maxWidth / width;
      width = Number(this.props.maxWidth);
      height = this.imageRef.current.clientHeight * ratio;
    }
    console.log(height, width);
    this.setState({ style: { height, width } });
  };

  render() {
    return (
      <img
        src={this.props.url}
        alt={this.props.desc}
        ref={this.imageRef}
        style={this.state.style}
      />
    );
  }
}

export default CarouselImage;
