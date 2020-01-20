import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"

import "../pages/mystyles.scss"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Learn about me" />

      <section class="section">
        <div className="container">
          <h2 className="title">About</h2>
        </div>
      </section>

    </Layout>
  )
}

export default AboutPage
