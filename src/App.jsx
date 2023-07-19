import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <Header />
        <main className="flex flex-col justify-between h-96">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </GithubProvider>
  );
}

export default App;
