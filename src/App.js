import "./App.css";
import Header from "./Components/header";
import Content from "./Components/Content";
import Search from "./Components/Search/0search";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
