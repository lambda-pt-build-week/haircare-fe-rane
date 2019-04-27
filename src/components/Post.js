import React from "react";

const Post = ({ imageURL }) => {
  return (
    <div>
      <img src={imageURL} alt="image" />
    </div>
  );
};

export default Post;
