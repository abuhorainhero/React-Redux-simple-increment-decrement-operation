import { Provider } from "react-redux";
import "./App.css";
import Controll from "./Components/Controll";
import Value from "./Components/Value";
import Store from "./Redux/Store/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <h1>React-Redux simple Operation</h1>
        <hr />
        <Value />
        <hr />
        <Controll />
        <hr />
      </div>
    </Provider>
  );
}

export default App;
