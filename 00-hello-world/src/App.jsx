//import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName={"theweeknd"} name={"Abel Tesfaye" } />
      <TwitterFollowCard isFollowing= {false} userName={"slash"} name={"Saul Hudson"} />
      <TwitterFollowCard isFollowing userName={"elonmusk"} name={"Elon Musk"} />
      <TwitterFollowCard isFollowing= {false}userName={"gerick21"} name={"Gerick Vargas Camacho"} />
    </section>
  );
}
