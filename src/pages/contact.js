import React from "react"

import Layout from "../components/layout"
import StageContact from "../components/stages/stagecontact"
import ContactModule from "../components/modules/contactmodule"

import "../pages/mystyles.scss"

const ContactPage = () => {
  return (
    <Layout>
    
    <StageContact 
      pagetitle={["say", <strong> hello</strong>]}
      subtitle="Feel free to contact me anytime. Whether you need an estimate, 
      have an inquiry or if you're just thinking out loud."
    />
    <ContactModule />

    </Layout>
  )
}

export default ContactPage
