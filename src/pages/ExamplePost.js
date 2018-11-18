import React from "react";
import styled from "styled-components";
import posts from "../data/posts.json";

const Post = styled.div`
  margin: 2em 5em;
  img {
    margin: 0 auto;
  }
`;

export default function ExamplePost(props) {
  return (
    <Post>
      <h1>{posts.posts[0].heading}</h1>
      <h6>{posts.posts[0].subheading}</h6>
      <figure>
        <img src={`/img/blog/c01.jpg`} alt={`${posts.posts[0].heading}`} />
      </figure>
      {posts.posts[0].text.map((data, i) => (
        <div key={i}>
          <p key={i}>{data.part}</p>
          {posts.posts[0].pictures[i] ? (
            <figure>
              {" "}
              <img src={`/img/blog/${posts.posts[0].pictures[i]}`} />{" "}
            </figure>
          ) : null}
        </div>
      ))}
    </Post>
  );
}
