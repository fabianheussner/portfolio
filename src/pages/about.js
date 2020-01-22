import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Accordion from "../components/accordion/accordion"
import StageAbout from "../components/stages/stageabout"

import "../pages/mystyles.scss"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Learn about me" />
      <StageAbout 
          pagetitle={["that's ", <strong>me</strong>]}
          subtitle="Lorem ipsum dolor sit amet, 
          consectetuer adipiscing elit. Aenean commodo 
          ligula eget dolor. Aenean massa. Cum sociis 
          natoque penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus."
      />

      <section className="section accordion-section">
          <div className="container">

              <Accordion 
                title="User Experience and Interface Design"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              />
              <Accordion 
                title="Development"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              />
              <Accordion 
                title="Illustration"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              />

            </div>
        </section>

    </Layout>
  )
}

export default AboutPage
