import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  CommunityItem,
  CommunityA,
  CommunityIndex,
  CommunityImg,
  TitleParagraph,
  CommunityCard,
  ForPadding,
  HoverItem,
  ImgTitle,
  HoverImg,
  HoverTitle,
  MembersOnline,
  Members,
  Online,
  HoverDescription,
  HoverH4,
  HoverP,
  HoverButton,
  CommunityRankChange,
  ArrowUp,
  ArrowDown,
} from "./CommunitySyle";

export default function Community(props) {
  const [isJoined, setIsJoined] = useState(props.isJoined);

  function changeButton() {
    setIsJoined((prevJoined) => !prevJoined);
  }
  const isRising = props.isJoined;
  return (
    <CommunityItem>
      <CommunityA href={`/${props.title}`}>
        <CommunityIndex>{props.index}</CommunityIndex>
        <FontAwesomeIcon
          icon={faAngleUp}
          style={isRising ? ArrowUp : ArrowDown}
        />
        <CommunityImg
          src={`./assets/images/${props.img}`}
          alt="logo"
        ></CommunityImg>
        <TitleParagraph>{props.title}</TitleParagraph>
        <CommunityCard>
          <ForPadding>
            <HoverItem>
              <ImgTitle>
                <HoverImg src={`./assets/images/${props.img}`} />
                <HoverTitle>{props.title}</HoverTitle>
              </ImgTitle>
              <MembersOnline>
                <Members>
                  <HoverH4>{props.stats.members}</HoverH4>
                  <HoverP>Members</HoverP>
                </Members>
                <Online>
                  <HoverH4>{props.stats.online}</HoverH4>
                  <HoverP>Online</HoverP>
                </Online>
              </MembersOnline>
              <HoverDescription>{props.description}</HoverDescription>
              <HoverButton>View Community</HoverButton>
            </HoverItem>
          </ForPadding>
        </CommunityCard>
      </CommunityA>
      <button
        className={isJoined ? "joined-btn" : "join-btn"}
        onClick={changeButton}
      >
        <span>{isJoined ? "Joined" : "Join"}</span>
      </button>
      <CommunityRankChange>{props.rankChange}</CommunityRankChange>
    </CommunityItem>
  );
}
