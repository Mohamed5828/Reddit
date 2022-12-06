import styled from "styled-components";

export const EmbeddedPage = styled.div`
  margin: 0;
  background: none;
  z-index: 1;
  min-height: 700px;
  background: #edeff1;
  color: #373c3f;
  padding: 1px;
`;

export const PageContainer = styled.div`
  margin: 20px auto;
  width: 70%;
  min-width: 700px;
  background: #edeff1;
  font: normal x-small verdana, arial, helvetica, sans-serif;
`;

export const OddItems = styled.div`
  background-color: #f6f7f8;
  margin: 0;
  padding: 10px 15px;
  &.even {
    background-color: #ffffff;
  }
`;
export const MessagesWithBtns = styled.div`
  color: #373c3f;
  margin-left: 10px;
  border-left: 2px dashed #e7e7e7;
  padding-bottom: 10px;
  width: 100%;
  &.expanded {
    display: inline-block;
  }
  &.collapsed {
    display: none;
  }
`;
export const Visted = styled.div`
  &.read-before {
    background-color: #edeff1;
    border-color: #edeff1;
    color: #373c3f;
    width: 100%;
  }
`;

export const AreYouSure = styled.div`
  display: none;
  &.active {
    display: inline;
  }
`;

export const BtnWarning = styled.span`
  font-size: x-small;
  color: red;
`;

export const ToggleExpan = styled.a`
  text-decoration: none;
  margin-right: 3px;
  color: #0079d3;
  cursor: pointer;
`;

export const Msg = styled.div`
  display: block;
  margin: 5px 0 5px 15px;
  line-height: 1.5em;
  font-size: 0.9rem;
  font-weight: 400;
  max-width: 60em;
`;

export const ListBtns = styled.ul`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  list-style: none;
  padding-left: 0;
`;

export const Btns = styled.li`
  display: inline-block;
  border: none;
  padding-right: 4px;
  padding-left: 4px;
  line-height: 1.6em;
  display: inline;
  white-space: nowrap;
`;

export const BtnsLinks = styled.a`
  color: #888;
  font-weight: bold;
  padding: 0 1px;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  line-height: 1.6em;
  &.active {
    display: none;
  }
  &:hover {
    color: #888;
    text-decoration: underline;
  }
`;

export const Subject = styled.div`
  margin-bottom: calc(0.5em + 10px);
  font-weight: bold;
  font-size: larger;
`;
export const Frame = styled.span`
  background-color: #fff;
  border: 1px solid #336699;
  color: #336699;
  display: inline-block;
  margin-right: 10px;
  padding: 2px 5px;
  border-radius: 7px;
  font-size: larger;
`;

export const FrameText = styled.a`
  font-weight: inherit;
  color: #0079d3;
  text-decoration: none;
  margin-right: 0.5em;
  cursor: pointer;
  &::before {
    content: "/u/";
  }
  &.admin {
    color: #ff0011;
  }
  &.visted {
    color: #80bce9;
  }
`;

export const ExpanCollap = styled.a`
  color: #0079d3;
  text-decoration: none;
  font-size: smaller;
  margin: 0px 5px;
  margin-top: 4px;
  cursor: pointer;
  display: inline-block;
`;

export const SubjectText = styled.span`
  font-weight: bold;
  font-size: larger;
  color: #373c3f;
`;

export const Tagline = styled.p`
  width: 100%;
  margin-bottom: 5px;
  padding-left: 14px;
  float: left;
  color: #878a8c;
  font-weight: inherit;
`;
export const TimeTag = styled(Tagline)`
  display: inline;
  float: none;
  &::before {
    content: " [A]";
    color: #ff0011;
    margin: 0 5px;
  }
`;

export const Author = styled.a`
  margin-right: -15px;
  text-decoration: none;
  cursor: pointer;
  color: #0079d3;
  &:hover {
    text-decoration: underline;
  }
  &.admin {
    color: #ff0011;
  }
  &.visted {
    color: #80bce9;
  }
  &::before {
    content: "/u/";
  }
`;
export const Expand = styled.a`
  margin-right: 3px;
  display: none;
`;

export const MessageDetails = styled.div`
  padding: 10px 15px;
`;