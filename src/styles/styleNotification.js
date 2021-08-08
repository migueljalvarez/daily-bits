import styled from "styled-components";

export const NotificationSuccess = styled.div`
  background-color: #acffcf;
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: -1000px;
  transition: all 1.4s ease;
`;
export const MessageTitleSuccess = styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: #16161a;
`;
export const BottonCompleteSuccess = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: #2cb67d;
  box-shadow: 0 1px 1px 1px #0f915b;
`;
export const NotificationFailed = styled.div`
  transition: all 1.4s ease;
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: #f9cfd7;
  width: 100%;
  bottom: -1000px;
`;
export const BottonCompleteFailed = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: #ef4565;
  box-shadow: 0 1px 1px 1px #b81e3b;
`;
export const NotificationDefault = styled.div`
  background-color: #ffffff;
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: -1000px;
  transition: all 1.4s ease;
`;
export const MessageTitleDefault = styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: #16161a;
`;
export const BottonCompleteDefault = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: gray;
  box-shadow: 0 1px 1px 1px #4a4a64;
`;
export const MessageTitleFailed = styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: #b81e3b;
`;
export const ResponseFailed = styled.p`
  margin-top: 0px;
  margin-left: 15px;
  margin-bottom: 0px;
  color: #b81e3b;
`;
