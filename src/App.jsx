import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const addAt = (userName) => `@${userName}`;
  // const format = (userName) => `@${userName}`;
  // const formatteedUserName = (userName) => <span>@{userName}</span>;
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={true}>Midudev</TwitterFollowCard>
      <TwitterFollowCard userName="mouredev" isFollowing={false}>
        Midudev
      </TwitterFollowCard>

      <TwitterFollowCard userName="jhonatan" isFollowing={false}>
        Jhonatan
      </TwitterFollowCard>
    </section>
  );
}
