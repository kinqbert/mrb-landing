import {
  HeadlineSectionDesktop,
  TargetAudienceSectionDesktop,
} from "../Desktop";
import { FaqSectionDesktop } from "../Desktop/FaqSectionDesktop/FaqSectionDesktop";
import { FormSectionDesktop } from "../Desktop/FormSectionDesktop";
import { ResultsSectionDesktop } from "../Desktop/ResultsSectionDesktop";
import { TicketSectionDesktop } from "../Desktop/TicketSectionDesktop";
import { FooterSection } from "../common/FooterSection";
import {
  CourseProgramSectionMobile,
  FaqSectionMobile,
  FeaturesSectionMobile,
  ResultsSectionMobile,
  ReviewsSectionMobile,
  TicketSectionMobile,
  WhyUsSectionMobile,
  HeadlineSectionMobile,
  TargetAudienceSectionMobile,
} from "../Mobile";

import styles from "./MainPageContent.module.scss";
import useWindowSize from "~/hooks/useWindowSize";
import { BackgroundMobile } from "../Mobile/BackgroundMobile";

export const MainPageContent = () => {
  const { width } = useWindowSize();

  const isMobile = width < 1024;

  if (isMobile) {
    return (
      <div className={styles.mainPageMobileContainer}>
        <HeadlineSectionMobile />
        <FeaturesSectionMobile />
        <TargetAudienceSectionMobile />
        <WhyUsSectionMobile />
        <CourseProgramSectionMobile />
        <ResultsSectionMobile />
        <ReviewsSectionMobile />
        <FaqSectionMobile />
        <TicketSectionMobile />
        <FooterSection />
        <BackgroundMobile />
      </div>
    );
  }

  return (
    <div className={styles.mainPageDesktopContainer}>
      <HeadlineSectionDesktop />
      <TargetAudienceSectionDesktop />
      <ResultsSectionDesktop />
      <TicketSectionDesktop />
      <FaqSectionDesktop />
      <FormSectionDesktop />
      <FooterSection />
    </div>
  );
};
