import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"


import "./mystyles.scss"
import Intro from "../components/modules/intro"
import FullWidthImage from "../components/modules/fullwidthimage"
import CenterImage from "../components/modules/centerimage"
import LabelText from "../components/modules/labeltext"
import Image2 from "../components/modules/image-2"
import Pagination from "../components/modules/pagination"
import Request from '../components/modules/request'


import {
    monoflowStage,
    monoflowLibrary,
    monoflowIconsOne,
    monoflowIconsTwo,
    monoflowIconsThree,
    monoflowIconsFour,
    monoflowDocsOne,
    monoflowDocsTwo,
    monoflowComponentsOne,
    monoflowComponentsTwo,
} from '../images/monoflow'


const caseMonoflow = () => {
  return (
    <Layout>
    <SEO title="Improve Workflows with Monoflow" />
    <Intro 
        client="Independent Work" 
        projecttitle="A take on improving workflows" 
        subtitle="Building a global library to enable better collaboration, define an unified process, and achieve faster deliverables." 
        tags="UI UX Workflow Handoff" />

    <FullWidthImage image={monoflowStage} />
    

    <LabelText 
        label="The Situation" 
        headline="One file to feed them all" 
        copy="Looking back at my professional career, the work on different accounts, projects, 
        the development of features or new products actually had one thing in common: There was no unified overall process. 
        I wanted to change that and with Monoflow I created a library that can do even more than that." />


    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#F2F4F8' }}
        image={monoflowLibrary} />

    <Image2
        background={{ backgroundColor: '#0055FF' }}
        image1={monoflowIconsOne}
        image2={monoflowIconsTwo}
    />

    <Image2
        image1={monoflowComponentsOne}
        image2={monoflowComponentsTwo}
    />

    <LabelText 
        label="The Solution" 
        headline="What does Monoflow offer?" 
        copy="With a global library that can be incorporated into any design file of a design system or even smaller projects, 
        I tried to give product teams a toolkit that gives them extensive possibilities to unify dev handoffs and documentation. 
        Beyond that, one thing has always bothered me. I love Whimsical for low- and hi-fidelity wireframes. 
        But what it lacks is the ability to quickly build a click prototype and test it on a device. 
        Figmas prototyping should fill that gap. Monoflow offers a similar range of pre-built components to build these prototypes quickly 
        and still not get lost in the details." />

    <Image2
        background={{ backgroundColor: '#0055FF' }}
        image1={monoflowIconsThree}
        image2={monoflowIconsFour}
    />

    
    <Image2
        background={{ backgroundColor: '#F2F4F8' }}
        image1={monoflowDocsOne}
        image2={monoflowDocsTwo}
    />
    
    <LabelText 
        label="Key Takeaways" 
        headline="Always room for further improvement" 
        copy="It's great to see that the approach was quickly adapted by product teams and found to be valuable. 
        However, similar to a product, Monoflow needs to be constantly evolving to meet the needs of designers and developers. 
        In addition to more icons, the focus is particularly on UX templates for Jobs To Be Done, Empathy Maps, and more. 
        New tools, software updates and changing requirements create new needs that have to be addressed." />

    <Pagination 
        previous="/migros-game/"
        next="/lightelligence-icons/"
    />

    <Request />

    </Layout>
  )
}


export default caseMonoflow

