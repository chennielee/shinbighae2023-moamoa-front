import React from "react";
import ChoseList from "./ChoseList";
import * as S from "./WishListPage.style";
import { PageLayout } from "../../components";
import { useNavigate } from "react-router-dom";

const WishListPage = () => {
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

  const stockData = [
    {
      id: 1,
      name: "숙명항공",
      image: "/images/apple.png",
      price: "$150.25",
      limit: "+3.5%",
    },
    {
      id: 2,
      name: "숙명전자",
      image: "/images/amazon.png",
      price: "$3,450.00",
      limit: "+1.2%",
    },
  ];

  return (
    <PageLayout>
      <S.Header>
        <S.TeamName>여행 가보자고</S.TeamName>
        <S.TeamDetail>모임에서 현재 가장 선호되는 주식 </S.TeamDetail>
      </S.Header>

      <div style={{ overflowY: "scroll", height: "calc(100vh - 100px)" }}>
        <S.Container>
          <ChoseList stockData={stockData} />
        </S.Container>{" "}
      </div>

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
export default WishListPage;
