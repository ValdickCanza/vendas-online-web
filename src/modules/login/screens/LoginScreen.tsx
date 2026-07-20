import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../styles/LoginScreen.style';
import Input from '../shared/inputs/input/input';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./fundo-login-1.jpg" />
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="logo.png" />
            <Input title="Usuario" />
            <Input title="Senha" />
          </LimitedContainer>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
