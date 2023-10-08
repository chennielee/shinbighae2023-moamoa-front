// MakeFrame.js

import React from "react";
import * as S from "./ItFrame.style";
import { PageLayout } from "../../components";
import Megaphone from "../../images/megaphone.svg";

// 하위 컴포넌트
const ItFrame = (props) => {
  return (
    <PageLayout>
      <S.Questions>
        <S.Title>{props.propTitle}</S.Title>{" "}
        <S.Image src={Megaphone} alt="이미지" />
        <S.Details>{props.propDetails}</S.Details>{" "}
      </S.Questions>
    </PageLayout>
  );
};

export default ItFrame;
