import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageWork from "../components/stages/stagework"
import LabelImage from "../components/modules/labelimage"
import ProjectSmall from "../components/project/projectsmall"
import Request from '../components/modules/request'
import Table from '../components/table/table'

import "./mystyles.scss"

import selectedClients from '../images/selected-clients.webp'
import projectThumbnail from '../images/project-docs/osram-docs-featured.webp'

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

      <Table />

      <Request />

    </Layout>
  )
}


export default WorkPage