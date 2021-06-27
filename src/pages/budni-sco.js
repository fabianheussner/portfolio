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
        subtitle="Integrating Scan and Go into existing apps to keep pace with ever-increasing digitization and respond to changing consumer behavior." 
        tags="UX UI Concept Illustration Migration" />

    <FullWidthImage image={budniStage} />
    <FullWidthImage image={budniConcept} />
    
    <LabelText 
        label="The Situation" 
        headline="Migration and Integration" 
        copy="Digital transformation is not just about leveraging new technologies. 
        It is a cultural shift and a journey that many traditional FMCG brands must undertake
         to compete in a market that now sees more and more direct-to-consumer startups. 
         Taking over the project I faced various challenges: 
         Getting to know the client, conceptualizing and designing the feature, and doing 
         it during a migration from Sketch to Figma - without an existing component library, which is absolutely mandatory." />

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
        copy="Operating in an MVP environment, it was a challenge to keep rudimentary screens functional and yet fun to use - illustration proved to be quite helpful."
    />

    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#FBFBFB' }}
        image={budniScreensThree} />

    <LabelText 
        label="The Solution" 
        headline="Working within the scope" 
        copy="One of the biggest challenges was to create a proper entry point for the feature. 
        A restructuring of the Tab Bar was the result. The scan of a QR-Code allows users to easily enter Scan and Go 
        and at the same time ensures the selection of the correct store without having to select it manually. 
        By using a split screen, users always have their shopping cart in view while scanning products. 
        To complete the purchase, users generate their own QR-Code during checkout to easily transfer the scanned products of their cart to a self-scanning terminal." />

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
        headline="Accompanying the whole process"
        copy="During the project, I was in charge of the entire process. 
        This included first rough concepts, the entire UI/UX Design, Visual Design, Prototyping up to the handoff to the development. 
        Furthermore, it was possible to transfer new and also a majority of the existing components into Figma and to lay a foundation for a 
        Multi-Platform Design System with the newly created libraries. It was an exciting project that, with its newly created infrastructure, 
        now has the possibility to scale better and meet the ever-changing demands of consumers."
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

