import "./App.scss";
import { HeadlineSection } from "./components/sections";
import { ProblemsSection } from "./components/sections";
import { TargetAudienceSection } from "./components/sections";
import { WhyUsSection } from "./components/sections";
import { CourseProgramSection } from "./components/sections";

function App() {
  return (
    <div className="container">
      <HeadlineSection />
      <ProblemsSection />
      <TargetAudienceSection />
      <WhyUsSection />
      <CourseProgramSection />
    </div>
  );
}

export default App;
