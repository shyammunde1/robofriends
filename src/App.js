// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import CardList from "./component/cardList.component";
import Search from "./component/search.component";
import { robots } from "./robots";
import Scroll from "./component/scroll.component";

const App = () => {
  const [searchRobo, setSearchRobo] = useState("");

  const onSeachChanges = (e) => {
    setSearchRobo(e.target.value);
  };

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchRobo.toLowerCase());
  });

  return (
    <div className="App">
      {robots.length === 0 ? (
        <h1> Loading...</h1>
      ) : (
        <div>
          <h1>!RoboFriends</h1>
          <Search onSearchChanges={onSeachChanges} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      )}
    </div>
  );
};

export default App;
