
import players from "../components/utils/data/team.json";
import PlayerCard from "../components/homeContent/Other_Section/playerSection/PlayerCard";

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-[#050607] px-6 py-20">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-xs font-semibold tracking-[0.4em] text-[#cdb77b]">
            OUR ROSTER
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
            Meet The <span className="text-[#d5bd7e]">Team</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40">
            The players behind the competition.
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {players.map((player) => (
            <PlayerCard
              key={`${player.team}-${player.name}`}
              player={player}
            />
          ))}

        </div>

      </div>

    </main>
  );
}