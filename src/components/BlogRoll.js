import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import PropTypes from "prop-types";
import React from "react";

const BlogRoll = ({ data, isHome }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className={`is-parent column is-${isHome ? "4" : "6"}`}
            key={post.id}
          >
            <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header className={isHome && "flexColumn"}>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Image miniature pour ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className={`article-link title has-text-primary is-size-${
                      isHome ? 4 : 3
                    }`}
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span>{!isHome ? ' •' : ''}</span>
                  <span className="subtitle is-size-5 is-block">
                    {new Date(post.frontmatter.date).toLocaleDateString(
                      "fr-FR",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </span>
                </p>
              </header>
              <p>
                {!isHome && (
                  <>
                    {post.excerpt}
                    <br />
                    <br />
                  </>
                )}
                <Link className="button" to={post.fields.slug}>
                  Lire l'article →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default BlogRoll;
