import React from "react";
import { useState } from "react";
import ItFrame from "./ItFrame";
import * as S from "./MPage4.style";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function MPage4() {
  // 데이터 전달 확인하기
  const { state } = useLocation();

  // 모임 상세 페이지로 넘어가기
  const navigate = useNavigate();
  const handleSuccessClick = () => {
    fetchData();
    navigate("/group", { state: { meetingId: userId.result } });
  };

  // response data 상태 관리
  const [userId, setUserId] = useState(null);

  // API 작업
  let fetchData = async () => {
    let authorizationToken = "1";
    const proxyServerUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://ec2-3-35-167-235.ap-northeast-2.compute.amazonaws.com";

    try {
      const response = await axios.post(
        `${proxyServerUrl}${url}/api/v1/meeting`,
        {
          purposeType: "HEALTHCARE",
          participantType: state.participantType,
          profitTarget: state.profitTarget,
          deadlineDate: `${state.deadlineDate}T00:00:00.00000`,
          meetingName: groupName,
          attendanceCount: groupLength,
        },
        {
          headers: { authorization: authorizationToken },
        }
      );
      setUserId(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // Form 새로고침 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 모임 이름 저장
  const [groupName, setGoupName] = useState("");
  const saveGroupName = (event) => {
    setGoupName(event.target.value);
  };

  // 모임 인원 저장
  const [groupLength, setGroupLength] = useState("");
  const saveGroupLength = (event) => {
    setGroupLength(event.target.value);
  };

  const propDetails = (
    <S.ChoiceWhat>
      <S.MainForm>
        <S.Forms onSubmit={handleSubmit}>
          <S.Caption>모임 이름</S.Caption>
          <S.InputText
            type="text"
            placeholder="원하시는 모임 이름을 입력해주세요"
            value={groupName}
            onChange={saveGroupName}
          ></S.InputText>
        </S.Forms>

        <S.Caption>모임 인원</S.Caption>
        <S.MemberInput
          type="text"
          placeholder="모임 인원을 숫자로 알려주세요 (ex. 5)"
          value={groupLength}
          onChange={saveGroupLength}
        ></S.MemberInput>
      </S.MainForm>
      <S.Next onClick={handleSuccessClick}>모임 만들기</S.Next>
    </S.ChoiceWhat>
  );

  return (
    <ItFrame
      propTitle={"모임에 대해 \n 조금 더 알려주세요!"}
      propDetails={propDetails}
    ></ItFrame>
  );
}

export default MPage4;
