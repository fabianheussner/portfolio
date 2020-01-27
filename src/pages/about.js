import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Accordion from "../components/accordion/accordion"
import StageAbout from "../components/stages/stageabout"
import LabelImage from '../components/modules/labelimage'

import "../pages/mystyles.scss"

import iconInterface from '../images/icon-interface.svg'
import iconDevelopment from '../images/icon-code.svg'
import iconIllustration from '../images/icon-illustration.svg'
import iconGames from '../images/icon-games.svg'
import iconAgile from '../images/icon-agile.svg'
import toolLogos from '../images/selected-clients.webp'

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

      <section className="section accordion-section skills">
          <div className="container">

              <Accordion 
                icon={iconInterface}
                title="UX and Interface Design"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              />
              <Accordion 
                icon={iconDevelopment}
                title="Development"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              />
              <Accordion 
                icon={iconIllustration}
                title="Illustration"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              />
              <Accordion 
                icon={iconGames}
                title="Gamification"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              />
              <Accordion 
                icon={iconAgile}
                title="Agile and Colaboration"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              />

            </div>
        </section>
        <section className="section tools">
            <div className="container is-widescreen">
              <LabelImage image={toolLogos} />
            </div>
        </section>

    </Layout>
  )
}

export default AboutPage
