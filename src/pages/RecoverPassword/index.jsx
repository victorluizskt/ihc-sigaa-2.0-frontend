import Button from "../../components/Button";
import Field from "../../components/Field";
import { StyledLoginContainer } from './styled';

const RecoverPassword = () => (
    <>
    <StyledLoginContainer>
        <h1>LOGO</h1>
        <Field placeholder="CPF" title="CPF" visible/>
        <div style={{
            display: "grid",
            gridTemplateColumns: "50px 200px"
        }}>
            <a href="/">
                <Button title="Voltar" action={() => {console.log('oi')}}/>
            </a>
            <a href="/recoverPassword">
                <Button title="Recuperar senha" action={() => {console.log('oi')}}/>
            </a>
        </div>
    </StyledLoginContainer>
</>
);

export default RecoverPassword;