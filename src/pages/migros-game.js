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
    migrosGameStage,
    migrosGameWireflow,
    migrosGameWorld1,
    migrosGameWorld2,
    migrosGameWorld3,
    migrosGameGamble1,
    migrosGameGamble2,
    migrosGameGamble3,
    migrosGameGameplay1,
    migrosGameGameplay2,
    migrosGameAvatar1,
    migrosGameAvatar2,
    migrosGameElements1,
    migrosGameElements2,
} from '../images/migros-game'


const caseMigrosGame = () => {
  return (
    <Layout>

    <SEO title="Grill It, Win It" />

    <Intro 
        client="Migros" 
        projecttitle="Grill It, Win It" 
        subtitle="A summer promotion game that captivated the players and far exceeded expectations" 
        tags="UI UX Concept Illustration" />

    <FullWidthImage image={migrosGameStage} />

    <LabelText 
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />

    <FullWidthImage image={migrosGameWireflow} />

    <CenterImage 
        background={{ backgroundColor: '#F5F8FA' }}
        image={migrosGameGameplay1} />

    <LabelText 
        label="The challenge" 
        headline="React is my challenge" 
        copy="Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
        pretium quis, sem. Nulla consequat massa quis enim." />

    <Image2
        background={{ backgroundColor: '#141733' }}
        width1="is-4-desktop is-4-tablet"
        width2="is-7-desktop is-offset-1-desktop is-8-tablet"
        image1={migrosGameElements1}
        image2={migrosGameElements2}
    />

    <Image3
        image1={migrosGameGamble1}
        image2={migrosGameGamble2}
        image3={migrosGameGamble3}
    />

    <CenterText 
        copy="Various objects made it possible to create many combinations and the integration of obstacles and bonus items made the creation of 240 levels possible."
    />


    <Image2
        background={{ backgroundColor: '#141733' }}
        image1={migrosGameAvatar1}
        image2={migrosGameAvatar2}
    />

    <CenterImage 
        background={{ backgroundColor: '#F5F8FA' }}
        image={migrosGameGameplay2} />
    
    <Image3
        background={{ backgroundColor: '#F5F8FA' }}
        image1={migrosGameWorld1}
        image2={migrosGameWorld2}
        image3={migrosGameWorld3}
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
                <a href="https://www.xing.com/profile/Stefan_Anlauf3/cv" target="_blank" rel="noopener noreferrer" alt="">Stefan Anlauf</a>
                <a href="https://www.xing.com/profile/AylaSybille_Guerbuez/cv" target="_blank" rel="noopener noreferrer" alt="">Ayla Gürbüz</a>
                <a href="http://bennebockshecker.com/" target="_blank" rel="noopener noreferrer" alt="">Benedikt Bockshecker</a>
            </div>
        }
    />

    <Pagination 
        previous="/lightelligence/"
        next="/lightelligence-icons/"
    />

    <Request />

    </Layout>
  )
}


export default caseMigrosGame

