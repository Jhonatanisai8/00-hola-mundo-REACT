import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const addAt = (userName) => `@${userName}`;
  const format = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        userName="midudev"
        name="Midudev"
        isFollowing={true}
      />
      <TwitterFollowCard
        formatUserName={format}
        userName="mouredev"
        name="Mouredev"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={format}
        userName="jhonatan"
        name="Jhonatan"
        isFollowing={false}
      />
    </section>
  );
}
