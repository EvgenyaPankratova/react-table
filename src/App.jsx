import { Main } from "./components/Main/Main";
import { HashRouter, Routes, Route} from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} index />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
