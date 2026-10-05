import React from 'react'
import Hero from './components/homeContent/Hero_Section/Hero'
import Marquee from './components/Marquee/Marquee'
import WhoWeAre from './components/homeContent/Other_Section/WhoWeAre/WhoWeAre'
import RosterSection from './components/homeContent/Other_Section/playerSection/RosterSection'
import HistorySection from './components/homeContent/Other_Section/History/HistorySection'
import TournamentRecaps from './components/homeContent/Other_Section/TournamentsRecap/TournamentRecaps'

export default function page() {
  return (
    <div>
      <Hero/>
      <Marquee/>
      <WhoWeAre/>
      <RosterSection/>
      <HistorySection/>
      <TournamentRecaps/>
    </div>
  )
}
