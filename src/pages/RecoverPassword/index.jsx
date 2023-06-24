import Field from "../../components/Field";
import GroupButton from "../../components/GroupButton";
import Logo from "../../assets/logo-notfound.png";

import { 
    StyledLoginContainer, 
    Line,
} from './styled';

const RecoverPassword = () => (
    <StyledLoginContainer>
        <img style={{ marginLeft: '105px' }} src={Logo} alt="logo-marca" />
        <Line />
        <Field placeholder="CPF" title="CPF" visible/>
        <GroupButton />
        <Line />
    </StyledLoginContainer>
);

export default RecoverPassword;