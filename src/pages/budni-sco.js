import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"


import "./mystyles.scss"
import Intro from "../components/modules/intro"
import FullWidthImage from "../components/modules/fullwidthimage"
import CenterImage from "../components/modules/centerimage"
import LabelText from "../components/modules/labeltext"
import CenterText from "../components/modules/centertext"
import Image2 from "../components/modules/image-2"
import Credits from "../components/modules/credits"
import Pagination from "../components/modules/pagination"
import Request from '../components/modules/request'


import {
    budniStage,
    budniConcept,
    budniScreensOne,
    budniScreensTwo,
    budniScreensThree,
    budniScreensFour,
    budniIllustrationOne,
    budniIllustrationTwo,
    budniIllustrationThree,
    budniIllustrationFour,
    budniFlow,
} from '../images/budni'


const caseBudni = () => {
  return (
    <Layout>
    <SEO title="Budni Scan and Go – MLP vs MVP" />
    <Intro 
        client="Budni" 
        projecttitle="More than a Self Checkout" 
        subtitle="A plurality of components for the rapid development of custom tailored IoT solutions." 
        tags="UI UX Management Illustration" />

    <FullWidthImage image={budniStage} />
    <FullWidthImage image={budniConcept} />
    
    <LabelText 
        label="The Situation" 
        headline="Making it accessible to everyone" 
        copy="LIGHTELLIGENCE is an open IoT platform and ecosystem in the light and building market. 
        It simplifies the development of IoT software and provides clients with a full stack turn key 
        IoT solution that can be applied to a huge range of industries. In order to ensure a quality 
        standard for the design and user experience, we created an open source design system. Tools like 
        Abstract helped us to enable collaborative work and manage the scope of the design system, 
        which can be found on GitHub." />

    <Image2 
        padding="no-padding"
        background={{ backgroundColor: '#FBFBFB' }}
        image1={budniScreensOne}
        image2={budniScreensTwo}
    />

    <Image2 
        padding="no-padding"
        background={{ backgroundColor: '#1E3E95' }}
        image1={budniIllustrationOne}
        image2={budniIllustrationTwo}
    />

    <CenterText 
        copy="In order to advertise the product and demonstrate the capabilities of the platform, we developed prototypes and applications cross-teams and worked closely with developers."
    />

    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#FBFBFB' }}
        image={budniScreensThree} />

    <LabelText 
        label="The Situation" 
        headline="Making it accessible to everyone" 
        copy="LIGHTELLIGENCE is an open IoT platform and ecosystem in the light and building market. 
        It simplifies the development of IoT software and provides clients with a full stack turn key 
        IoT solution that can be applied to a huge range of industries. In order to ensure a quality 
        standard for the design and user experience, we created an open source design system. Tools like 
        Abstract helped us to enable collaborative work and manage the scope of the design system, 
        which can be found on GitHub." />

    <CenterImage 
        image={budniFlow} />

    <Image2 
        padding="no-padding"
        background={{ backgroundColor: '#1E3E95' }}
        image1={budniIllustrationThree}
        image2={budniIllustrationFour}
    />

    <CenterImage 
        background={{ backgroundColor: '#FBFBFB' }}
        image={budniScreensFour} />
    

    <Credits 
        label="My role" 
        headline="From concept to implementation"
        copy="The UI UX team independently took care of the customer's communication and advice. In agile processes, we jointly developed new components and features and were significantly involved in the implementation of complex IoT applications. During my work for Lightelligence, I decisively shaped the design system and established the use of illustrations for the emotionalization of empty states."
        names={ 
            <div>
                <a href="https://www.cellular.de/" target="_blank" rel="noopener noreferrer" alt="">Cellular</a>
            </div>
        }
    />

    <Pagination 
        previous="/ruttkowski-68/"
        next="/lightelligence/"
    />

    <Request />

    </Layout>
  )
}


export default caseBudni

