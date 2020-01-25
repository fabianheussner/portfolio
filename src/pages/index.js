import React from "react"

import Layout from "../components/layout"
import StageHome from "../components/stages/stagehome"
import ProjectHome from "../components/project/projecthome"

import docsFeatured from '../images/project-docs/osram-docs-featured.webp'

import "./mystyles.scss"


const IndexPage = () => {
  return (
    <Layout>
    
    <StageHome />

    <ProjectHome
        image={docsFeatured} 
        client="Osram" 
        projecttitle="lightelligence docs" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
        tags="UI UX Concept Illustration" />

    <ProjectHome
        image={docsFeatured} 
        client="Osram" 
        projecttitle="lightelligence docs" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
        tags="UI UX Concept Illustration" />

    </Layout>
  )
}


export default IndexPage
