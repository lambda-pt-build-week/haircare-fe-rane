import React from "react";
import styled from "styled-components";

const PostFooter = ({ likes, username }) => {
  return (
    <Footer>
      <div>HEART {likes}</div>
      <div>username</div>
    </Footer>
  );
};

export default PostFooter;

const Footer = styled.div`
  width: 100%;
  border: 2px solid pink;
  display: flex;
  flex-direction: row;
  justify-contents: space-between;
`;
