import React, { useState } from "react";
import MakeFrame from "./MakeFrame";
import { useNavigate } from "react-router-dom";
import * as S from "./MakeGroupPage1.style";
import blackCheck from "../../images/icons-check-black.svg";
import greyCheck from "../../images/icons-check-grey.svg";

function MakeGroupPage1() {
  const [checkIcon, setCheckIcon] = useState(false);
  const [selected, setSelected] = useState({
    id: "1",
    src: "/svgs/friends.svg",
    label: "친구",
    participantType: "FRIEND",
  });
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/makegroup3", {
      state: { participantType: selected.participantType },
    });
  };

  const propDetailsComponents = [
    {
      id: "1",
      src: "/svgs/friends.svg",
      label: "친구",
      participantType: "FRIEND",
    },
    {
      id: "2",
      src: "/svgs/family.svg",
      label: "가족",
      participantType: "FAMILY",
    },
    {
      id: "3",
      src: "/svgs/couple.svg",
      label: "커플",
      participantType: "LOVER",
    },
  ];

  const clickHandler = (comp) => {
    setCheckIcon(!checkIcon);
    setSelected(comp);
  };

  const propDetails = (
    <S.ChoiceWho>
      {propDetailsComponents.map((component) => (
        <S.Option onClick={() => clickHandler(component)} key={component.id}>
          <S.OptionImg src={component.src} alt="차트"></S.OptionImg>
          <S.OptionContent>{component.label}</S.OptionContent>
          {checkIcon && selected.id === component.id ? (
            <S.Check src={blackCheck} alt="check"></S.Check>
          ) : (
            <S.Check src={greyCheck} alt="check"></S.Check>
          )}
        </S.Option>
      ))}
      {checkIcon ? (
        <S.Next onClick={handleNextClick}>다음으로</S.Next>
      ) : (
        <S.NextDisabled>다음으로</S.NextDisabled>
      )}
    </S.ChoiceWho>
  );

  return (
    <MakeFrame
      propTitle={"누구랑 \n 투자할까요?"}
      propDetails={propDetails}
    ></MakeFrame>
  );
}

export default MakeGroupPage1;
