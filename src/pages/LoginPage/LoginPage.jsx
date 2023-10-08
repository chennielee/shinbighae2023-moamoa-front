import React, { useState } from "react";
import * as S from "./LoginPage.style";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

const LoginPage = () => {
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [isMale, setIsMale] = useState(true);
  const [duplicateResult, setDuplicateResult] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 중복확인 API 요청 핸들러
  const handleDoubleCheck = async () => {
    // API 요청 코드...
    const proxyServerUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://ec2-3-35-167-235.ap-northeast-2.compute.amazonaws.com";

    try {
      // url 먼저 받아오기(await)
      const response = await axios.get(
        `${proxyServerUrl}${url}/api/v1/member/duplicate`,
        {
          params: { nickname },
        }
      );

      const responseData = await response.data;

      if (responseData.result === false) {
        setDuplicateResult("중복확인 완료");
      } else {
        setDuplicateResult("이미 존재하는 닉네임입니다.");
      }
    } catch (error) {
      console.error("서버에러:", error);
    }
  };

  // 프로필 생성 API 요청 핸들러
  const handleSubmitBtn = async () => {
    const proxyServerUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://ec2-3-35-167-235.ap-northeast-2.compute.amazonaws.com";

    try {
      const response = await axios.post(
        `${proxyServerUrl}${url}/api/v1/member`,
        {
          nickname,
          age,
          gender: isMale ? "MALE" : "FEMALE",
        }
      );

      const responseData = await response.data;

      if (responseData.isSuccess) {
        alert("가입되었습니다.");
        navigate("/wish");
      } else {
        alert("계정 생성 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("서버 오류:", error);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 프로필 생성 API 요청 핸들러 호출
    handleSubmitBtn();
  };

  return (
    <S.PageWrapper>
      <S.AppLogo src="/images/moa-logo.png" alt="신한로고"></S.AppLogo>
      <S.AppName>모아모아</S.AppName>
      <S.AskContainer onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        ></S.Input>
        <S.Input
          type="number"
          placeholder="나이를 입력하세요"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        ></S.Input>

        <S.GenderLabel>성별을 선택하세요:</S.GenderLabel>
        <S.GenderCheckboxContainer>
          <label
            onClick={() => setIsMale(true)}
            style={isMale ? { fontWeight: "bold", color: "blue" } : {}}
          >
            <input
              type="checkbox"
              value="MALE"
              checked={isMale}
              onChange={() => {}}
              required
            ></input>{" "}
            남성
          </label>
          <label
            onClick={() => setIsMale(false)}
            style={!isMale ? { fontWeight: "bold", color: "blue" } : {}}
          >
            <input
              type="checkbox"
              value="FEMALE"
              checked={!isMale}
              onChange={() => {}}
              required
            ></input>{" "}
            여성
          </label>
        </S.GenderCheckboxContainer>
        <S.DoubleCheck onClick={handleDoubleCheck}>중복 확인하기</S.DoubleCheck>
        {duplicateResult !== null && <p>{duplicateResult}</p>}
        <S.MakeAccBtn onClick={handleSubmit}>프로필 생성</S.MakeAccBtn>
      </S.AskContainer>

      <S.MemberCheck>이미 생성된 계정이 있어요.</S.MemberCheck>
    </S.PageWrapper>
  );
};

export default LoginPage;
