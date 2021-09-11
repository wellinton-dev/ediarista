import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./PageTitle.style";

interface PageTitleProsp {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProsp> = (prosp) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{prosp.title}</PageTitleStyled>
      <PageSubtitleStyled>{prosp.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
