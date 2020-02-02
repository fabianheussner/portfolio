import React from "react"


import Layout from "../components/layout"


import "./mystyles.scss"
import Intro from "../components/modules/intro"
import FullWidthImage from "../components/modules/fullwidthimage"
import LabelText from "../components/modules/labeltext"
import ImageText from "../components/modules/imagetext"
import Credits from "../components/modules/credits"
import Pagination from "../components/modules/pagination"
import Request from '../components/modules/request'


import CodeFrame from '../images/project-docs/code-frame.webp'
import DocsHome from '../images/project-docs/docs-home.webp'
import DocsIllustration from '../images/project-docs/docs-illustration.webp'


const WorkPage = () => {
  return (
    <Layout>

    <Intro 
        client="Migros" 
        projecttitle="osram docs" 
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo ligula." 
        tags="UI UX Concept Illustration" />

    <FullWidthImage image={DocsHome} />

    <LabelText 
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />

    <ImageText 
        colors={{ backgroundColor: '#0D122C', color: 'White' }}
        image={CodeFrame}
        headline="Test Headline"
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />
    
    <LabelText 
        label="framework" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
        fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
        imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi." />

    <FullWidthImage image={DocsIllustration} />

    <LabelText 
        label="My role" 
        headline="From Concept to design" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus." />

    <Credits 
        label="Credits" />

    <Pagination />

    <Request />

    </Layout>
  )
}


export default WorkPage

