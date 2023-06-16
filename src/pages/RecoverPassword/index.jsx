import Field from "../../components/Field";
import GroupButton from "../../components/GroupButton";
import { 
    StyledLoginContainer, 
    Line,
} from './styled';

const RecoverPassword = () => (
    <>
    <StyledLoginContainer>
        <h1>LOGO</h1>
        <Line />
        <Field placeholder="CPF" title="CPF" visible/>
        <GroupButton />
        <Line />
    </StyledLoginContainer>
</>
);

export default RecoverPassword;