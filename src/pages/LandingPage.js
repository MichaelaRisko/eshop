import React, { Component } from "react";
import styled from "styled-components";
import ProductListing from "../features/product-list";
import data from "../data/products.json";
import posts from "../data/posts.json";
import Instafeed from "react-instafeed";

const FullPage = styled.div`
  width: 100vw !important;
  margin: 0 !important;
  height: 80vh;
  main {
    height: 100%;
    background: url("img/Background.png") no-repeat center center fixed;
    background-size: cover;
    padding: 0 4em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      margin: 0.2em;
    }

    aside {
      margin-top: 55%;
    }

    article {
      margin: auto 0;
    }

    section {
      margin: auto 0;

      div:first-child {
        transform: rotate(90deg);
        padding-right: 1em;
      }
    }
  }
`;

const Landing = styled.div`
  .header-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .row {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .recent {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    padding: 0 2em;
    margin-bottom: 3em;
    section {
      order: 1;
      flex-grow: 1;
      padding-left: 1em;
      div {
        display: flex;
        flex-direction: row;
        p {
          font-size: 0.7em;
          padding-right: 0.6em;
          text-transform: uppercase;
          opacity: 0.5;
        }
      }

      h4 {
        margin: 0;
      }
    }
    section:first-child {
      padding-left: 0;
    }
  }
`;

const RecentPicture = styled.div`
  height: 12em;
  background: no-repeat center center;
  background-size: cover !important;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const RecentPost = props => {
  const picture = `url("img/blog/${props.data.cover_pic} ")`;

  return (
    <section>
      <RecentPicture
        style={{
          background: `${picture}`
        }}
      />
      <div>
        {props.data.category.map((what, i) => (
          <p key={i}>{what}</p>
        ))}
      </div>
      <h4>
        {props.data.heading[0].toUpperCase() + props.data.heading.slice(1)}
      </h4>
    </section>
  );
};

class LandingPage extends Component {
  render() {
    const instafeedTarget = "instafeed";
    const numberOfPosts = 3;
    return (
      <Landing>
        <FullPage>
          <main>
            <aside>
              <div />
              <p />
              <p />
              <p />
            </aside>
            <article>
              <h4>planner</h4>
              <h2>cool header</h2>
              <h4>discover</h4>
            </article>
            <section>
              <div>
                <p>follow us</p>
              </div>
              <img />
              <img />
              <img />
            </section>
          </main>
        </FullPage>
        <ProductListing products={data.products} />
        <div className="header-info">
          <h2>#recent post</h2>
        </div>
        <main className="recent">
          {posts.posts.slice(0, numberOfPosts).map((data, i) => (
            <RecentPost data={data} key={i} />
          ))}
        </main>
        <div className="header-info">
          <h2>#instagram</h2>
        </div>
        <div id={instafeedTarget}>
          <Instafeed
            limit="7"
            ref="instafeed"
            resolution="low_resolution"
            sortBy="most-recent"
            target={instafeedTarget}
            template={`
            <a href='{{link}}' target='_blank' >
            <div style="background: url({{image}}) no-repeat center center ;
              background-size: cover;">
            </div>        
            </a>
            `}
            userId="5532662968"
            clientId="55495b416e6a42b1ab990310d1b32db7"
            accessToken="5532662968.1677ed0.f0f4d2da3f02486d85507d0868575603"
          />
        </div>
        <main className="row" style={{ width: "100%" }}>
          <section>
            <div />
            <p>free delivery</p>
            <h6>instant download</h6>
          </section>
          <section>
            <div />
            <p>safe payments</p>
            <h6>credit cards</h6>
          </section>
          <section>
            <div />
            <p>customent support</p>
            <h6>24/7 feedback</h6>
          </section>
          <section>
            <div />
            <p>free returns</p>
            <h6>or customized product</h6>
          </section>
        </main>
      </Landing>
    );
  }
}

export default LandingPage;
