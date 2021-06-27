import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageHome from "../components/stages/stagehome"
import ProjectHome from "../components/project/projecthome"
import Request from '../components/modules/request'

import lightelligenceFeatured from '../images/lightelligence/lightelligence-featured.png'
import migrosGameFeatured from '../images/migros-game/migros-game-featured.png'
import budniFeatured from '../images/budni/budni-featured.png'
import monoflowFeatured from '../images/monoflow/monoflow-featured.png'

import "./mystyles.scss"


const IndexPage = () => {
  return (
    <Layout>
    <SEO title="Hey there" />
    <StageHome />

    <ProjectHome
        link="/budni-sco"
        image={budniFeatured} 
        background={{ backgroundColor: '#1E3E95' }}
        projectTags="Scan and Go"
        projectClient="Budni" 
        projectTitle="More than a Self Checkout" 
        subtitle="Integrating Scan and Go into existing apps to keep pace with ever-increasing digitization and respond to changing consumer behavior." 
    />
    <ProjectHome
        link="/lightelligence/"
        image={lightelligenceFeatured} 
        background={{ backgroundColor: '#E9ECEF' }}
        projectTags="Design System"
        projectClient="Lightelligence" 
        projectTitle="Open Source IoT Design System" 
        subtitle="A plurality of components for the rapid development of custom tailored IoT solutions." 
    />
    <ProjectHome
        link="/migros-game"
        image={migrosGameFeatured} 
        background={{ backgroundColor: '#141733' }}
        projectTags="Mobile Game"
        projectClient="Migros" 
        projectTitle="Grill It, Win It!" 
        subtitle="A summer promotion game that captivated the players and exceeded expectations by far." 
    />
    <ProjectHome
        link="/monoflow"
        image={monoflowFeatured} 
        background={{ backgroundColor: '#F2F4F8' }}
        projectTags="Global Library"
        projectClient="Independant Work" 
        projectTitle="A take on improving workflows" 
        subtitle="Building a global library to enable better collaboration, define a unified process, and achieve faster deliverables." 
    />

    <Request />

    </Layout>
  )
}


export default IndexPage
