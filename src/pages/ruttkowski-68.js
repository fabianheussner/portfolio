import React from "react"


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

    <Intro 
        client="Ruttkowski;68" 
        projecttitle="A brutalist Experience" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
        tags="UI UX Concept Illustration" />

    <FullWidthImage image={ruttkowskiStage} />

    <LabelText 
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />

    <CenterImage 
        image={ruttkowskiScreens1} />

    <LabelText 
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />

    <FullWidthImage image={ruttkowskiScreens2} />
    <FullWidthImage image={ruttkowskiExhibitions} />
    <FullWidthImage image={ruttkowskiScreens3} />

    <CenterText 
        copy="Various objects made it possible to create many combinations and the integration of obstacles and bonus items made the creation of 240 levels possible."
    />

    <CenterImage 
        image={ruttkowskiError} />

    <Credits 
        label="Credits" />

    <Pagination />

    <Request />

    </Layout>
  )
}


export default caseRuttkowski

