import styled from "styled-components";

export const EmbeddedPage = styled.div`
  transition: 0.3s;
  margin: 0;
  background: none;
  z-index: 1;
  min-height: 700px;
  background: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.color.primary};
  padding: 1px;
`;

export const PageContainer = styled.div`
  transition: 0.3s;
  margin: 20px auto;
  width: 70%;
  min-width: 700px;
  background: ${({ theme }) => theme.canvas};
  font: normal x-small verdana, arial, helvetica, sans-serif;
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
