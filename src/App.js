import "./Components/App.css";
import Container from "./Components/CommunitiesContainer";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import { MainPadding } from "./Components/CommunitiesContainerStyle";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <MainPadding>
          <Categories />
          <Container />
        </MainPadding>
      </div>
    </div>
  );
}

export default App;
