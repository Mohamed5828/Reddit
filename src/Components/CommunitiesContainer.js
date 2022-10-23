import Community from "./Community";
import data from "./data";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH3,
  CommunityHeaderSpan,
  CommunityOl,
} from "./CommunitiesContainerStyle";

export default function Container() {
  const communities = data.map((community) => {
    return (
      <li>
        <Community
          key={community.id.toString()}
          index = {community.id}
          img={community.coverImg}
          title={community.title}
          isJoined={community.isJoined}
          stats={community.stats}
          description={community.description}
          rankChange = {community.rankChange}
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
