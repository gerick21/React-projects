//import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      userName: "axlrose",
      name: "Axl rose",
      isFollowing: false,
    },
    {
      userName: "honeymoon",
      name: "Lana del Rey",
      isFollowing: true,
    },
    {
      userName: "mickjagger",
      name: "Mick Jagger",
      isFollowing: false,
    },
    {
      userName: "freddiemercury",
      name: "Freddie Mercury",
      isFollowing: true,
    },
  ];

  return (
    <section className="App">
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          initialIsFollowing={user.isFollowing}
        >
          {user.name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
