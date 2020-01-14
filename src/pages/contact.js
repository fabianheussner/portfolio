import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import StageContact from "../components/stages/stagecontact"

import SEO from "../components/seo"

import "../pages/mystyles.scss"

const ContactPage = () => {
  return (
    <Layout>
    
    <StageContact 
      pagetitle="say hello!"
      subtitle="Feel free to contact me anytime. Whether you need an estimate, 
      have an inquiry or if you're just thinking out loud."
    />

    </Layout>
  )
}

export default ContactPage
