import Community from "../../Components/Community/Community";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH3,
  CommunityHeaderSpan,
  CommunityOl,
} from "./CommunitiesContainerStyle";
import { useParams } from "react-router-dom";

import { DataContext } from "Features/Subreddit/Services/DataContext";
import React, { useEffect, useState, useContext } from "react";

/**
 * Component acts as a container for all communities of the community leaderboard page
 *
 * @returns {React.Component}
 */
export default function Container() {
  let { communityData, setCommunityData } = useContext(DataContext);
  const { categoryType } = useParams();


  //Fetch for Communities (should be of specific category), can be not here, but they're here for now
  let [communitiesList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/communities",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  console.log(communitiesList);


  useEffect(() => {
    if (categoryType == "All Communititles") {
      setCommunityData((e) => e);
    } else {
      setCommunityData((e) =>
        e.filter((item) => item.category == categoryType)
      );
    }
    console.log(categoryType);
  }, [categoryType]);

  //Using Fetched Data from JSON Server
  const communities = communitiesList.map((community, index) => {
    const key = community.id.toString();
    const id  = community.id;
    const indexs = index + 1;
    const img = community.coverImg;
    const title = community.title;
    const isJoined = community.isJoined;
    const stats = community.stats;
    const description = community.description;
    const rankChange = community.rankChange;

    return (
      <li>
        <Community
          key={key}
          id={id}
          index={indexs}
          img={img}
          title={title}
          isJoined={isJoined}
          stats={stats}
          description={description}
          rankChange={rankChange}
        />
      </li>
    );
  });

  return (
    <CommunityContainer>
      <AllCommunities>
        <CommunityHeader>
          <CommunityH3> Today's Top Growing Communities</CommunityH3>
          <CommunityHeaderSpan>Rank Change</CommunityHeaderSpan>
        </CommunityHeader>
        <CommunityOl>{communities}</CommunityOl>
      </AllCommunities>
    </CommunityContainer>
  );
}
