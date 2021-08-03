import Banner from "../components/Banner";
import { CATEGORIES } from "../components/Categories";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import React from "react";

const CategoriesPage = () => {
  const recipeCategories = Object.entries(CATEGORIES).filter(
    ([slug]) => slug !== "zerodechet" && slug !== "divers"
  );

  return (
    <Layout>
      <section>
        <Helmet title="Catégories" />
        <Banner title="Catégories" />
        <div className="recupeContainer container content">
          <div className="recipePage" role="main">
            {recipeCategories.map(([slug, { title, Image }]) => {
              return (
                <div className="recipeCatContainer">
                  <Link className="recipeTitle" to={`/tags/${slug}`}>
                    {title}
                  </Link>
                  <div className="shade" />
                  {Image && <Image title={title} />}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoriesPage;
