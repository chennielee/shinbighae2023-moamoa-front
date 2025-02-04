import styled from "@emotion/styled";

export const Top = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  background-color: white;
  padding-bottom: 4%;
`;

export const MemberType = styled.div`
  border: 1px black solid;
  text-align: center;
  font-size: larger;
  margin-top: 10%;
  height: 25%;
  width: 34%;
  margin: 10% auto 3%;
`;

export const Title = styled.div`
  text-align: center;
  font-size: xxx-large;
  font-weight: 600;
`;

export const Middle = styled.div`
  border: 1px #0000005e solid;
  width: 80%;
  height: 46%;
  border-radius: 14px;
  margin: 40% auto 10%;
`;

export const MoneyNow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalCap = styled.div`
  margin-left: 5%;
  margin-top: 6%;
`;

export const NowTotal = styled.div`
  font-size: xx-large;
  font-weight: 500;
  margin-left: 5%;
  margin-right: 5%;
  border-bottom: 1px solid black;
  padding-bottom: 3%;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8%;
  margin-top: 5%;
`;

export const MainTitle = styled.div`
  float: left;
  margin-left: 6%;
`;

export const MainContent = styled.div`
  padding-left: 23%;
`;

export const AchieveRate = styled.div`
  float: right;
  margin-right: 7%;
  color: red;
  padding-left: 30%;
`;

export const AchiBar2 = styled.div`
  float: right;
  margin-right: 6%;
  padding-left: 30%;
`;

export const LeftDay = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftCap = styled.div`
  border: 1px black solid;
`;

export const LeftCount = styled.div`
  margin-left: 6%;
  margin-top: 5%;
  font-size: xx-large;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto; /* height를 auto로 변경하여 컨테이너의 높이를 컨텐츠에 맞게 조절합니다. */
`;

export const Prefer = styled.div`
  border: 1px solid black;
  position: fixed;
  width: %;
  /* margin: 0 auto; */
  height: auto;
  bottom: 10%;
  z-index: 3;
  margin-left: 32%;
  height: 6%;
  padding-top: 3%;
`;

export const Options = styled.div`
  width: 100%;
  z-index: 2;
  background-color: white;
  bottom: 0px;
  height: 12%;
  position: fixed;
  padding-top: 3%;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: sticky;
  border-top: 1px black solid;
  width: 100%;
  z-index: 2;
  bottom: 8%;
  background-color: white;
`;

export const InvestBtn = styled.img`
  position: relative;
  bottom: -20px;
  width: 30px;
`;

export const GroupBtn = styled.img`
  position: relative;
  bottom: -20px;
  width: 30px;
`;

export const UserBtn = styled.img`
  position: relative;
  bottom: -20px;
  width: 30px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 어두운 배경 색상 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 모달이 최상위에 나타나도록 설정 */
`;

export const Modal = styled.div`
  height: 60%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 80%;
  max-width: 400px;
`;

export const ModalContent = styled.div`
  text-align: center;
`;

export const MainCaption = styled.div`
font-size: 1.2rem;
font-weight: bold;
margin-bottom: 30px;
height: 20%;
margin-top: 4%;
}
`;

export const Chars = styled.div`
  margin-bottom: 20px;
`;

export const OkMem = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Btn1 = styled.button`
  display: block;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Btn2 = styled.button`
  display: block;
  bottom: 0px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30%;
  position: fixed;
  margin-bottom: 50%;
  &:hover {
    background-color: #0056b3;
  }
`;
