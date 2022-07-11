import Main from "./components/Main";
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";
import DetailCountry from "./components/DetailCountry";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:cca3" element={<DetailCountry />} />
      </Routes>
    </>
  );
}

export default App;
