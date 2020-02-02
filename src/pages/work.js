import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageWork from "../components/stages/stagework"
import ProjectSmall from "../components/project/projectsmall"
import Request from '../components/modules/request'

import "./mystyles.scss"

import projectThumbnail from '../images/project-docs/osram-docs-featured.webp'
import TableSmall from "../components/table/table-small"

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

      <TableSmall />

      <section className="section projects">
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-12">
              <h5 className="label" style={{
                marginBottom: '4rem',
                fontSize: '.875rem',
                fontWeight: '600',
                letterSpacing: '.125rem',
                textTransform: 'uppercase',
                color: '#A8ABBC',
              }}>Selected projects</h5>
            </div>
          </div>
          <div className="columns">
            <ProjectSmall 
              link="/osramdocs/"
              featuredImage={projectThumbnail}
              projectTags="Documentation Website &nbsp;&nbsp;&mdash;&nbsp;&nbsp; Osram"
              projectTitle="Placeholder Title"
            />
            <ProjectSmall 
              offset="is-offset-2"
              link="/osramdocs/"
              featuredImage={projectThumbnail}
              projectTags="Documentation Website &nbsp;&nbsp;&mdash;&nbsp;&nbsp; Osram"
              projectTitle="Placeholder Title"
            />
          </div>
          <div className="columns">
            <ProjectSmall 
              link="/osramdocs/"
              featuredImage={projectThumbnail}
              projectTags="Documentation Website &nbsp;&nbsp;&mdash;&nbsp;&nbsp; Osram"
              projectTitle="Placeholder Title"
            />
            <ProjectSmall 
              offset="is-offset-2"
              link="/osramdocs/"
              featuredImage={projectThumbnail}
              projectTags="Documentation Website &nbsp;&nbsp;&mdash;&nbsp;&nbsp; Osram"
              projectTitle="Placeholder Title"
            />
          </div>
          <div className="columns">
            <ProjectSmall 
              link="/osramdocs/"
              featuredImage={projectThumbnail}
              projectTags="Documentation Website &nbsp;&nbsp;&mdash;&nbsp;&nbsp; Osram"
              projectTitle="Placeholder Title"
            />
            <ProjectSmall 
              offset="is-offset-2"
              link="/osramdocs/"
              featuredImage={projectThumbnail}
              projectTags="Documentation Website &nbsp;&nbsp;&mdash;&nbsp;&nbsp; Osram"
              projectTitle="Placeholder Title"
            />
          </div>
        </div>
      </section>

      <Request />

    </Layout>
  )
}


export default WorkPage