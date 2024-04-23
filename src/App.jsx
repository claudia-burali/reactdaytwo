
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";




function App() {
  return (
    <div className="App">
      <header>
        <MyNav storeName="EpicBookShop" />
      </header>
      <main>
        <Welcome />
      </main>
      <footer className="fixed-bottom">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
