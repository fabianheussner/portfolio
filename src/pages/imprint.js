import React from "react"

import Layout from "../components/layout"

import "./mystyles.scss"

const ImprintPage = () => {

  

  return (
    <Layout>

      <section className="section imprint ">
          <div className="container">
              <div className="column is-6 is-offset-3">
                <h1 className="headline">legal disclosure</h1>
                <h2 className="subtitle">
                  Information in accordance with Section 5 TMG
                </h2>
                <h3>Contact Information</h3>
                <p className="paragraph">
                  Leverkusenstraße 8<br />22761 Hamburg
                </p>
                <p className="paragraph">
                  <strong>Phone</strong> 015111679290<br />
                  <strong>Mail</strong> <a href="mailto:info@fabian-heussner.de">info@fabian-heussner.de</a><br />
                  <strong>Website</strong> <a href="www.fabian-heussner.de" target="_blank">www.fabian-heussner.de</a>
                </p>
                <h3>Disclaimer</h3>
                <h4 className="label">
                  Accountability for content
                </h4>
                <p className="paragraph">
                  The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
                  accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for 
                  our own content on these web pages. In this matter, please note that we are not obliged to monitor 
                  the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. 
                  Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per 
                  §§ 8 to 10 of the Telemedia Act (TMG).
                </p>

                <h4 className="label">
                  Accountability for links
                </h4>
                <p className="paragraph">
                  Responsibility for the content of 
                  external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were 
                  evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective 
                  link immediately.
                </p>
                <h4 className="label">
                  Copyright
                </h4>
                <p className="paragraph">
                  Our web pages and their contents are subject to German copyright law. Unless 
                  expressly permitted by law, every form of utilizing, reproducing or processing 
                  works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. 
                  Individual reproductions of a work are only allowed for private use. 
                  The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
                </p>
              </div>
          </div>
      </section>

    </Layout>
  )
}


export default ImprintPage