import Button from "../../components/Button";
import Field from "../../components/Field";
import { StyledLoginContainer, Line } from './styled';

export const Login = () => (
    <div style={{ backgroundColor: "#F3F3F3" }}>
        <StyledLoginContainer>
            <h1>LOGO</h1>
            <Line /> 
            <Field title="Usuario:"/>
            <Field title="Senha:" type="password"/>
            <a href="/home">
                <Button title="Entrar" action={() => {console.log('oi')}}/>
            </a>
            <a href="/recoverPassword">
                <Button styleButton="76px" title="Esqueceu sua senha?" action={() => {console.log('oi')}}/>
            </a>
            <Line /> 
        </StyledLoginContainer>
    </div>
)

export default Login;