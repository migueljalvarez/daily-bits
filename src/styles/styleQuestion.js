import styled from "styled-components";
// Questions Components
export const ContainerQuestions = styled.div`
  display: flex;
  align-items: center;

  max-width: 500px;
  margin: auto;
`;
export const ContainerQuestionsWithPadding = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px 10px;
`;
export const Avatar = styled.img`
  margin: 10px;
`;
export const Title = styled.h2`
  float: right;
  width: -webkit-fill-available;
  padding: 0 2px;
  font-size: 23px;
  text-align: center;
`;
export const Options = styled.div`
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
`;
export const Item = styled.div`
  background-color: #232e35;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  border-radius: 5px;
  width: 328px;

  &:hover {
    cursor: pointer;
  }
`;
export const OptionsWithImage = styled.div`
  display: grid;
  margin: -20px 20px;
  padding: 0px 8px;
  grid-template-columns: 144px 144px;
  justify-content: center;

  gap: 4px 8px;
`;
export const ItemWithImage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #16161a;
  border: 2px solid #94a1b2;
  margin: 4px 4px;
  width: 144px;
  height: 200px;
  float: left;
  border-radius: 8px;
  box-shadow: 0 4px 2px -2px #94a1b2;

  &:hover {
    cursor: pointer;
  }
`;
export const ItemImg = styled.img`
  border-radius: 8px;
`;
export const ItemText = styled.p`
  text-align: center;
  margin: 20px 0;
`;
export const ItemLabel = styled.label``;

export const ContainerCover = styled.div`
  display: block;
  background: transparent;
  width: 144px;
  height: 200px;
  z-index: 1;
  position: absolute;
  border-radius: 8px;
`;
export const ContainerOrganized = styled.div`
  height: auto;
  min-height: 146px;
  padding: 0px 16px;
  background-repeat: no-repeat;
  width: 350px;

  margin: auto;

  & button {
    margin-bottom: 20px;
    margin-top: 15px;
    margin-left: 0px;
    margin-right: 8px;
    display: inline-block;
    border-radius: 14px;
    color: transparent;
    padding: 0 20px;
    content: "";
    background-position: center;
    background-color: #72757e;
    background-repeat: no-repeat;
    background-size: auto;
    border: none;
    box-shadow: 0 1px 1px 2px #72757e;
    &:focus-visible {
      outline: none;
    }
  }
`;
export const ContainerUnOrganized = styled.div`
  margin: 10px auto;
  display: inline-block;
  justify-content: center;
  padding: 0px 16px;
  bottom: 100px;
  left: 50%;
  margin-left: -180px;
  position: absolute;
  width: 360px;
  height: fit-content;
  & button {
    margin: 5px 3px;
    &:focus-visible {
      outline: none;
    }
  }
`;
export const UnOrganizedButton = styled.button`
  display: inline-block;
  border-radius: 14px;
  color: transparent;
  padding: 0 20px;
  content: "";
  background-position: center;
  background-color: #72757e;
  background-repeat: no-repeat;
  background-size: auto;
  border: none;
  box-shadow: 0 1px 1px 2px #72757e;
  &:hover {
    cursor: pointer;
  }
`;
// Questions App

export const ContainerHead = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
export const CheckButton = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: bold;
  background-color: var(--color-purple);
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  &:disabled {
    background-color: #d4caf3;
  }
  &:hover {
    background-color: var(--color-purple-light);
    box-shadow: 0 2px 1px 1px var(--color-purple);
    cursor: pointer;
  }
`;
export const LiveText = styled.p`
  color: #fff;
  margin: 0px 2px;
`;

export const Img = styled.img`
  &:hover {
    cursor: pointer;
  }
`;