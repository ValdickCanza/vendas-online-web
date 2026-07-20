import LoginScreen from './modules/login';
import { BackgroundImage } from './modules/login/styles/LoginScreen.style';

function App() {
  return (
    <div>
      <BackgroundImage src="./fundo-login-1.jpg" />
      <LoginScreen />
    </div>
  );
}

export default App;
