import "./App.css";
import "./Components/Structure/NavBar.jsx";
import NavBar from "./Components/Structure/NavBar.jsx";
import WelcomeSection from "./Components/Structure/WelcomeSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeSection />
    </div>
  );
}

export default App;
