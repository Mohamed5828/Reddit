import Community from "./Community";
import data from "./data";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH3,
  CommunityOl,
} from "./CommunitiesContainerStyle";

export default function Container() {
  const communities = data.map((community) => {
    return (
      <li>
        <Community
          key={community.id}
          img={community.coverImg}
          title={community.title}
          isJoined={community.isJoined}
          stats={community.stats}
          description={community.description}
        />
      </li>
    );
  });
  return (
    <CommunityContainer>
      <AllCommunities>
        <CommunityHeader>
          <CommunityH3> Today's Top Growing Communities</CommunityH3>
        </CommunityHeader>
        <CommunityOl>{communities}</CommunityOl>
      </AllCommunities>
    </CommunityContainer>
  );
}
