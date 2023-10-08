import React from "react";
import ChoseList from "./ChoseList";
import * as S from "./WishListPage.style";
import { PageLayout } from "../../components";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

const WishListPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
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

  // useEffect(() => {

  //     const stockData = async () => {

  //       const proxyServerUrl = "https://cors-anywhere.herokuapp.com/";
  //       const url =
  //          "http://ec2-3-35-167-235.ap-northeast-2.compute.amazonaws.com";

  //       try {

  //          const response = await axios.get(
  //           `${proxyServerUrl}${url}/api/v1/meeting`,
  //           {
  //              headers: { authorization },
  //           }
  //         );
  //         setstockData(response.data.result.meetingList);
  //        } catch (e) {
  //          console.log(e);
  //       }

  //      };
  //     stockData();
  //    }, []);

  const stockData = [
    {
      stockId: 56,
      stockName: "하나투어",
    },
    {
      stockId: 7,
      stockName: "진에어",
    },
    {
      stockId: 9,
      stockName: "AK 홀딩스",
    },
  ];

  return (
    <PageLayout>
      <S.Header>
        <S.TeamName>여행 가보자고</S.TeamName>
        <S.TeamDetail>
          모임에서 <br /> 현재 가장 선호되는 주식{" "}
        </S.TeamDetail>
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
