import React, { useState } from "react";
import * as S from "./LoginPage.style";

const LoginPage = () => {
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [isMale, setIsMale] = useState(true); // 초기 상태는 false로 설정
  const [duplicateResult, setDuplicateResult] = useState(null);

  const handleDoubleCheck = async () => {
    try {
      const response = await fetch(
        `/api/v1/member/duplicate?nickname=${nickname}`,
        {
          method: "GET",
        }
      );

      const responseData = await response.json();

      if (responseData.result === false) {
        setDuplicateResult("중복확인 완료");
      } else {
        setDuplicateResult("이미 존재하는 닉네임입니다.");
      }
    } catch (error) {
      alert("서버에러. 잠시만 기다려주세요.", error);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    // API 요청을 보낼 부분
    try {
      const response = await fetch("/api/v1/member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname,
          age,
          gender: isMale ? "MALE" : "FEMALE",
        }),
      });

      const responseData = await response.json();

      if (responseData.isSuccess) {
        alert("가입되었습니다.");
      } else {
        alert.error("계정 생성 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("서버 오류:", error);
    }
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
        <S.MakeAccBtn type="submit">프로필 생성</S.MakeAccBtn>
      </S.AskContainer>

      <S.MemberCheck>이미 생성된 계정이 있어요.</S.MemberCheck>
    </S.PageWrapper>
  );
};

export default LoginPage;
