import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const StyledLoginView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 70vh;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid black;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #3B60E4;
  margin-top: 64px;
  margin-bottom: 96px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  margin-bottom: 30px;
  border-bottom: 1px solid gray;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

export const PasswordInputContainer = styled(InputContainer)`
  position: relative;
  margin-top: 30px;
  margin-bottom: 80px;
`;

export const PasswordInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

export const PasswordIcon = styled.img`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 25px;
`;

export const LoginButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 70px;
  margin-top: 60px;
  cursor: pointer;
`;
