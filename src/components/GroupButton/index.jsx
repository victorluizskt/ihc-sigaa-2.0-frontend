import { ButtonBack, ButtonRecover } from './styled';

const GroupButton = () => (
    <div style={{
        display: "grid",
        gridTemplateColumns: "100px 140px"
    }}>
        <a href="/">
            <ButtonBack title="Voltar">{"< Voltar"}</ButtonBack>
        </a>
        <a href="/recoverPassword">
            <ButtonRecover title="Recuperar senha">Recuperar senha</ButtonRecover>
        </a>
    </div>
);

export default GroupButton;