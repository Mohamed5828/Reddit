import "../Community Leaderboard/CommunityLeaderboard.css";
import Container from "../../Layouts/Communities Container/CommunitiesContainer";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import { MainPadding } from "../../Layouts/Communities Container/CommunitiesContainerStyle";
import RightSection from "../../Components/Right Section/RightSection";

function LeaderBoard() {
  return (
    <div className="LeaderBoard">
      <div className="page">
        <Header />
        <MainPadding>
          <Categories />
          <Container />
          <RightSection />
        </MainPadding>
      </div>
    </div>
  );
}

export default LeaderBoard;
