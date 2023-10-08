import React, { useState, useEffect } from "react";
import * as S from "./InvestHelpPage.style";
import { PageLayout } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InvestProduct from "./InvestProduct";

const InvestHelpPage = () => {
  const navigate = useNavigate();
  const [stockData, setStockData] = useState([]); // 1. stockData 상태 정의

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

  useEffect(() => {
    const stockDataFetch = async () => {
      const proxyServerUrl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "http://ec2-3-35-167-235.ap-northeast-2.compute.amazonaws.com";

      try {
        const response = await axios.get(
          `${proxyServerUrl}${url}//api/v1/stock`,
          {
            headers: { authorization: 1 }, // 2. 토큰 설정 (임시값으로 1 설정)
          }
        );
        setStockData(response.data.result.suggestedStockList); // 3. stockData 상태 업데이트
      } catch (e) {
        console.log(e);
      }
    };

    stockDataFetch();
  }, []);

  return (
    <PageLayout>
      <S.Header>
        <S.TeamName>여행 가보자고</S.TeamName>
      </S.Header>

      <div style={{ overflowY: "scroll", height: "calc(100vh - 100px)" }}>
        <S.Container>
          {/* 4. stockData를 ChoseList 컴포넌트에 전달 */}
          <InvestProduct stockData={stockData} />
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
export default InvestHelpPage;
