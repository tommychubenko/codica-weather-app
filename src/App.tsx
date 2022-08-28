import { Routes, Route } from "react-router-dom";
import { Details } from "./components/Details";
import { Error } from "./components/Error";
import { Home } from "./components/Home";
import { SearchBar } from "./components/SearchBar";

const App = () => {
  return (
    <div className="container" data-testid="app">
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/codica-weather-app/" element={<Home />} />

          <Route path="/city/:id" element={<Details />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
