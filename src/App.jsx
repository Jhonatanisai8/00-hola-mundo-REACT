import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const addAt = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard userName={addAt("midudev")} name="Midudev" isFollowing={true} />
      <TwitterFollowCard
        userName={addAt("mouredev")}
        name="Mouredev"
        isFollowing={false}
      />
      <TwitterFollowCard
        userName={addAt("jhonatan")}
        name="Jhonatan"
        isFollowing={false}
      />
    </section>
  );
}
