import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="bg-neutral-900 pt-6 pb-10">
      <Header />
      <Hero />
      <SearchBar />
    </div>
  );
}

export default App;
