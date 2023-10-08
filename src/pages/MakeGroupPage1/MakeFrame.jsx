// MakeFrame.js

import React from "react";
import * as S from "./MakeFrame.style";
import { PageLayout } from "../../components";
import Together from "../../images/together.svg";

// 하위 컴포넌트
const MakeFrame = (props) => {
  return (
    <PageLayout>
      <S.Questions>
        <S.Title>{props.propTitle}</S.Title>{" "}
        <S.Image src={Together} alt="이미지" />
        <S.Details>{props.propDetails}</S.Details>{" "}
      </S.Questions>
    </PageLayout>
  );
};

export default MakeFrame;
