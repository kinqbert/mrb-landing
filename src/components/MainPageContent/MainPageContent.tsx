import {
  HeadlineSectionDesktop,
  TargetAudienceSectionDesktop,
} from "../Desktop";
import {
  CourseProgramSectionMobile,
  FaqSectionMobile,
  ProblemsSectionMobile,
  ResultsSectionMobile,
  ReviewsSectionMobile,
  TicketSectionMobile,
  WhyUsSectionMobile,
  HeadlineSectionMobile,
  TargetAudienceSectionMobile,
} from "../Mobile";

import { useEffect, useState } from "react";

export const MainPageContent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width < 1024;

  if (isMobile) {
    return (
      <div className="container">
        <HeadlineSectionMobile />
        <ProblemsSectionMobile />
        <TargetAudienceSectionMobile />
        <WhyUsSectionMobile />
        <CourseProgramSectionMobile />
        <ResultsSectionMobile />
        <ReviewsSectionMobile />
        <FaqSectionMobile />
        <TicketSectionMobile />
      </div>
    );
  }

  return (
    <div className="container">
      <HeadlineSectionDesktop />
      <TargetAudienceSectionDesktop />
    </div>
  );
};
