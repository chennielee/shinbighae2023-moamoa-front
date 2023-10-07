import React from "react";
import * as S from "./InvestChange.style";

const InvestChange = () => {
  return (
    <S.MainBox>
      <S.Title>주식 이름</S.Title>
      <S.ProfitArr>
        <S.Profits>수익률</S.Profits>
        <S.ProfitNum>수익률 숫자</S.ProfitNum>
      </S.ProfitArr>

      <S.GainBox>
        <S.A>
          <S.Topic>보유</S.Topic>
          <S.Answer> 보유 주 </S.Answer>
        </S.A>

        <S.A>
          <S.Topic>현재가</S.Topic>
          <S.Answer> 현재가 </S.Answer>
        </S.A>
      </S.GainBox>
    </S.MainBox>
  );
};
export default InvestChange;
