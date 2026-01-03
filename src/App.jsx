import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const addAt = (userName) => `@${userName}`;
  // const format = (userName) => `@${userName}`;
  // const formatteedUserName = (userName) => <span>@{userName}</span>;
  return (
    <section className="App">
      <TwitterFollowCard
        userName="midudev"
        name="Midudev"
        isFollowing={true}
      />
      <TwitterFollowCard
        userName="mouredev"
        name="Mouredev"
        isFollowing={false}
      />
      <TwitterFollowCard
        userName="jhonatan"
        name="Jhonatan"
        isFollowing={false}
      />
    </section>
  );
}
