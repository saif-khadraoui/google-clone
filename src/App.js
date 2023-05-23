import SearchPage from "./pages/SearchPage/SearchPage";
import {SearchContext} from "./contexts/SearchContext"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {
  const [searchedItem, setSearchedItem] = useState("");

  return (
    <div className="app">
      <SearchContext.Provider value={{ searchedItem, setSearchedItem }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<SearchPage />} />
            <Route path="/search/:id" element={<ResultsPage />}>
              <Route path="/search/:id/images" element={<ResultsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
