import React from "react";
import { useState } from "react";
import IsFrame from "./IsFrame";
import * as S from "./MKPage3.style";
import { useNavigate, useLocation } from "react-router-dom";

function MKPage3() {
  //  Navigation으로 데이터 전달 확인
  const { state } = useLocation();

  // 다음 개설 페이지로 넘어가기
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/makegroup4", {
      state: {
        participantType: state.participantType,
        profitTarget: targetProfit,
        deadlineDate: period,
      },
    });
  };

  // Form 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 목표 금액값 저장
  const [targetProfit, setTargetProfit] = useState("");
  const saveTargetProfit = (event) => {
    setTargetProfit(event.target.value);
  };

  // 목표 기간 저장
  const [period, setPeriod] = useState("");
  const saveDate = (event) => {
    setPeriod(event.target.value);
  };

  const propDetails = (
    <S.ChoiceWhat>
      <S.MainForm>
        <S.Forms onSubmit={handleSubmit}>
          <S.Caption>목표 금액</S.Caption>
          <S.InputText
            type="text"
            placeholder="목표 금액을 숫자로 알려주세요 (ex. 3000000)"
            value={targetProfit}
            onChange={saveTargetProfit}
          ></S.InputText>
        </S.Forms>

        <S.Caption>목표 날짜</S.Caption>
        <S.DateInput
          type="date"
          value={period}
          onChange={saveDate}
        ></S.DateInput>
      </S.MainForm>
      <S.Next onClick={handleNextClick}>다음으로</S.Next>
    </S.ChoiceWhat>
  );

  return (
    <IsFrame
      propTitle={"얼마를 \n 언제까지 \n 투자할까요?"}
      propDetails={propDetails}
    ></IsFrame>
  );
}

export default MKPage3;
