import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageWork from "../components/stages/stagework"
import LabelImage from "../components/modules/labelimage"
// import ProjectSmall from "../components/project/projectsmall"

import "./mystyles.scss"

import selectedClients from '../images/selected-clients.webp'

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="See my work" />

      <StageWork 
        pagetitle={["my ", <strong>work</strong>]}
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      />

      <section className="section">
        <div className="container is-widescreen">
            <LabelImage image={selectedClients} />
        </div>
      </section>

    </Layout>
  )
}


export default WorkPage