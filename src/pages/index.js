import React from "react"

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
    
    <StageHome />

    <ProjectHome
        link="/lightelligence/"
        image={lightelligenceFeatured} 
        background={{ backgroundColor: '#E9ECEF' }}
        projectTags="Design System and Apps"
        projectClient="Osram" 
        projectTitle="Lightelligence Design System and Apps" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
    />
    <ProjectHome
        link="/migros-game"
        image={migrosGameFeatured} 
        background={{ backgroundColor: '#141733' }}
        projectTags="Mobile Game"
        projectClient="Migros" 
        projectTitle="lightelligence docs" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
    />
    <ProjectHome
        link="/lightelligence-icons"
        image={lightelligenceIconsFeatured} 
        background={{ backgroundColor: '#EAEDF2' }}
        projectTags="Icon Set"
        projectClient="Osram Lightelligence" 
        projectTitle="An IoT Icon Set" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
    />

    <ProjectHome
        link="/ruttkowski-68"
        image={ruttkowskiFeatured} 
        background={{ backgroundColor: '#FFC9C9' }}
        projectTags="Website Relaunch"
        projectClient="Ruttkowski;68" 
        projectTitle="A brutalist Experience" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
    />



    <Request />

    </Layout>
  )
}


export default IndexPage
