import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import StageHome from "../components/stagehome"
import SEO from "../components/seo"

import "./mystyles.scss"
import ProjectHome from "../components/project/projecthome"

const IndexPage = () => {
  return (
    <Layout>
    
    <StageHome />
    <ProjectHome 
      client="Migros" 
      projecttitle="Medium" 
      subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
      tags="UI UX Concept Illustration" />
    

    </Layout>
  )
}


export default IndexPage
