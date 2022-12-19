import styled from "styled-components";

export const EmbeddedPage = styled.div`
  margin: 0;
  background: none;
  z-index: 1;
  min-height: 700px;
  background: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
  padding: 1px;
`;

export const PageContainer = styled.div`
  margin: 20px auto;
  width: 70%;
  min-width: 700px;
  background: ${({ theme }) => theme.canvas};
  transition: 0.3s;
  font: normal x-small verdana, arial, helvetica, sans-serif;

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.background.lightMuted};
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.background.primary};
  }
  @media screen and (max-width: 850px) {
    min-width: unset;
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
