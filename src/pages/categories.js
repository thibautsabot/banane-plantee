import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import React from "react";

const TITLE = {
  autres: "Autres",
  divers: "Autres articles",
  zerodechet: "Zéro Déchet",
  entree: "Entrées",
  vegetarien: "Plats végétariens",
  boissons: "Boissons",
  plats: "Plats",
  antiinflam: "Anti-inflammatoire",
  dessert: "Desserts",
  petitdej: "Petits déjeuners",
  antigaspi: "Anti-gaspi",
  apero: "Apéritif",
};

const Categories = ({ pageContext, data }) => {
  return (
    <Layout>
      <section>
        <Helmet title="Catégories" />
        <Banner title="Catégories" />
        <div className="container content">
          <div role="main">placeholder </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
