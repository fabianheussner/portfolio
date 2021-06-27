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
    bmgStage,
    bmgIntro,
    bmgComponentsOne,
    bmgComponentsTwo,
    bmgScreensOne,
    bmgScreensTwo,
    bmgScreensThree,
    bmgScreensFour,
} from '../images/bmg'


const caseBMG = () => {
  return (
    <Layout>
    <SEO title="One Team against Corona" />
    <Intro 
        client="Bundesministerium f. Gesundheit" 
        projecttitle="52 hours to launch" 
        subtitle="Ever shared your apartment with a colleague? I did! Exceptional circumstances require different collaboration." 
        tags="UI UX Management Illustration" />

    <FullWidthImage image={bmgStage} />
    

    <LabelText 
        label="The Situation" 
        headline="Cya in a few weeks" 
        copy="Probably most have had similar experiences of what it's like to change work environments from one day to the next and make the shift to home office indefinitely. 
        But did you also get a new briefing an hour before? Our little task force did. Staying home. 
        That's exactly what we should make a website for – as an extension of the campaign and to prevent fake news at the same time." />

    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#F5F6F7' }}
        image={bmgIntro} />
    
    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#3D4446' }}
        image={bmgScreensOne} />
    
    <CenterText 
        copy="Starting as an MVP, we quickly worked out an information architecture that allowed us to split the website into two sections - Inform and Act."
    />

    <Image2
        background={{ backgroundColor: '#F5F6F7' }}
        image1={bmgScreensTwo}
        image2={bmgScreensThree}
    />

    <LabelText 
        label="The Situation" 
        headline="From MVP to a fully functional website" 
        copy="In no time we built a website that met the initial requirements. From briefing to launch only 52 hours passed. 
        From that point on, the website was constantly evolving and no one could say what it would look like in the days to come. 
        To enable users to become active, we provided a tool to find a suitable initiative. 
        As the knowledge about the virus grew, the information section was also continuously expanded. 
        This information was for everyone and should therefore be accessible to everyone." />

    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#3D4446' }}
        image={bmgComponentsOne} />
    
    <CenterImage 
        padding="no-padding"
        background={{ backgroundColor: '#F5F6F7' }}
        image={bmgComponentsTwo} />

    <FullWidthImage image={bmgScreensFour} />

    <Credits 
        label="My role" 
        headline="From factual to pretty"
        copy="It is truly amazing to see what is possible to achieve – and that despite this short amount of time. 
        As UI Lead, I significantly shaped the project and made conceptual decisions. 
        The close collaboration as UI and UX team and the constant exchange with development made it happen. 
        A great team, a great accomplishment and a good feeling to have contributed something to the prevailing situation!"
        names={ 
            <div>
                <a href="https://www.xing.com/profile/Timon_Hass/cv" target="_blank" rel="noopener noreferrer" alt="">Timon Hass</a>
                <a href="https://github.com/lightbulb-ui" target="_blank" rel="noopener noreferrer" alt="">Development Teams</a>
                <a href="https://www.db-n.com/" target="_blank" rel="noopener noreferrer" alt="">Deepblue Networks</a>
            </div>
        }
    />

    <Pagination 
        previous="/ruttkowski-68/"
        next="/budni-sco/"
    />

    <Request />

    </Layout>
  )
}


export default caseBMG

