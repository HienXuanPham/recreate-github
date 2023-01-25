import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import LoginControls from "./components/LoginControls";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <NavigationBar />
        <SearchBar />
        <LoginControls />
      </section>
    </div>
  );
}

export default App;
