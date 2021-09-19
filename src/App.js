import "./App.css";

import Card from "./components/Card";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import SearchBar from "./screens/SearchBar";
import { Store } from "./redux/configStore";
import logo from "./logo.svg";
import mockData from "./mock/MockData";

function App() {
  const moreInformation = (url) => {
    if (!url) {
      return null;
    }
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Provider store={Store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
