import styled from "styled-components";
import {
  AllCommunities,
  CommunityH3,
  CommunityHeader,
  CommunityOl,
} from "./CommunitiesContainerStyle";

export const AllCategories = styled(AllCommunities)`
  min-width: 192px;
  max-width: 192px;
  background-color: inherit;
  margin-right: 24px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const CategoryHeader = styled(CommunityHeader)`
  position: static;
`;
export const CategoryH3 = CommunityH3;
export const CategoryOl = CommunityOl;

export const Category = styled.a`
  background-color: white;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  -ms-flex-align: center;
  align-items: center;
  color: #1c1c1c;
  display: -ms-flexbox;
  display: flex;
  height: 36px;
  padding-left: 16px;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    background-color: #f6f7f8;
  }

  &:focus::before {
    background-color: #0079d3;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    width: 5px;
  }
`;
