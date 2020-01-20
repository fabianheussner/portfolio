import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Skills from "../components/modules/skills"
import ProjectSmall from "../components/project/projectsmall"

import "./mystyles.scss"

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="See my work" />

      <section className="section">
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-4">
              <Skills />
            </div>
            <div className="column is-6 is-offset-2">
              <ProjectSmall 
                client="Osram" 
                projecttitle="lightelligence docs" 
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
                tags="UI UX Concept Illustration"
              />
              <ProjectSmall 
                client="Osram" 
                projecttitle="lightelligence docs" 
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
                tags="UI UX Concept Illustration"
              />
              <ProjectSmall 
                client="Osram" 
                projecttitle="lightelligence docs" 
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
                tags="UI UX Concept Illustration"
              />
              <ProjectSmall 
                client="Osram" 
                projecttitle="lightelligence docs" 
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
                tags="UI UX Concept Illustration"
              />
              <ProjectSmall 
                client="Osram" 
                projecttitle="lightelligence docs" 
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
                tags="UI UX Concept Illustration"
              />
              <ProjectSmall 
                client="Osram" 
                projecttitle="lightelligence docs" 
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
                tags="UI UX Concept Illustration"
              />
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}


export default WorkPage