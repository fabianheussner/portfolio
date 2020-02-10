import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageAbout from "../components/stages/stageabout"
import Accordion from "../components/accordion/accordion"
import TableLarge from '../components/table/table-large'
import FurtherInfo from '../components/modules/furtherinfo'
import Request from '../components/modules/request'
import Fade from 'react-reveal/Fade'

import "../pages/mystyles.scss"

import iconInterface from '../images/icon-interface.svg'
import iconDevelopment from '../images/icon-code.svg'
import iconIllustration from '../images/icon-illustration.svg'
import iconGames from '../images/icon-games.svg'
import iconAgile from '../images/icon-agile.svg'

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

            <Fade bottom>
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
            </Fade>


            </div>
        </section>

        <TableLarge />

        <FurtherInfo />

        <Request />

    </Layout>
  )
}

export default AboutPage
