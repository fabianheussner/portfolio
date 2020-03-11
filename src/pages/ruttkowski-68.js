import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"


import "./mystyles.scss"
import Intro from "../components/modules/intro"
import FullWidthImage from "../components/modules/fullwidthimage"
import CenterImage from "../components/modules/centerimage"
import LabelText from "../components/modules/labeltext"
import CenterText from "../components/modules/centertext"
import Credits from "../components/modules/credits"
import Pagination from "../components/modules/pagination"
import Request from '../components/modules/request'


import {
    ruttkowskiStage,
    ruttkowskiScreens1,
    ruttkowskiScreens2,
    ruttkowskiScreens3,
    ruttkowskiExhibitions,
    ruttkowskiError,
} from '../images/ruttkowski'


const caseRuttkowski = () => {
  return (
    <Layout>
    <SEO title="Ruttkowski;68" />
    <Intro 
        client="Ruttkowski;68" 
        projecttitle="A minimalist website relaunch" 
        subtitle="A new platform for the growing contemporary art gallery Ruttkwoski;68 from Cologne and now also located in Paris." 
        tags="UI Concept Development" />

    <FullWidthImage image={ruttkowskiStage} />

    <LabelText 
        label="The situation" 
        headline="The desire for expansion" 
        copy="The art gallery Ruttkowski; 68, which already existed in Cologne, approached us at the end of 2016 with the need for a new website. The aim to open showrooms at other locations also required a reconstruction of the existing content and the independent maintenance of new exhibitions and artists. In addition, the integration of a shop should now enable sales of editions and other items." />

    <CenterImage 
        image={ruttkowskiScreens1} />

    <LabelText 
        label="Our solution" 
        headline="A scalable environment" 
        copy="In the implementation, we strongly oriented ourselves to the reduced appearance of the Cologne gallery and created a minimalistic design that offers enough space for the artwork and their own existence. With a simplified navigation structure and better editing of existing content, the collection of future and past exhibitions as well as trade fairs and information about the individual artists has been significantly improved. In addition, the integration of a location in Paris was made possible and further scaling was taken into account." />

    <FullWidthImage image={ruttkowskiScreens2} />
    <FullWidthImage image={ruttkowskiExhibitions} />
    <FullWidthImage image={ruttkowskiScreens3} />

    <CenterText 
        copy="The use of Wordpress enabled the desired range of functions and at the same time provided the foundation for the integration of the shop on the basis of WooCommerce."
    />

    <CenterImage 
        image={ruttkowskiError} />

    <Credits 
        label="My role" 
        headline="Being the generalist"
        copy="Working on a cultural project was a welcome change from established interfaces. As part of the process, I was able to combine my interdisciplinary skills. During the work progress on the relaunch I took care of the conception and design, as well as the entire programming of the website based on JointsWP / Foundation."
        names={ 
            <div>
                <a href="http://www.christophsiebelt.de/" target="_blank" rel="noopener noreferrer" alt="">Christoph Siebelt</a>
                <a href="https://www.db-n.com/" target="_blank" rel="noopener noreferrer" alt="">Deepblue Networks</a>
            </div>
        }
    />

    <Pagination 
        previous="/lightelligence-icons/"
        next="/lightelligence/"
    />

    <Request />

    </Layout>
  )
}


export default caseRuttkowski

