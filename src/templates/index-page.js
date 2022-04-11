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
                        Après quelques mois d'absence, je reviens vous partager
                        mes recettes de cuisine et mes astuces zéro déchet.
                        <br /> <br />
                        Toujours autant passionnée de cuisine, je continue à
                        réaliser de nombreuses recettes et je suis toujours dans
                        une démarche de réduction de mes déchets. Mais cela
                        demande du temps, de la patience et de l'adaptation
                        alors sur ce blog je vous partage mon expérience, mes
                        astuces et mon organisation en ce qui concerne le zéro
                        déchet. <br /> <br />
                        <Link to="/presentation">
                          Si vous voulez en savoir plus sur moi
                        </Link>
                        , ma prise de conscience et mon envie de réduire mon
                        impact écologique, n’hésitez pas à vous rendre dans la
                        partie présentation.
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
