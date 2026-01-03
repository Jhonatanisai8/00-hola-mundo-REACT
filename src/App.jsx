import "./App.css";
export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/kikobeats"
          alt="Kikobets"
        />
        <div className="tw-followCard-info">
          <strong>Kikobeats</strong>
          <span className="tw-followCard-info-username">@kikobeats</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
