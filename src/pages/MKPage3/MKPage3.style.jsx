import styled from "@emotion/styled";

export const ChoiceWhat = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto 64px auto;
  width: 100%;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 30px;
`;

export const Caption = styled.div`
  text-align: center;
  margin-top: 8%;
  font-size: 28px;
  font-weight: 600;
`;

export const InputText = styled.input`
  padding: 10px;
  margin: 20px auto 10px auto;
  border: none;
  width: 90%;
  border-bottom: 2px solid #ccc;
  font-size: 20px;
  text-align: center;
`;

export const DateInput = styled.input`
  margin: 20px auto 10px auto;
  height: 40px;
  width: 97%;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 20px;
  text-align: center;
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
