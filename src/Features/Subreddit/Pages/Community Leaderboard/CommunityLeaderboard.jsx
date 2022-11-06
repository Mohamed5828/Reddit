import Container from "../../Layouts/Communities Container/CommunitiesContainer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import { MainPadding } from "../../Layouts/Communities Container/CommunitiesContainerStyle";
import RightSection from "../../Components/Right Section/RightSection";
import {
  LeaderBoardContainer,
  LeaderBoardPage,
} from "./CommunityLeaderboardStyle";
import { DataContext } from "../../Services/DataContext";
import { useMemo, useState } from "react";
import data from "../../Services/data.json";
import { Route, Routes } from "react-router-dom";

/**
 * Component that contains the whole community leaderboard page
 *
 * @returns {React.Component}
 */
function LeaderBoard() {
  const [communityData, setCommunityData] = useState(data);
  const providedData = useMemo(
    () => ({ communityData, setCommunityData }),
    [communityData, setCommunityData]
  );

  return (
    <LeaderBoardContainer>
      <LeaderBoardPage>
        <Header />
        <MainPadding>
          <DataContext.Provider value={providedData}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Categories />
                    <Container />
                    <RightSection />
                  </>
                }
              />
              <Route
                path="/category/:categoryType"
                element={
                  <>
                    <Categories />
                    <Container />
                    <RightSection />
                  </>
                }
              />
            </Routes>
          </DataContext.Provider>
        </MainPadding>
      </LeaderBoardPage>
    </LeaderBoardContainer>
  );
}

export default LeaderBoard;
