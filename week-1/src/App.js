import "./App.css";
import { Header } from "./pages/header/Header";
import { Main } from "./pages/main/Main";
import { Footer } from "./pages/footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header></Header>
      </div>
      <div className="App-main">
        <Main></Main>
      </div>
      <div className="App-footer">
        <Footer />
        <Footer />
        <Footer />
      </div>
    </div>
  );
}
export default App;
