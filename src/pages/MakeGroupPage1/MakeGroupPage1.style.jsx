import styled from "@emotion/styled";

export const ChoiceWho = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Option = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  width: 90%;
  margin: 20px auto;
  height: 90px;
  border-radius: 30px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const OptionImg = styled.img`
  width: 20%;
  padding-left: 10px;
  padding-right: 20px;
`;

export const OptionContent = styled.div`
  width: 20%;
  font-size: 25px;
`;

export const Check = styled.img`
  padding-left: 175px;
`;

export const Next = styled.button`
  background-color: #1f65ff;
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 5px 5px 10px 0px rgba(155, 159, 176, 1);
  height: 50px;
  width: 80%;
  text-align: center;
  margin: 10% auto;
`;
export const NextDisabled = styled.button`
  background-color: #eaf3fe;
  color: #1f65ff;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  height: 50px;
  width: 80%;
  text-align: center;
  margin: 10% auto;
`;
