import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  HorizontalRule,
  IconsContainer,
  ForgotPassword,
  CheckBox,
} from "../components/StyledComponent";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Input from "../components/Input";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

const Login = () => {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <MainContainer>
      <WelcomeText>Login</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <CheckBox>
        <input type="checkbox" />
        <span>Remember Me</span>
      </CheckBox>
      <CheckBox>
        <input type="checkbox" />
        <span>Agree to</span>{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          Terms & Conditions
        </span>
      </CheckBox>
      <ButtonContainer>
        <Button content="Login" />
      </ButtonContainer>
      <p style={{ fontSize: "14px", textTransform: "none" }}>
        Don`t have an account?{" "}
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <span
            style={{ fontWeight: "bold", cursor: "pointer", color: "#fff" }}
          >
            Register
          </span>
        </Link>
      </p>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
};

export default Login;
