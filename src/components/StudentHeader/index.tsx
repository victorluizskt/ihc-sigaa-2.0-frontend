import { StyledHeaderStudentContainer, Span } from './styled';
import IconPeople from '../../assets/images/icon-people.png';

const StudentHeader = () => (
    <div style={{marginTop: "10px", display: "flex", marginLeft: "18%"}}>
        <img alt='people-icon' src={IconPeople} style={{ width: "25px", height: "25px", marginTop: "20px", marginRight: "10px"}} />
        <StyledHeaderStudentContainer>
            <Span>Fulado Beltrano da Silva</Span>
            <Span>Semestre atual: 2023.1</Span>
            <Span>Engenharia da Computacao</Span>
        </StyledHeaderStudentContainer>
    </div>
)

export default StudentHeader;