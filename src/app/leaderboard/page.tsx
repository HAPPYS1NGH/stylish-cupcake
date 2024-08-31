import { LeaderboardTable } from "@/containers/leaderboard";
import { Winners } from "@/containers/leaderboard";
import { SearchBar } from "@/containers/leaderboard";

function Leaderboard() {
  return (
    <main className="bg-black ">
      <Winners />
      <SearchBar />
      <div className="bg-black mt-4">
        <LeaderboardTable />
      </div>
    </main>
  );
}

export default Leaderboard;
