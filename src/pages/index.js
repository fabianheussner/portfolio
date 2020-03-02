import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageHome from "../components/stages/stagehome"
import ProjectHome from "../components/project/projecthome"
import Request from '../components/modules/request'

import lightelligenceFeatured from '../images/lightelligence/lightelligence-featured.png'
import migrosGameFeatured from '../images/migros-game/migros-game-featured.png'
import ruttkowskiFeatured from '../images/ruttkowski/ruttkowski-featured.png'
import lightelligenceIconsFeatured from '../images/lightelligence-icons/lightelligence-icons-featured.png'

import "./mystyles.scss"


const IndexPage = () => {
  return (
    <Layout>
    <SEO title="Hey there" />
    <StageHome />

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
        link="/lightelligence-icons"
        image={lightelligenceIconsFeatured} 
        background={{ backgroundColor: '#EAEDF2' }}
        projectTags="Icon Set"
        projectClient="Lightelligence" 
        projectTitle="An IoT Icon Library" 
        subtitle="The creation of an icon set that offers the right size for each use case." 
    />

    <ProjectHome
        link="/ruttkowski-68"
        image={ruttkowskiFeatured} 
        background={{ backgroundColor: '#FFC9C9' }}
        projectTags="Website Relaunch"
        projectClient="Ruttkowski;68" 
        projectTitle="A minimalist website relaunch" 
        subtitle="A new platform for the growing contemporary art gallery Ruttkwoski;68 from Cologne and now also located in Paris." 
    />



    <Request />

    </Layout>
  )
}


export default IndexPage
