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
import budniFeatured from '../images/budni/budni-featured.png'
import bmgFeatured from '../images/bmg/bmg-featured.png'
import monoflowFeatured from '../images/monoflow/monoflow-featured.png'

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="My work" />

      <StageWork 
        pagetitle={["my ", <strong>work</strong>]}
        subtitle="Within the scope of my work, I have had the opportunity to develop tailor-made solutions together with customers from various industries - from games for Swatch and Migros, the relaunch of Flik Flak, illustrated promotions for otelo to complex IoT solutions for Osram Lightelligence. I’m highly experienced with customers using #FF6600. ✌️"
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
              link="/budni-sco/"
              featuredImage={budniFeatured}
              background={{ backgroundColor: '#1E3E95' }}
              projectTags="Scan and Go"
              projectClient="Budni"
              projectTitle="More than a Self Checkout"
            />
            <ProjectSmall 
              link="/lightelligence/"
              offset="is-offset-2-desktop"
              featuredImage={lightelligenceFeatured}
              background={{ backgroundColor: '#E9ECEF' }}
              projectTags="Design System"
              projectClient="Lightelligence"
              projectTitle="Open Source IoT Design System"
            />
          </div>
          <div className="columns">
            <ProjectSmall 
              link="/migros-game/"
              featuredImage={migrosGameFeatured}
              background={{ backgroundColor: '#141733' }}
              projectTags="Mobile Game"
              projectClient="Migros"
              projectTitle="Grill It, Win It!"
            />
            <ProjectSmall 
              link="/monoflow/"
              offset="is-offset-2-desktop"
              featuredImage={monoflowFeatured}
              background={{ backgroundColor: '#F2F4F8' }}
              projectTags="Global Library"
              projectClient="Independent Work"
              projectTitle="A take on improving workflows"
            />
          </div>
          <div className="columns">
            <ProjectSmall 
              link="/lightelligence-icons/"
              featuredImage={lightelligenceIconsFeatured}
              background={{ backgroundColor: '#EAEDF2' }}
              projectTags="Icon Set"
              projectClient="Lightelligence"
              projectTitle="An IoT Icon Library"
            />
            <ProjectSmall 
              link="/zusammen-gegen-corona/"
              offset="is-offset-2-desktop"
              featuredImage={bmgFeatured}
              background={{ backgroundColor: '#3D4446' }}
              projectTags="Platform"
              projectClient="Bundesministerium f. Gesundheit"
              projectTitle="52 hours to launch"
            />
          </div>
          <div className="columns">
            <ProjectSmall 
              link="/ruttkowski-68/"
              featuredImage={ruttkowskiFeatured}
              background={{ backgroundColor: '#FFC9C9' }}
              projectTags="Website Relaunch"
              projectClient="Ruttkowski;68"
              projectTitle="A minimalist website relaunch"
            />
          </div>

          
        </div>
      </section>

      <Request />

    </Layout>
  )
}


export default WorkPage