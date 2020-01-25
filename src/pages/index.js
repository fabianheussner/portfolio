import React from "react"

import Layout from "../components/layout"
import StageHome from "../components/stagehome"


import "./mystyles.scss"
import ProjectHome from "../components/project/projecthome"

import docsFeatured from '../images/project-docs/osram-docs-featured.webp'

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


    </Layout>
  )
}


export default IndexPage
