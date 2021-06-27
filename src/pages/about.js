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


import iconDevelopment from '../images/icon-code.svg'
import iconIllustration from '../images/icon-illustration.svg'
import iconGames from '../images/icon-games.svg'
import iconAgile from '../images/icon-agile.svg'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About me" />
      <StageAbout 
          pagetitle={["about ", <strong>me</strong>]}
          subtitle="Hey, I'm Fabian, UI and Visual Designer, currently living in sunny Hamburg. 🌦️ 
          I have a passion for illustration and I'm fascinated by writing code. 
          Currently I'm working on complex design systems, web and app interfaces, 
          the emotionalization of brands and beautifying the resulting empty states and onboardings."
      />

      <section className="section accordion-section skills">
          <div className="container">

            <Fade bottom>
              {/* <Accordion 
                icon={iconInterface}
                title="UX and Interface Design"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa sociis natoque penatibus et magnis dis parturient."
              /> */}
              <Accordion 
                icon={iconIllustration}
                title="Illustration"
                content="Although illustration is not my main focus, I appreciate the variety it offers to interface design. For various games, campaigns and empty states, I was able to use my talent as a visual designer and illustrator in miscellaneous teams."
              />
              <Accordion 
                icon={iconGames}
                title="Gamification"
                content="While working on a long-term for Deepblue, I was able to contribute in several game developments. I was able to apply my own knowledge and experience in gaming and eSports and took over the conception and design of game worlds, their interactive objects and the connecting user interfaces."
              />
              <Accordion 
                icon={iconDevelopment}
                title="Development"
                content="I have been enthusiastic about the independent implementation of websites for many years. There I was able to immerse myself in an exciting world that, besides having a lot of fun, one time or another my high tolerance for frustration was put to the test. I acquired valuable knowledge in dealing with HTML and SCSS and was able to use this when programming my own templates and themes for Wordpress based on JointsWP / Foundation. I have now been working with React on the basis of Gatsby for the first time in my own portfolio. The understanding I have gained allows me to benefit in particular from the close collaboration between development and design."
              />
              <Accordion 
                icon={iconAgile}
                title="Agile processes"
                content="During the work for Osram Lightelligence, I was able to gain a lot of experience with agile processes. The work on the portal, the various applications and the underlying design system was characterized by constant exchange. As the UI/UX team we assumed the entire communication with product owners and the close coordination with development teams."
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
