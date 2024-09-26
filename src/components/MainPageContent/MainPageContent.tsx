import {
  CourseProgramSection,
  FaqSection,
  HeadlineSection,
  ProblemsSection,
  ResultsSection,
  ReviewsSection,
  TargetAudienceSection,
  TicketSection,
  WhyUsSection,
} from "../sections";

export const MainPageContent = () => {
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
      <TicketSection />
    </div>
  );
};
