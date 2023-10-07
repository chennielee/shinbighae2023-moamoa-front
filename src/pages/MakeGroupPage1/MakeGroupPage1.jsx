import React from "react";
import MakeFrame from "./MakeFrame";
import { useNavigate } from "react-router-dom";
import * as S from "./MakeGroupPage1.style";

function MakeGroupPage1() {
  const imageUrl = "/svgs/together.svg";
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/makegroup3");
  };
  const propDetails = (
    <S.ChoiceWho>
      <S.Option>
        <S.OptionImg src="/svgs/friends.svg" alt="차트"></S.OptionImg>
        <S.OptionContent>친구</S.OptionContent>
      </S.Option>

      <S.Option>
        <S.OptionImg src="/svgs/family.svg" alt="차트"></S.OptionImg>
        <S.OptionContent>가족</S.OptionContent>
      </S.Option>

      <S.Option>
        <S.OptionImg src="/svgs/couple.svg" alt="차트"></S.OptionImg>
        <S.OptionContent>커플</S.OptionContent>
      </S.Option>
      <S.Next onClick={handleNextClick}>다음으로</S.Next>
    </S.ChoiceWho>
  );

  return (
    <MakeFrame
      propTitle="누구랑 모아볼까요?"
      imageUrl={imageUrl}
      propDetails={propDetails}
    ></MakeFrame>
  );
}

export default MakeGroupPage1;
