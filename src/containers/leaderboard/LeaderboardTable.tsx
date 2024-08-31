import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

// Sample data for the leaderboard
const leaderboardData = [
  {
    username: "Ankit",
    image: "/sample.png",
    cupcake: 5300,
    rank: 1,
  },
  {
    username: "John",
    image: "/sample.png",
    cupcake: 6400,
    rank: 2,
  },
  {
    username: "Emily",
    image: "/sample.png",
    cupcake: 5200,
    rank: 3,
  },
  {
    username: "Ankit",
    image: "/sample.png",
    cupcake: 1300,
    rank: 4,
  },
  {
    username: "John",
    image: "/sample.png",
    cupcake: 400,
    rank: 5,
  },
  {
    username: "Emily",
    image: "/sample.png",
    cupcake: 200,
    rank: 6,
  },
];

export function LeaderboardTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left w-[]">Username</TableHead>
          <TableHead className="text-center w-[]">Cupcake</TableHead>
          <TableHead className="text-center">Rank</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderboardData.map((player) => (
          <TableRow key={player.rank}>
            <TableCell className="flex items-center gap-2 font-medium ">
              <Image
                src={player.image}
                alt={`${player.username} Avatar`}
                width={32}
                height={32}
                className="rounded-full border-2 border-light-blue"
              />
              <span>{player.username}</span>
            </TableCell>
            <TableCell className="text-center">{player.cupcake}</TableCell>
            <TableCell className="text-center">{player.rank}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>{/* Optionally, you can add a footer here */}</TableFooter>
    </Table>
  );
}

export default LeaderboardTable;
