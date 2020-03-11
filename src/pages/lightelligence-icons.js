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
    <SEO title="IoT Icon Library" />
    <Intro 
        client="Osram Lightelligence" 
        projecttitle="An IoT Icon Library" 
        subtitle="The creation of an icon set that offers the right size for each use case." 
        tags="UI Icon-Development Management" />

    <FullWidthImage image={lightelligenceIconsStage} />

    <LabelText 
        label="The challenge" 
        headline="A mess that had to be tamed" 
        copy="As part of the rapidly growing Lightelligence Design System, an icon library existed relatively unnoticed. Due to the neglect, the pictograms were created in various sizes, line widths and styles and supplemented by integrated material design icons. Within the Design System 2.0, this chaos had to be eliminated and an icon set especially for the open IoT platform developed and integrated." />


    <Image2
        image1={lightelligenceIconsGrid1}
        image2={lightelligenceIconsGrid2}
    />

    <FullWidthImage image={lightelligenceIconsStructure} />

    <CenterText 
        copy="Working on a design system requires naming conventions - also applying to an icon library. When integrating the symbols, they were summarized according to use cases and function."
    />

    <Image2
        width1="is-4-desktop is-offset-1-desktop"
        width2="is-4-desktop is-offset-2-desktop"
        image1={lightelligenceIconsConstruction1}
        image2={lightelligenceIconsConstruction2}
    />

    <LabelText 
        label="The construction " 
        headline="Defining the Style" 
        copy="The shape of each icon is reduced to its minimal form. The overall style is based on a single consistent stroke. Symmetry and consistency of shapes gives the icons a unique quality, while keeping them simple and easy to understand and ensures readability. To balance out the curves of the icon, all end-points are squared off which guaranteed that the icon wouldn’t be too playful for an IoT Set." />

    <Image2
        background={{ backgroundColor: '#E9ECEF' }}
        image1={lightelligenceIconsSizes1}
        image2={lightelligenceIconsSizes2}
    />

    <CenterText 
        copy="However, what makes the icon library so special is the fact that each icon exists in three sizes. Depending on the intended usage, the sizes 24x24, 16x16 and 12x12 are available. For the smaller sizes, the stroke width and the level of detail have been reduced to still allow a quick comprehension of the symbol. A filled version of the icon was created for warning states to ensure a higher attention."
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
        headline="A future-oriented implementation"
        copy="For the 24x24px icons a 2px outline wasn’t used as it is common. This enabled the level of detail to be increased. However, the use of a 1.5px outline requires high-resolution displays, the prevalence of these have increased significantly in the recent years. The integration of the new icon library was therefore a future-oriented decision. When working on this project, I assumed the entire creation using Adobe Illustrator and incorporation into the design system."
        names={ 
            <div>
                <a href="https://github.com/lightbulb-ui" target="_blank" rel="noopener noreferrer" alt="">Development Teams</a>
                <a href="https://www.db-n.com/" target="_blank" rel="noopener noreferrer" alt="">Deepblue Networks</a>
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

