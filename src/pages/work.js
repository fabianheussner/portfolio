import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageWork from "../components/stages/stagework"
import TableSmall from "../components/table/table-small"
import ProjectSmall from "../components/project/projectsmall"
import Request from '../components/modules/request'

import "./mystyles.scss"

import lightelligenceFeatured from '../images/lightelligence/lightelligence-featured.png'
import migrosGameFeatured from '../images/migros-game/migros-game-featured.png'
import ruttkowskiFeatured from '../images/ruttkowski/ruttkowski-featured.png'
import lightelligenceIconsFeatured from '../images/lightelligence-icons/lightelligence-icons-featured.png'

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="My work" />

      <StageWork 
        pagetitle={["my ", <strong>work</strong>]}
        subtitle="As part of my work, 
        I have the opportunity to develop tailor-made solutions 
        together with customers from various industries &mdash; from 
        games for Swatch and Migros, the relaunch of Flik Flak, 
        illustrated promotions for otelo to complex IoT solutions 
        for Osram Lightelligence. I am particularly experienced with 
        customers using # FF6600. ✌️"
      />

      <TableSmall />

      <section className="section projects">
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-12">
              <h5 className="label" style={{
                marginTop: '4rem',
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
              link="/lightelligence/"
              featuredImage={lightelligenceFeatured}
              background={{ backgroundColor: '#E9ECEF' }}
              projectTags="Documentation Website"
              projectClient="Osram"
              projectTitle="Placeholder Title"
            />
            <ProjectSmall 
              offset="is-offset-2-desktop"
              link="/migros-game/"
              featuredImage={migrosGameFeatured}
              background={{ backgroundColor: '#141733' }}
              projectTags="Documentation Website"
              projectClient="Osram"
              projectTitle="Placeholder Title"
            />
          </div>
          <div className="columns">
            <ProjectSmall 
              link="/lightelligence-icons/"
              featuredImage={lightelligenceIconsFeatured}
              background={{ backgroundColor: '#EAEDF2' }}
              projectTags="Documentation Website"
              projectClient="Osram"
              projectTitle="Placeholder Title"
            />
            <ProjectSmall 
              offset="is-offset-2-desktop"
              link="/ruttkowski-68/"
              featuredImage={ruttkowskiFeatured}
              background={{ backgroundColor: '#FFC9C9' }}
              projectTags="Documentation Website"
              projectClient="Osram"
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