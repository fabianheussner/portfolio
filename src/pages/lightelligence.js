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
        client="Ruttkowski;68" 
        projecttitle="A brutalist Experience" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
        tags="UI UX Concept Illustration" />

    <FullWidthImage image={lightelligenceStage} />
    <FullWidthImage image={lightelligenceStructure} />
    <FullWidthImage image={lightelligenceIllustration1} />

    <LabelText 
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />


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
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />

    <FullWidthImage image={lightelligenceIllustration2} />

    <CenterText 
        copy="Various objects made it possible to create many combinations and the integration of obstacles and bonus items made the creation of 240 levels possible."
    />

    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#E9ECEF' }}
        image={lightelligenceBuildingCentral} />

    <Credits 
        label="My role" 
        headline="What I did comes here"
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim."
        names={ 
            <div>
                <a href="https://www.xing.com/profile/Timon_Hass/cv" target="_blank" rel="noopener noreferrer" alt="">Timon Hass</a>
                <a href="https://janstricker.de/" target="_blank" rel="noopener noreferrer" alt="">Jan Stricker</a>
                <a href="https://github.com/lightbulb-ui" target="_blank" rel="noopener noreferrer" alt="">Development Teams</a>
            </div>
        }
    />

    <Pagination 
        previous="/ruttkowski-68/"
        next="/migros-game/"
    />

    <Request />

    </Layout>
  )
}


export default caseRuttkowski

