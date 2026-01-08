export function TwitterFollowCard({
  children,
  userName = "unknow",
  isFollowing,
}) {
  const texto = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
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
        <button className={buttonClassName}>{texto}</button>
      </aside>
    </article>
  );
}
