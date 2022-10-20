import React, { useState } from "react";

export default function Community(props) {
  const [isJoined, setIsJoined] = useState(props.isJoined);

  function changeButton() {
    setIsJoined((prevJoined) => !prevJoined);
  }

  return (
    <div className="community">
      <a href={`/${props.title}`}>
        <img
          className="community--img"
          src={`./assets/images/${props.img}`}
          alt="logo"
        />
        <p className="community--title">{props.title}</p>
      </a>
      <button
        className={isJoined ? "joined-btn" : "join-btn"}
        onClick={changeButton}
      >
        <span>{isJoined ? "Joined" : "Join"}</span>
      </button>
    </div>
  );
}
