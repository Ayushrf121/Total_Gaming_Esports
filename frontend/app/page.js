import React from 'react'
import Navbar from './components/layouts/Navbar/Navbar'
import Hero from './components/homeContent/Hero_Section/Hero'
import Marquee from './components/Marquee/Marquee'
import WhoWeAre from './components/homeContent/Other_Section/WhoWeAre/WhoWeAre'
import RosterSection from './components/homeContent/Other_Section/playerSection/RosterSection'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <WhoWeAre/>
      <RosterSection/>
    </div>
  )
}
