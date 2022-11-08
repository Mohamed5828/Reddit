import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  AllCommunities,
  CommunityH3,
  CommunityHeader,
  CommunityOl,
} from "../../Layouts/Communities Container/CommunitiesContainerStyle";

export const AllCategories = styled(AllCommunities)`
  min-width: 192px;
  max-width: 192px;
  background-color: inherit;
  margin-right: 24px;
  margin-top: 0;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const CategoryHeader = styled(CommunityHeader)`
  position: static;
`;

export const CategoryH3 = CommunityH3;
export const CategoryOl = CommunityOl;

export const ShowMoreBtn = styled.button`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.link};
  transition: 0.3s;
  width: 100%;
  position: relative;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  border: 1px solid transparent;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.color.primary};
    opacity: 0.08;
  }
`;

export const Category = styled(NavLink)`
transition: 0.3s;
background-color: ${({ theme }) => theme.background.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  align-items: center;
  color: ${({ theme }) => theme.categoryColor.text};
  display: flex;
  height: 36px;
  padding-left: 16px;
  position: relative;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.categoryColor.hover};
    color: ${({ theme }) => theme.categoryColor.text};
  }

  &.active {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.categoryColor.hover};
    color: ${({ theme }) => theme.categoryColor.text};
  }

  &.active::before {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.color.secondary};
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    width: 5px;
  }
`;