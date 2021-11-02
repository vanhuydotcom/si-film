import React from "react"
import About from "./components/About"
import Awards from "./components/Awards"
import AwardsCover from "./components/AwardsCover"
import Banners from "./components/Banners"
import Carousel from "./components/Carousel"
import FeaturedStories from "./components/FeaturedStories"

export default function Home() {
    return (

        <>
            {/* PRELOAD IMAGE(S) */}
            <Banners />
            {/* SECTION: CAROUSEL */}
            <Carousel />
            {/* SECTION: ABOUT */}
            <About />
            {/* SECTION: AWARDS */}
            <Awards />
            {/* SECTION: AWARDS COVER*/}
            <AwardsCover />
            {/* SECTION: FEATURED STORIES*/}
            <FeaturedStories />

        </>


    )
}