import Button from "../../components/Button";
import Field from "../../components/Field";
import { StyledLoginContainer } from './styled';

export const Login = () => (
    <>
        <StyledLoginContainer>
            <h1>LOGO</h1>
            <Field placeholder="CPF" title="CPF"/>
            <Field placeholder="Senha" title="Senha" />
            <a href="/home">
                <Button title="Entrar" action={() => {console.log('oi')}}/>
            </a>
            <a href="/recoverPassword">
                <Button title="Esqueceu sua senha?" action={() => {console.log('oi')}}/>
            </a>
        </StyledLoginContainer>
    </>
)

export default Login;