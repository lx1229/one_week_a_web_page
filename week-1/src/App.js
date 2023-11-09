import "./App.css";
import { Header } from "./pages/header/Header";
import { Main } from "./pages/main/Main";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      <div className="App-main">
        <Main></Main>
      </div>
      <div className="App-footer"></div>
    </div>
  );
}
export default App;
