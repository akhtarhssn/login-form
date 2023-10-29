import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 30vw;
  background-color: hsla(0, 0%, 100%, 0.01);
  border: 2px solid hsla(0, 0%, 100%, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  /* letter-spacing: 0.4rem; */
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 100%;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 90vw;
    height: 100%;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 90vw;
    height: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: 450px;
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
    width: 450px;
    height: 100%;
  }
  @media only screen and (min-width: 1280px) {
    width: 450px;
    height: 100%;
  }
`;

const WelcomeText = styled.h2`
  margin: 1.5rem 0 1.5rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HorizontalRule = styled.hr`
  width: 20%;
  height: 0.2rem;
  border-radius: 0.8rem;
  border: none;
  background: #fff;
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 1rem 0 1rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  margin-bottom: 30px;
`;

const CheckBox = styled.div`
  width: 100%;
  margin-left: 100px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: none;
  gap: 10px;

  @media only screen and (max-width: 320px) {
    margin-left: 70px;
  }
  @media only screen and (min-width: 360px) {
    margin-left: 70px;
  }
`;

export {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  HorizontalRule,
  IconsContainer,
  ForgotPassword,
  CheckBox,
};
