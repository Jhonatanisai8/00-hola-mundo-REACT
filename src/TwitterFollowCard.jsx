export function TwitterFollowCard({
  children,
  userName = "unknow",
  isFollowing,
}) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={userName}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-info-username">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">
          {isFollowing ? "Siguiendo" : "Seguir"}
        </button>
      </aside>
    </article>
  );
}
