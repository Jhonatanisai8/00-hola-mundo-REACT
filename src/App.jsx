import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const addAt = (userName) => `@${userName}`;
  // const format = (userName) => `@${userName}`;
  const formatteedUserName = (userName) => <span>@{userName}</span>;
  return (
    <section className="App">
      <TwitterFollowCard
        formatteedUserName={formatteedUserName("midudev")}
        userName="midudev"
        name="Midudev"
        isFollowing={true}
      />
      <TwitterFollowCard
        formatteedUserName={formatteedUserName("mouredev")}
        userName="mouredev"
        name="Mouredev"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatteedUserName={formatteedUserName("jhonatan")}
        userName="jhonatan"
        name="Jhonatan"
        isFollowing={false}
      />
    </section>
  );
}
