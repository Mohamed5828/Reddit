import Community from "../../Components/Community/Community";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH3,
  CommunityHeaderSpan,
  CommunityOl,
} from "./CommunitiesContainerStyle";
import { useContext } from "react";
import { DataContext } from "Features/Subreddit/Services/DataContext";

/**
 * Component acts as a container for all communities of the community leaderboard page
 *
 * @returns {React.Component}
 */
export default function Container() {
  let { communityData, setCommunityData } = useContext(DataContext);
  const communities = communityData.map((community, index) => {
    const key = community.id.toString();
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
