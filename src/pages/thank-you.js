import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ThankYou from '../components/stages/thankyou'

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank you" />

    <ThankYou />
  </Layout>
)

export default ThankYouPage