import './all.scss'

import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import React from 'react'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  return (
    <div className="layout">
      <Helmet>
        <html lang="fr" />
        <title>Banane Plantee</title>
        <meta name="description" content="Le site de cuisine zéro dechet !" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Banane Plantee" />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div className="layout-children">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
