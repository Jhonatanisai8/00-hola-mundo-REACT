import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const addAt = (userName) => `@${userName}`;
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="midudev"
        name="Midudev"
        isFollowing={true}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="mouredev"
        name="Mouredev"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="jhonatan"
        name="Jhonatan"
        isFollowing={false}
      />
    </section>
  );
}
