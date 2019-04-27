import React from "react";
import styled from "styled-components";

const Post = ({ imageURL }) => {
  return (
    <div>
      <PostImage src={imageURL} alt="image" />
    </div>
  );
};

export default Post;

const PostImage = styled.img`
  width: 200px;
`;
