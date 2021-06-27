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
import Image3 from "../components/modules/image-3"
import Credits from "../components/modules/credits"
import Pagination from "../components/modules/pagination"
import Request from '../components/modules/request'


import {
    lightelligenceBuilding1,
    lightelligenceBuilding2,
    lightelligenceBuilding3,
    lightelligenceBuildingCentral,
    lightelligenceDocs,
    lightelligenceDocumentation,
    lightelligenceElements1,
    lightelligenceElements2,
    lightelligenceElements3,
    lightelligenceIllustration1,
    lightelligenceIllustration2,
    lightelligenceStage,
    lightelligenceStructure,
} from '../images/lightelligence'


const caseRuttkowski = () => {
  return (
    <Layout>
    <SEO title="Lightelligence Design System and Apps" />
    <Intro 
        client="Osram Lightelligence" 
        projecttitle="Open Source IoT Design System" 
        subtitle="A plurality of components for the rapid development of custom tailored IoT solutions." 
        tags="UI UX Management Illustration" />

    <FullWidthImage image={lightelligenceStage} />
    <FullWidthImage image={lightelligenceStructure} />
    <FullWidthImage image={lightelligenceIllustration1} />

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
        image1={lightelligenceElements1}
        image2={lightelligenceElements2}
    />

    <CenterImage 
        padding="no-padding"
        image={lightelligenceElements3} />

    <Image3 
        background={{ backgroundColor: '#0D122C' }}
        image1={lightelligenceBuilding1}
        image2={lightelligenceBuilding2}
        image3={lightelligenceBuilding3}
    />

    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#E9ECEF' }}
        image={lightelligenceDocs} />

    <CenterImage 
        padding="no-padding"
        image={lightelligenceDocumentation} />

    <LabelText 
        label="A Requirement" 
        headline="Documentation is key" 
        copy="With the rapidly increasing number of components and the further development of the design system to 2.0, an extensive documentation of these components became necessary. In addition to a detailed description in Confluence, we created Lightelligence Docs, which were also implemented on the basis of the design system." />

    <FullWidthImage image={lightelligenceIllustration2} />

    <CenterText 
        copy="In order to advertise the product and demonstrate the capabilities of the platform, we developed prototypes and applications cross-teams and worked closely with developers."
    />

    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#E9ECEF' }}
        image={lightelligenceBuildingCentral} />

    <Credits 
        label="My role" 
        headline="From factual to pretty"
        copy="The UI UX team independently took care of the customer's communication and advice. In agile processes, we jointly developed new components and features and were significantly involved in the implementation of complex IoT applications. During my work for Lightelligence, I decisively shaped the design system and established the use of illustrations for the emotionalization of empty states."
        names={ 
            <div>
                <a href="https://www.xing.com/profile/Timon_Hass/cv" target="_blank" rel="noopener noreferrer" alt="">Timon Hass</a>
                <a href="https://janstricker.de/" target="_blank" rel="noopener noreferrer" alt="">Jan Stricker</a>
                <a href="https://github.com/lightbulb-ui" target="_blank" rel="noopener noreferrer" alt="">Development Teams</a>
                <a href="https://www.db-n.com/" target="_blank" rel="noopener noreferrer" alt="">Deepblue Networks</a>
            </div>
        }
    />

    <Pagination 
        previous="/budni-sco/"
        next="/migros-game/"
    />

    <Request />

    </Layout>
  )
}


export default caseRuttkowski

