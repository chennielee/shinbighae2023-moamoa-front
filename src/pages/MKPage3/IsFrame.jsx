// MakeFrame.js

import React from "react";
import * as S from "./IsFrame.style";
import { PageLayout } from "../../components";
import Coin from "../../images/icons-stack-of-coins.png";

// 하위 컴포넌트
const IsFrame = (props) => {
  return (
    <PageLayout>
      <S.Questions>
        <S.Title>{props.propTitle}</S.Title> <S.Image src={Coin} alt="이미지" />
        <S.Details>{props.propDetails}</S.Details>{" "}
      </S.Questions>
    </PageLayout>
  );
};

export default IsFrame;
