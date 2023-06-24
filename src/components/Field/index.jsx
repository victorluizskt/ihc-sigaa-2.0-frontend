import { 
    StyledField, 
    Input, 
    SpanField,
    TooltipCard,
    TooltipBox,
    TooltipText,
} from './styled';

import { FaInfo } from "react-icons/fa";

const Field = ({ title, visible, type, setUser, user}) => {
    const saveData = (e) => {
        if (type === "password") {
            setUser(prevState => ({
              ...prevState,
              password: e.target.value
            }));
        } else {
        setUser(prevState => ({
            ...prevState,
            cpf: e.target.value
            }));
        }
          
          
    }

    return (
        <StyledField>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "210px",
            }}>
                <SpanField>{title}</SpanField>
                {visible && (
                     <>
                        <TooltipCard>
                            <TooltipText>
                            <span> <FaInfo /></span>
                            </TooltipText>
                            <TooltipBox>
                                Será enviado um e-mail para o seu endereço cadastrado no Sigaa, contendo instruções para recuperar a senha. Para prosseguir, clique em "Recuperar senha".
                            </TooltipBox>
                        </TooltipCard>
                     </>
                )}
            </div>
            <Input onChange={e => saveData(e)} type={type ? "password" : ""}/>
        </StyledField>
    )
}

export default Field;