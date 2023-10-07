import React from "react";
import MakeFrame from "./MakeFrame";
import * as S from "./MakeGroupPage2.style";
import { useNavigate } from "react-router-dom";

function MakeGroupPage2() {
  const imageUrl = "/svgs/family.svg";
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/makegroup3");
  };

  const propDetails = (
    <S.ChoiceWho>
      <S.Option>
        <S.OptionImg src="/svgs/friends.svg" alt="차트"></S.OptionImg>
        <S.OptionContent>여행</S.OptionContent>
      </S.Option>

      <S.Option>
        <S.OptionImg src="/svgs/family.svg" alt="차트"></S.OptionImg>
        <S.OptionContent>노후</S.OptionContent>
      </S.Option>

      <S.Option>
        <S.OptionImg src="/svgs/couple.svg" alt="차트"></S.OptionImg>
        <S.OptionContent>쇼핑</S.OptionContent>
      </S.Option>

      <S.Option>
        <S.OptionImg src="/svgs/couple.svg" alt="차트"></S.OptionImg>
        <S.OptionContent>집구매</S.OptionContent>
      </S.Option>

      <S.Option>
        <S.OptionImg src="/svgs/couple.svg" alt="차트"></S.OptionImg>
        <S.OptionContent>의료</S.OptionContent>
      </S.Option>

      <S.Next onClick={handleNextClick}>다음으로</S.Next>
    </S.ChoiceWho>
  );

  return (
    <MakeFrame
      propTitle="무엇을 위해 모아볼까요?"
      imageUrl={imageUrl}
      propDetails={propDetails}
    ></MakeFrame>
  );
}

export default MakeGroupPage2;
