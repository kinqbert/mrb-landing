import {
  HeadlineSectionDesktop,
  TargetAudienceSectionDesktop,
} from "../Desktop";
import { FaqSectionDesktop } from "../Desktop/FaqSectionDesktop/FaqSectionDesktop";
import { FormSectionDesktop } from "../Desktop/FormSectionDesktop";
import { ResultsSectionDesktop } from "../Desktop/ResultsSectionDesktop";
import { TicketSectionDesktop } from "../Desktop/TicketSectionDesktop";
import { FooterSectionDesktop } from "../Desktop/FooterSectionDesktop";
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
import { DesktopGradientBackground } from "../common/DesktopGradientBackground/DesktopGradientBackground";
import useWindowSize from "~/hooks/useWindowSize";

export const MainPageContent = () => {
  const { width } = useWindowSize();

  const isMobile = width < 1024;

  if (isMobile) {
    return (
      <>
        <HeadlineSectionMobile />
        <FeaturesSectionMobile />
        <TargetAudienceSectionMobile />
        <WhyUsSectionMobile />
        <CourseProgramSectionMobile />
        <ResultsSectionMobile />
        <ReviewsSectionMobile />
        <FaqSectionMobile />
        <TicketSectionMobile />
      </>
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
      <FooterSectionDesktop />
      <DesktopGradientBackground />
    </div>
  );
};
