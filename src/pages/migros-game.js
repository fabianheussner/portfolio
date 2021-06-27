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
        projecttitle="Grill It, Win It!" 
        subtitle="A summer promotion game that captivated the players and exceeded expectations by far." 
        tags="UI UX Concept Illustration" />

    <FullWidthImage image={migrosGameStage} />

    <LabelText 
        label="The challenge" 
        headline="A game that should increase sales in stores" 
        copy="To support an upcoming summer campaign of the Swiss retailer Migros, a game should be developed that offers casual gamers as well as persistent players enough gaming fun over a longer period of time. In addition increasing sales should be achieved. The aim was to develop a game that increasingly enticed customers into the stores without violating the App Store guidelines for in-app purchases of the Migros app." />

    <FullWidthImage image={migrosGameWireflow} />

    <CenterImage 
        background={{ backgroundColor: '#F5F8FA' }}
        image={migrosGameGameplay1} />

    <LabelText 
        label="Our solution" 
        headline="First grill then win" 
        copy="Compatible to the campaign, we developed a Match-3-Game within the Migros app. What is special: Our game board is a grill and the game elements are ingredients. The player levels from grill to grill and has to fight here and there with different challenges - bad weather, requested dishes or other mishaps. Within 240 levels the gamer faces to recurring competition rounds and with a little luck he can win coupons for Migros." />

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
        copy="The use of the stamp card feature in the Migros app made it possible for on-site customers to unlock additional competition rounds through purchases. Customers were able to win cosmetics for their own avatar or even coupons, which in return could be redeemed again in stores."
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
        label="Conclusion and my role" 
        headline="A success story"
        copy="By using a generator, we were able to create 240 levels, which were launched in four packages. Increasing difficulty and the gratification of players made the game a bunch fun all the time. The expectation to the increase of sales in the stores were clearly exceeded. During my work on the mobile game I was responsible for parts of the conception, the UI design, illustration and art direction."
        names={ 
            <div>
                <a href="https://www.xing.com/profile/Stefan_Anlauf3/cv" target="_blank" rel="noopener noreferrer" alt="">Stefan Anlauf</a>
                <a href="https://www.xing.com/profile/AylaSybille_Guerbuez/cv" target="_blank" rel="noopener noreferrer" alt="">Ayla Gürbüz</a>
                <a href="http://bennebockshecker.com/" target="_blank" rel="noopener noreferrer" alt="">Benedikt Bockshecker</a>
                <a href="https://www.db-n.com/" target="_blank" rel="noopener noreferrer" alt="">Deepblue Networks</a>
            </div>
        }
    />

    <Pagination 
        previous="/migros-game/"
        next="/monoflow/"
    />

    <Request />

    </Layout>
  )
}


export default caseMigrosGame

