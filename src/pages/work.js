import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Clients from "../components/modules/clients"
// import ProjectSmall from "../components/project/projectsmall"

import "./mystyles.scss"

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="See my work" />

      {/* <StageWork /> */}

      <section className="section">
        <div className="container is-widescreen">
            <Clients />
        </div>
      </section>

    </Layout>
  )
}


export default WorkPage