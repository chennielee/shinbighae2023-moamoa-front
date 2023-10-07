import React from "react";
import IsFrame from "./IsFrame";
import * as S from "./MKPage3.style";
import { useNavigate } from "react-router-dom";

function MKPage3() {
  const imageUrl = "/svgs/couple.svg";
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/makegroup4");
  };

  const propDetails = (
    <S.ChoiceWhat>
      <S.MainForm>
        <S.Forms>
          <S.Caption>목표 금액</S.Caption>
          <S.InputText
            type="text"
            placeholder="목표금액을 입력하세요."
          ></S.InputText>
        </S.Forms>

        <S.DateCaption>목표날짜</S.DateCaption>
        <S.DateInput type="date"></S.DateInput>
      </S.MainForm>
      <S.Next onClick={handleNextClick}>다음으로</S.Next>
    </S.ChoiceWhat>
  );

  return (
    <IsFrame
      propTitle="얼마를 언제까지 투자할까요?"
      imageUrl={imageUrl}
      propDetails={propDetails}
    ></IsFrame>
  );
}

export default MKPage3;
