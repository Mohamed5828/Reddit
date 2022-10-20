import "./Components/App.css";
import Container from "./Components/CommunitiesContainer";
import Categories from "./Components/Categories";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Categories />
        <Container />
      </div>
    </div>
  );
}

export default App;
