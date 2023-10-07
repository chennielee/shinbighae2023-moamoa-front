import { PageLayout } from "../../components";
import * as S from "./HomePage.style";
import { useNavigate } from "react-router-dom";
import React from "react";
import GroupList from "./GroupList";

const HomePage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleMakeGroupClick = () => {
    navigate("/makegroup1");
  };

  const handleInvestHelpClick = () => {
    navigate("/helppage");
  };

  const handleGroupPageClick = () => {
    navigate("/group");
  };

  const groupData = [
    {
      id: 1,
      title: "'여행 가보자고'",
      isGroup: "모임",
      profit: "-10%",
      aim: "목표 달성률",
    },
    {
      id: 2,
      title: "'우리의 노후자금을 위해'",
      isGroup: "모임",
      profit: "+5%",
      aim: "목표 달성률",
    },
    {
      id: 3,
      title: "'떨어지면 우리 우정도 끝'",
      isGroup: "모임",
      profit: "+20%",
      aim: "목표 달성률",
    },
    {
      id: 3,
      title: "'우리 가족 사랑해'",
      isGroup: "모임",
      profit: "+30%",
      aim: "목표 달성률",
    },
  ];

  return (
    <PageLayout>
      <S.Head>
        <S.Title> 나의 모임 </S.Title>
        <S.Ask> 모임 참여하러 가기 </S.Ask>
      </S.Head>

      <div style={{ overflowY: "scroll", height: "calc(100vh - 100px)" }}>
        <S.Container>
          <GroupList groupData={groupData} />
        </S.Container>{" "}
      </div>

      <S.MakeGroup onClick={handleMakeGroupClick}>+ 새 모임 만들기</S.MakeGroup>

      <S.Options>
        <S.SelectOption>
          <S.InvestBtn
            onClick={handleInvestHelpClick}
            src="/svgs/trending.svg"
            alt="차트"
          />
          <S.GroupBtn
            onClick={handleHomeClick}
            src="/svgs/group.svg"
            alt="그룹 페이지"
          />
          <S.UserBtn
            onClick={handleGroupPageClick}
            src="/svgs/user.svg"
            alt="개인 페이지"
          />
        </S.SelectOption>
      </S.Options>
    </PageLayout>
  );
};

export default HomePage;
