require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://bananeplantee.fr",
    title: "Banane Plantee",
    description: "Le site de cuisine zéro dechet !",
  },
  flags: {
    LAZY_IMAGES: true,
    QUERY_ON_DEMAND: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Banane plantee",
        short_name: "Banane plantee",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#008000",
        display: "standalone",
        icon: "src/img/square-icon.png",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        indentedSyntax: true,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-mailgo",
      options: {
        mailgoConfig: {
          lang: "fr",
          forceLang: true,
          showFooter: false,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1500,
              tracedSVG: true,
              withWebp: true,
              // withAvif: true,
              // disableBgImage: true, /* enable bg images for traced svg */
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        defer: true,
        storage: "none",
        storeGac: false,
        allowAdFeatures: false,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array,
  ],
};
