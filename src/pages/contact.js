import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import StageContact from "../components/stages/stagecontact"
import ContactModule from "../components/modules/contactmodule"

import "../pages/mystyles.scss"

const ContactPage = () => {
  return (
    <Layout>
    <SEO title="Say hello" />
    <StageContact 
      pagetitle={["say", <strong> hello</strong>]}
      subtitle="Feel free to contact me anytime. If you think I could be a good addition to your team, have an inquiry or just want to know more about me. 👇"
    />
    <ContactModule />

    </Layout>
  )
}

export default ContactPage
