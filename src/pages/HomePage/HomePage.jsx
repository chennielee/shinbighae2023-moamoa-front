import { PageLayout } from "../../components";
import * as S from "./HomePage.style";
import { useNavigate } from "react-router-dom";
import React from "react";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/makegroup1");
  };

  return (
    <PageLayout>
      <S.Title> 이미 참여한 모임 </S.Title>
      <S.Ask> 모임 참여하기 </S.Ask>

      <S.Container>
        <S.Group>
          <S.GroupTitle>
            <S.GroupTitleName>여행 가보자고</S.GroupTitleName>
            <S.IsGroup> 모임</S.IsGroup>
          </S.GroupTitle>

          <S.GroupProfit>
            <S.ProfitIntro> 수익률</S.ProfitIntro>
            <S.ProfitNum>150%</S.ProfitNum>
          </S.GroupProfit>
          <S.GroupAim>목표 달성률</S.GroupAim>
        </S.Group>

        <S.Group>
          <S.GroupTitle>
            <S.GroupTitleName>우리의 노후자금을 위해</S.GroupTitleName>
            <S.IsGroup> 모임</S.IsGroup>
          </S.GroupTitle>

          <S.GroupProfit>
            <S.ProfitIntro> 수익률</S.ProfitIntro>
            <S.ProfitNum>-10%</S.ProfitNum>
          </S.GroupProfit>
          <S.GroupAim>목표 달성률</S.GroupAim>
        </S.Group>

        <S.Group>
          <S.GroupTitle>
            <S.GroupTitleName>떨어지면 우리 우정도 끝</S.GroupTitleName>
            <S.IsGroup> 모임</S.IsGroup>
          </S.GroupTitle>
          <S.GroupProfit>
            <S.ProfitIntro> 수익률</S.ProfitIntro>
            <S.ProfitNum>5%</S.ProfitNum>
          </S.GroupProfit>
          <S.GroupAim>목표 달성률</S.GroupAim>
        </S.Group>

        <S.Group>
          <S.GroupTitle>
            <S.GroupTitleName>우리의 데이트를 위해</S.GroupTitleName>
            <S.IsGroup> 모임</S.IsGroup>
          </S.GroupTitle>
          <S.GroupProfit>
            <S.ProfitIntro> 수익률</S.ProfitIntro>
            <S.ProfitNum>30%</S.ProfitNum>
          </S.GroupProfit>
          <S.GroupAim>목표 달성률</S.GroupAim>
        </S.Group>
      </S.Container>
      <S.MakeGroup onClick={handleNextClick}>+ 모임 생성하기</S.MakeGroup>
      <S.Options>
        <S.SelectOption>
          <S.InvestBtn src="/svgs/trending.svg" alt="차트" />
          <S.GroupBtn src="/svgs/group.svg" alt="그룹 페이지" />
          <S.UserBtn src="/svgs/user.svg" alt="개인 페이지" />
        </S.SelectOption>
      </S.Options>
    </PageLayout>
  );
};

export default HomePage;
