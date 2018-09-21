import React, { Component } from "react";
import styled from "styled-components";
import ProductListing from "./features/product-list";
import data from "./data/products.json";

const FullPage = styled.div`
  width: 100vw !important;
  margin: 0 !important;
  height: 100vh;
  main {
    height: 75%;
    background: url("about01.jpg") no-repeat center center fixed;
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
    margin 0 auto;
    section {
      order: 1;
      flex-grow: 1;
    }
    section:nth-child(2) {
      padding: 0 1em;
    }
  }
`;

const RecentPicture = styled.div`
  width: 100%;
  height: 10em;
`;

class LandingPage extends Component {
  render() {
    return (
      <Landing>
        <FullPage>
          <main>
            <aside>
              <div />
              <p>trending</p>
              <p>colection</p>
              <p>2019</p>
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
          <div className="header-info">
            <h2>#bestsellers</h2>
            <div className="row">
              <h6>featured</h6>
              <h6>featured</h6>
              <h6>featured</h6>
            </div>
          </div>
        </FullPage>
        <ProductListing products={data.products} />
        <div className="header-info">
          <h2>#recent post</h2>
        </div>
        <main className="recent">
          <section>
            <RecentPicture
              style={{
                background: 'url("about01.jpg") no-repeat center center '
              }}
            />
            <p>art</p>
            <h6>what what</h6>
          </section>
          <section>
            <RecentPicture
              style={{
                background: 'url("about01.jpg") no-repeat center center '
              }}
            />
            <p>art</p>
            <h6>what what</h6>
          </section>
          <section>
            <RecentPicture
              style={{
                background: 'url("about01.jpg") no-repeat center center '
              }}
            />
            <p>art</p>
            <h6>what what</h6>
          </section>
        </main>
        <div>insta</div>
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
        <main className="header-info">
          <h2>newsletter</h2>
          <h6>subscribe our newsletter and get discount 50% off</h6>
        </main>
      </Landing>
    );
  }
}

export default LandingPage;
