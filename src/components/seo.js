/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import ogImage from '../images/other/fabian-heussner-sharing.png'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <meta name="description" content="Hey, I'm Fabian Heussner, Product Designer with a passion for illustration, currently living in sunny Hamburg. I have a passion for illustration and I'm fascinated by writing code."></meta>
      <meta name="keywords" content="Fabian Heussner Portfolio Interaction Designer UI UX Design Visual Design Illustration Frontend Development Freelance Freelancer Hamburg"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://fabianheussner.netlify.com/"></meta>
      <meta property="og:title" content="Fabian Heussner — Digital Product Designer UI/UX"></meta>
      <meta property="og:description" content="Hey there, I'm Fabian, Product Designer based in sunny Hamburg. "></meta>
      <meta property="og:image" content={ogImage}></meta>
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://fabianheussner.netlify.com/"></meta>
      <meta property="twitter:title" content="Fabian Heussner — Digital Product Designer UI/UX"></meta>
      <meta property="twitter:description" content="Hey there, I'm Fabian, Digital Product Designer based in sunny Hamburg. "></meta>
      <meta property="twitter:image" content={ogImage}></meta>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Fabian Heussner - Digital Product Designer UI/UX`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
