import React, { Component } from "react";
import styled from "styled-components";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    let { value } = e.target;
    this.setState(state => ({ term: value }));
  };

  onSearch = e => {
    e.preventDefault();
    console.log("searching");
  };
  render() {
    return (
      <SearchBarWrapper>
        <form onSubmit={event => this.onSearch(event)}>
          <input
            id="searchTerm"
            type={"text"}
            placeholder={"\u2315 Search"}
            value={this.state.term}
            onChange={event => this.onInputChange(event)}
          />
        </form>
      </SearchBarWrapper>
    );
  }
}

// Styles
const SearchBarWrapper = styled.div`
  //display: flex;
  // align-items: center;
  // justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 25px auto;

  h1 {
    font-family: "Pacifico", cursive;
    margin-left: 10px;
    font-size: 24px;
  }
  input {
    margin: 10px auto;
    height: 30px;
    width: 90%;
    //width: 200px;
    border-radius: 10px;
    padding-left: 10px;
    //text-align: center;
  }
`;

export default SearchBar;
