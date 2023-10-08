import { PageLayout } from "../../components";
import * as S from "./HomePage.style";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import GroupList from "./GroupList";
import axios from "axios";

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

  // API 작업
  const [groupData, setGroupData] = useState(null);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      let authorizationToken = "1";
      const proxyServerUrl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "http://ec2-3-35-167-235.ap-northeast-2.compute.amazonaws.com";

      try {
        // url 먼저 받아오기(await)
        const response = await axios.get(
          `${proxyServerUrl}${url}/api/v1/meeting`,
          {
            headers: { authorization: authorizationToken },
          }
        );
        setGroupData(response.data.result.meetingList.slice(-3));
        // console.log(response.data.result.meetingList.slice(-3));
        // setGroupData(response.data.groupData);
      } catch (e) {
        console.log(e);
      }
      // setLoading(false);
    };
    fetchData();
  }, []);

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
