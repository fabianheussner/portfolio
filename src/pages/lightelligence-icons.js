import React from "react"


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
    lightelligenceIconsStage,
    lightelligenceIconsColors1,
    lightelligenceIconsColors2,
    lightelligenceIconsColors3,
    lightelligenceIconsConstruction1,
    lightelligenceIconsConstruction2,
    lightelligenceIconsGrid1,
    lightelligenceIconsGrid2,
    lightelligenceIconsSizes1,
    lightelligenceIconsSizes2,
    lightelligenceIconsStructure,
} from '../images/lightelligence-icons'


const caseRuttkowski = () => {
  return (
    <Layout>

    <Intro 
        client="Ruttkowski;68" 
        projecttitle="A brutalist Experience" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
        tags="UI UX Concept Illustration" />

    <FullWidthImage image={lightelligenceIconsStage} />

    <LabelText 
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />


    <Image2
        image1={lightelligenceIconsGrid1}
        image2={lightelligenceIconsGrid2}
    />

    <FullWidthImage image={lightelligenceIconsStructure} />

    <CenterText 
        copy="Various objects made it possible to create many combinations and the integration of obstacles and bonus items made the creation of 240 levels possible."
    />

    <Image2
        width1="is-4-desktop is-offset-1-desktop"
        width2="is-4-desktop is-offset-2-desktop"
        image1={lightelligenceIconsConstruction1}
        image2={lightelligenceIconsConstruction2}
    />

    <LabelText 
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />

    <Image2
        background={{ backgroundColor: '#E9ECEF' }}
        image1={lightelligenceIconsSizes1}
        image2={lightelligenceIconsSizes2}
    />

    <CenterText 
        copy="Various objects made it possible to create many combinations and the integration of obstacles and bonus items made the creation of 240 levels possible."
    />

    <CenterImage 
        image={lightelligenceIconsColors1} />

    <Image2
        background={{ backgroundColor: '#141733' }}
        image1={lightelligenceIconsColors2}
        image2={lightelligenceIconsColors3}
    />

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
                <a href="https://janstricker.de/" target="_blank" rel="noopener noreferrer" alt="">Jan Stricker</a>
                <a href="https://github.com/lightbulb-ui" target="_blank" rel="noopener noreferrer" alt="">Development Teams</a>
            </div>
        }
    />

    <Pagination 
        previous="/migros-game/"
        next="/ruttkowski-68/"
    />

    <Request />

    </Layout>
  )
}


export default caseRuttkowski

