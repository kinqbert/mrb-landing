import "./App.scss";
import { HeadlineSection } from "./components/sections";
import { ProblemsSection } from "./components/sections/ProblemsSection";

function App() {
  return (
    <div className="container">
      <HeadlineSection />
      <ProblemsSection />
    </div>
  );
}

export default App;
