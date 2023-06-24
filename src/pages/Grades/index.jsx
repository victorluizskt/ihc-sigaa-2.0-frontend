import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DisciplineHeader from "../../components/DisciplineHeader";
import Task from '../../assets/task.png';
import Group from '../../assets/group.png';
import List from '../../assets/list.png';
import Total from '../../assets/total.png';

import { 
    Card, 
    Line, 
    TitlePage, 
    Button,
    Image,
    ButtonSend
} from './styled';

const Grades = () => {
    return (
        <Sidebar>
        <Navbar />
        <DisciplineHeader />
        <Card height="310px" marginTop="30px">
            <div style={{ display: 'grid', gridTemplateColumns: '45% 50%', paddingTop: '20px', marginLeft: '30px', borderRadius: '22px'}}>
                <a href="/about">
                    <Button>Voltar</Button>
                </a>
                <TitlePage>Notas</TitlePage>
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% auto', marginRight: '30px'}}>
                <Image src={Task} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Prova 1</span>
                    <span style={{ fontSize: '10px' }}>Valor: 25 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: 5</span>
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% auto', marginRight: '30px'}}>
                <Image src={Task} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Prova 2</span>
                    <span style={{ fontSize: '10px' }}>Valor: 25 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: 20</span>
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% auto', marginRight: '30px'}}>
                <Image src={Group} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Trabalho em grupo</span>
                    <span style={{ fontSize: '10px', marginLeft: '2px' }}>Valor: 40 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: 35</span>
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% auto', marginRight: '30px'}}>
                <Image src={List} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Listas</span>
                    <span style={{ fontSize: '10px' }}>Valor: 10 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: 8</span>
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% auto', marginRight: '30px'}}>
                <Image src={Total} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Total</span>
                    <span style={{ fontSize: '10px' }}>100 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: 68</span>
            </div>
        </Card>
    </Sidebar>
    )
}

export default Grades;