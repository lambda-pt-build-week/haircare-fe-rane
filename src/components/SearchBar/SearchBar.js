import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Fuse from "fuse.js";

import { searchPosts, fetchPosts, stopSearch } from "../../actions/postActions";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    let { value } = e.target;
    this.setState({ term: value }, () => {
      this.state.term === "" ? this.doCancel() : this.doSearch();
    });
  };

  doSearch = e => {
    const options = {
      keys: ["description"]
    };

    //console.log(this.props.posts)

    let posts = this.props.searching
      ? this.props.searchResults
      : this.props.posts;

    console.log(posts);

    let fuse = new Fuse(posts, options);

    e && e.preventDefault();
    this.props.searchPosts(fuse.search(this.state.term));
  };

  doCancel = e => {
    this.setState({ term: "" });
    this.props.stopSearch();
    //this.props.fetchPosts();
  };

  render() {
    return (
      <SearchBarWrapper>
        <form onSubmit={event => this.doSearch(event)}>
          <input
            id="searchTerm"
            type={"text"}
            placeholder={"\u2315 Search"}
            value={this.state.term}
            onChange={event => this.onInputChange(event)}
          />
        </form>
        {this.state.term && (
          <CancelMe onClick={e => this.doCancel(e)}>X</CancelMe>
        )}
      </SearchBarWrapper>
    );
  }
}

const mapStateToProps = ({
  postReducer: { posts, searching, searchResults }
}) => {
  return {
    posts,
    searching,
    searchResults
  };
};

export default connect(
  mapStateToProps,
  { searchPosts, fetchPosts, stopSearch }
)(SearchBar);

// Styles

const CancelMe = styled.span`
  font-size: 12px;
  background-color: grey;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-left: -55px;
  align-self: center;
  cursor: pointer;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-contents: center;
  width: 90%;
  max-width: 800px;
  margin: 25px auto;
  //border: 2px solid pink;

  h1 {
    font-family: "Pacifico", cursive;
    margin-left: 10px;
    font-size: 24px;
  }
  form {
    width: 100%;
    //margin: 0 10%;
  }
  input {
    margin: 10px auto;
    height: 30px;
    width: 90%;
    border-radius: 10px;
    padding-left: 10px;
  }
`;
