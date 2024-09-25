import styles from "./App.module.scss";
import { HeadlineSection } from "./components/sections";
import { ProblemsSection } from "./components/sections";
import { TargetAudienceSection } from "./components/sections";
import { WhyUsSection } from "./components/sections";
import { CourseProgramSection } from "./components/sections";
import { FaqSection } from "./components/sections";
import { ResultsSection } from "./components/sections";
import { ReviewsSection } from "./components/sections";
import { TicketSection } from "./components/sections";

function App() {
  return (
    <div className={styles.container}>
      <HeadlineSection />
      <ProblemsSection />
      <TargetAudienceSection />
      <WhyUsSection />
      <CourseProgramSection />
      <ResultsSection />
      <ReviewsSection />
      <FaqSection />
      <TicketSection />
    </div>
  );
}

export default App;
