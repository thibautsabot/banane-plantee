import "./index.css";

import Banner from "../components/Banner";
import BlogIndexPage from "../pages/blog";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import React from "react";
import logo from "../img/round-logo.png";

const IndexPage = () => {
  return (
    <Layout>
      <Banner title={"Accueil"} />
      <section role="main" className="section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12 justified">
                      <h1 className="has-text-weight-semibold is-size-2">
                        Bienvenue dans ma cuisine !
                      </h1>
                      <p>
                        Passionnée de cuisine depuis des années, je réalise de
                        nombreuses recettes. En tant amatrice, c’est une cuisine
                        simple du quotidien mais que j’exécute avec le plus de
                        gourmandise possible.
                        <br /> <br />
                        En fonction de mes humeurs et mes envies je vous partage
                        des recettes autant sucrées que salées. <br /> <br />
                        <Link to="/presentation">
                          Si vous voulez en savoir plus sur moi
                        </Link>{" "}
                        et sur les raisons de la création de ce blog, n’hésitez
                        pas à vous rendre dans la partie présentation.
                      </p>
                      <p>
                        Bonne visite sur <strong>Bananeplantée !</strong>
                      </p>
                    </div>
                  </div>
                  <div className="column is-12 last-news">
                    <h1 className="has-text-weight-semibold is-size-2">
                      Derniers articles
                    </h1>
                    <BlogIndexPage />
                  </div>
                  <div className="logoAccueilContainer">
                    <img
                      height="150px"
                      width="116px"
                      className="logoAccueil"
                      alt="logos bananeplantee"
                      src={logo}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
