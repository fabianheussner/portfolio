import React from "react"

import Layout from "../components/layout"
import StageHome from "../components/stages/stagehome"
import ProjectHome from "../components/project/projecthome"
import Request from '../components/modules/request'

import docsFeatured from '../images/project-docs/osram-docs-featured.webp'

import "./mystyles.scss"


const IndexPage = () => {
  return (
    <Layout>
    
    <StageHome />

    <ProjectHome
        link="/osramdocs/"
        image={docsFeatured} 
        projectTags="UI UX Concept Illustration"
        projectClient="Osram" 
        projectTitle="lightelligence docs" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
    />
    <ProjectHome
        link="/osramdocs/"
        image={docsFeatured} 
        projectTags="UI UX Concept Illustration"
        projectClient="Osram" 
        projectTitle="lightelligence docs" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
    />


    <Request />

    </Layout>
  )
}


export default IndexPage
