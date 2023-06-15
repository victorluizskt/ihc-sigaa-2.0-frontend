import { StyledHeaderStudentContainer, Span } from './styled';
import IconPeople from '../../assets/images/icon-people.png';
import Logo from '../../assets/images/logo.png';

const StudentHeader = () => (
    <div style={{marginTop: "10px", display: "flex"}}>
        <img src={Logo} alt='logo-page' style={{ marginLeft: "12px",width: "25px", height: "25px", marginTop: "20px", marginRight: "10px"}} />
        <img alt='people-icon' src={IconPeople} style={{ width: "25px", height: "25px", marginTop: "20px", marginRight: "10px", marginLeft: "18%"}} />
        <StyledHeaderStudentContainer>
            <Span>Fulado Beltrano da Silva</Span>
            <Span>Semestre atual: 2023.1</Span>
            <Span>Engenharia da Computacao</Span>
        </StyledHeaderStudentContainer>
    </div>
)

export default StudentHeader;