import "./App.scss";
import { HeadlineSection } from "./components/sections";
import { ProblemsSection } from "./components/sections";
import { TargetAudienceSection } from "./components/sections";
import { WhyUsSection } from "./components/sections";
import { CourseProgramSection } from "./components/sections";
import { FaqSection } from "./components/sections/FaqSection";
import { ResultsSection } from "./components/sections/ResultsSection";
import { ReviewsSection } from "./components/sections/ReviewsSection/ReviewsSection";

function App() {
  return (
    <div className="container">
      <HeadlineSection />
      <ProblemsSection />
      <TargetAudienceSection />
      <WhyUsSection />
      <CourseProgramSection />
      <ResultsSection />
      <ReviewsSection />
      <FaqSection />
    </div>
  );
}

export default App;
