import React, {Component} from "react";
import styled from "styled-components";

const About = styled.div`
  img {
    max-width: 100%;
  }

  article {
    height: 300px;
    display: flex;
    flex-direction: row;
    margin: 2em 0;
    div {
      width: 50%;
      img {
        object-fit: cover;
        height: 300px;
      }
    }

    .article-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2em;
      background-color: rgb(219, 210, 207);
      color: white;
      h4 {
        text-transform: uppercase;
        letter-spacing: 0.3em;
        font-family: "Roboto", sans-serif;
      }
      .info {
        font-family: "Abhaya Libre", serif;
        font-size: 1.1em;
      }
    }
  }
`;

const StyledBtn = styled.p`
  border: 1px solid;
  padding: 0.5em !important;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  max-width: 28%;
  font-size: 90%;
  text-align: center;

  &:hover {
    transform: scale(1.05, 1.025);
    transition-duration: 0.25s;
    cursor: pointer;
  }
`;

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     
  }
}

  

  render(){
    return (
      
      <About>
        <h2> About </h2>
        
        <img title={"about us"} src={"about01.jpg"} />
        <p>
          Founded in 2014, designer Marissa took her experience working as a
          graphic designer and photographer to create printed organizational goods
          with elevated quality, simple design and thoughtfully curated materials.
          We are an independent design studio providing minimal and intentional
          products that help women achieve organization.
        </p>
        <article>
          <div>
            <img title={"about us"} src={"about01.jpg"} />
          </div>
          <div className="article-info">
            <h4>products with purpouse</h4>
            <p className="info">
              we strongly believe that our products are created just for you with
              purpousec designer and photographer to create printed organizational
              goods with elevated quality, simple design and thoughtfully curated
              materials. We are an independ
            </p>
            <StyledBtn>Read more</StyledBtn>
          </div>
        </article>
        <article>
          <div className="article-info">
            <h4>products with purpouse</h4>
            <p className="info">we stronglndepend</p>
            <StyledBtn>Read more</StyledBtn>
          </div>
          <div>
            <img title={"about us"} src={"about01.jpg"} />
          </div>
        </article>
      </About>
     
    );
  }
}

export default  AboutPage;