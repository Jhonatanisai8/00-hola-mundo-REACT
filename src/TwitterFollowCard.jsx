import { useState } from "react";
export function TwitterFollowCard({
  children,
  userName = "unknow",
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const texto = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  console.log("Nombre Renderisado tw", userName);

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
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{texto}</span>
          <span className="tw-followCard-stopFollow"> Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
