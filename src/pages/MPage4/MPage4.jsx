import React from "react";
import ItFrame from "./ItFrame";
import * as S from "./MPage4.style";

function MPage4() {
  const imageUrl = "/svgs/couple.svg";
  const propDetails = (
    <S.ChoiceWhat>
      <S.MainForm>
        <S.Forms>
          <S.Caption>모임 이름</S.Caption>
          <S.InputText
            type="text"
            placeholder="모임 이름을 입력하세요."
          ></S.InputText>
        </S.Forms>

        <S.MemCaption>모임인원</S.MemCaption>
        <S.MemberInput type="text"></S.MemberInput>
      </S.MainForm>
      <S.Next>모임만들기</S.Next>
    </S.ChoiceWhat>
  );

  return (
    <ItFrame
      propTitle="모임에 대해 알려주세요!"
      imageUrl={imageUrl}
      propDetails={propDetails}
    ></ItFrame>
  );
}

export default MPage4;
