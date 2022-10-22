import styled from "styled-components";

export const CommunityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const AllCommunities = styled.div`
  background-color: white;
  margin: 24px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 40em;
`;
export const CommunityHeader = styled.div`
  -ms-flex-align: center;
  align-items: center;
  background-color: #f6f7f8;
  border-bottom: thin solid #f6f7f8;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 16px;
  top: 48px;
  z-index: 3;
`;

export const CommunityH3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #1c1c1c;
`;

export const CommunityOl = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;
