import Banner from "../components/Banner";
import BlogRoll from "../components/BlogRoll";
import { CATEGORIES } from "../components/Categories";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import React from "react";
import { graphql } from "gatsby";

const TagRoute = ({ pageContext, data }) => {
  const tag = pageContext.tag;
  const title = data.site.siteMetadata?.title;

  return (
    <Layout>
      <section>
        <Helmet title={`${tag} | ${title}`} />
        <Banner title={CATEGORIES[tag]?.title || "Blog"} />
        <div className="container content">
          <div role="main">
            <BlogRoll data={data} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
            featuredpost
            featuredimage {
              childImageSharp {
                gatsbyImageData(
                  width: 180
                  height: 180
                  layout: FIXED
                  placeholder: DOMINANT_COLOR
                  transformOptions: { fit: COVER, cropFocus: CENTER }
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;
