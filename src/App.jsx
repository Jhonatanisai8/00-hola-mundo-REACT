import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const addAt = (userName) => `@${userName}`;
  // const format = (userName) => `@${userName}`;
  // const formatteedUserName = (userName) => <span>@{userName}</span>;
  return (
    <section className="App">
      <TwitterFollowCard name="Midudev" isFollowing={true}>
        Midudev
      </TwitterFollowCard>
      <TwitterFollowCard
        userName="mouredev"
        name="Mouredev"
        isFollowing={false}
      >
        Midudev
      </TwitterFollowCard>

      <TwitterFollowCard
        userName="jhonatan"
        name="Jhonatan"
        isFollowing={false}
      >
        Jhonatan
      </TwitterFollowCard>
    </section>
  );
}
