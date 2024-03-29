import styled from "styled-components";

export const IndexPageContainer = styled.div`
  background-color: ${({ theme }) => theme.canvas};
  min-height: calc(100vh - 48px);
  line-height: 1;
  font-family: IBMPlexSans, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;
export const StyledIndexPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
