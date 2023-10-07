import React, { useState } from "react";
import { PageLayout } from "../../components";
import InvestChange from "./InvestChange";
import * as S from "./GroupPage.style";
import { useNavigate } from "react-router-dom";

const GroupPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [members, setMembers] = useState(["엄마", "아빠"]);

  const priceData = [
    { name: "Stock 1", profit: "5%", holding: 10, currentPrice: "$50" },
    { name: "Stock 2", profit: "2%", holding: 15, currentPrice: "$60" },
  ];

  const navigate = useNavigate();

  const handleMakeGroupClick = () => {
    navigate("/makegroup1");
  };

  const handleInvestHelpClick = () => {
    navigate("/helppage");
  };

  const handleGroupPageClick = () => {
    navigate("/group");
  };

  const handleCheckPreference = () => {
    navigate("/wishpage");
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputMessage = () => {
    setInputValue("");
    alert(" 초대전송이 완료되었습니다 .");
  };

  const handleAddMember = () => {
    if (inputValue.trim() !== "") {
      setMembers([...members, inputValue]);
      setInputValue("");
    }
  };

  return (
    <PageLayout>
      <S.Top>
        <S.MemberType onClick={openModal}>가족</S.MemberType>
        <S.Title> 여행 가보자고 </S.Title>
      </S.Top>

      {isModalVisible && (
        <S.ModalBackground>
          <S.Modal>
            <S.ModalContent>
              <S.MainCaption>현재 우리 그룹에 있는 구성원들</S.MainCaption>
              <S.Chars>
                {members.map((member, index) => (
                  <S.OkMem key={index}>{member}</S.OkMem>
                ))}
              </S.Chars>
              <S.Input
                type="text"
                placeholder="추가할 회원의 아이디를 입력하세요."
                value={inputValue}
                onChange={handleInputChange}
              />
              <S.Btn1 onClick={handleInputMessage}>추가</S.Btn1>
              <S.Btn2 onClick={closeModal}>닫기</S.Btn2>
            </S.ModalContent>
          </S.Modal>
        </S.ModalBackground>
      )}

      <div style={{ overflowY: "scroll", height: "calc(100vh - 100px)" }}>
        <S.Middle>
          <S.MoneyNow>
            <S.TotalCap> 총 자산 </S.TotalCap>
            <S.NowTotal>4000000</S.NowTotal>
          </S.MoneyNow>

          <S.ContentBox>
            <S.MainTitle>총 투자금</S.MainTitle>
            <S.MainContent>1111111</S.MainContent>
          </S.ContentBox>

          <S.ContentBox>
            <S.MainTitle>목표금액</S.MainTitle>
            <S.MainContent></S.MainContent>
          </S.ContentBox>

          <S.ContentBox>
            <S.MainTitle>수익률</S.MainTitle>
            <S.AchieveRate> 26.5 % </S.AchieveRate>
          </S.ContentBox>

          <S.ContentBox>
            <S.MainTitle>달성률</S.MainTitle>
            <S.AchiBar2> 받아오기 </S.AchiBar2>
          </S.ContentBox>

          <S.LeftDay>
            <S.MainTitle>남은기간</S.MainTitle>
            <S.LeftCount> D- 37</S.LeftCount>
          </S.LeftDay>
        </S.Middle>
        <S.Container>
          <InvestChange priceData={priceData} />
        </S.Container>{" "}
      </div>
      <S.Prefer onClick={handleCheckPreference}> 선호 주식 확인하기</S.Prefer>
      <S.Options>
        <S.SelectOption>
          <S.InvestBtn
            onClick={handleInvestHelpClick}
            src="/svgs/trending.svg"
            alt="차트"
          />
          <S.GroupBtn
            onClick={handleMakeGroupClick}
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
export default GroupPage;
