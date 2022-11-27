import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const CATEGORIES = {
  apero: {
    title: "Apéritif",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/apero.jpg"
        alt="Catégorie apéritif"
      />
    ),
  },
  entree: {
    title: "Entrées",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/entree.jpg"
        alt="Catégorie entrées"
      />
    ),
  },
  vegetarien: {
    title: "Végétarien",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/vegetarien.jpg"
        alt="Catégorie plats végétariens"
      />
    ),
  },
  plats: {
    title: "Plats",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/plats.jpg"
        alt="Catégorie plats"
      />
    ),
  },
  dessert: {
    title: "Desserts",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/dessert.jpg"
        alt="Catégorie desserts"
      />
    ),
  },
  petitdej: {
    title: "Petits déjeuners",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/petitdej.jpg"
        alt="Catégorie petits déjeuners"
      />
    ),
  },
  boissons: {
    title: "Boissons",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/boissons.jpg"
        alt="Catégorie boissons"
      />
    ),
  },
  autres: {
    title: "Autres",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/autres.jpg"
        alt="Catégorie autres"
      />
    ),
  },
  antigaspi: {
    title: "Anti-gaspi",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/antigaspi.jpg"
        alt="Catégorie anti-gaspi"
      />
    ),
  },
  antiinflam: {
    title: "Anti-inflammatoire",
    Image: () => (
      <StaticImage
        width={300}
        height={300}
        quality={70}
        src="../img/categories/antiinflam.jpg"
        alt="Catégorie anti-inflammatoire"
      />
    ),
  },
  zerodechet: {
    title: "Zéro Déchet",
    Image: null,
  },
};

const useSiteRecipeCategories = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SITE_RECIPE_CATEGORIES_QUERY {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            tag: fieldValue
          }
        }
      }
    `
  );

  return allMarkdownRemark.group.filter(
    (tag) => tag.tag !== "zerodechet" && tag.tag !== "divers"
  );
};

export { useSiteRecipeCategories, CATEGORIES };
