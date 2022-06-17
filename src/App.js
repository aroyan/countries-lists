import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ListOfCountries from "./components/ListOfCountries";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Routes>
        <Route path="/country/:cca3" element={<ListOfCountries />} />
      </Routes>
    </>
  );
}

export default App;
