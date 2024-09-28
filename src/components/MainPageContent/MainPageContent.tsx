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

import { useEffect, useState } from "react";

import styles from "./MainPageContent.module.scss";
import { DesktopGradientBackground } from "../common/DesktopGradientBackground/DesktopGradientBackground";

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
