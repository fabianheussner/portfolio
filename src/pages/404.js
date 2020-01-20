import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageError from "../components/stages/stage404"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    
    <StageError />

  </Layout>
)

export default NotFoundPage
