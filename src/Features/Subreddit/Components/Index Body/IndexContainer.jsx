// import communityIndex from "../../Services/communityIndex";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH1,
  ContentDiv,
  ContentItem,
  ContentA,
} from "./IndexContainer.styled";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

/**
 * Component acts as a container for all communities of the Community Indexing Page
 * @Component
 * @returns {React.Component}
 */
export default function IndexContainer() {

  let [indexedList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/indexed--Leaderboard",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  const communities = indexedList.map((community, index) => {
    return (
        <ContentItem key = {community.id}>
          <ContentA>{community.title}</ContentA>
        </ContentItem>
    );
  });
  return (
    <CommunityContainer>
      <AllCommunities>
        <CommunityHeader>
          <CommunityH1> Browse communities starting with 'A'</CommunityH1>
        </CommunityHeader>
        <ContentDiv>{communities}</ContentDiv>
      </AllCommunities>
    </CommunityContainer>
  );
}
