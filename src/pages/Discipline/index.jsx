import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DisciplineHeader from "../../components/DisciplineHeader";
import Task from '../../assets/task.png';
import Group from '../../assets/group.png';
import List from '../../assets/list.png';
import { 
    Card, 
    Line, 
    TitlePage, 
    Button,
    Image,
    ButtonSend
} from './styled';

const Discipline = () => {
    return (
        <Sidebar>
            <Navbar />
            <DisciplineHeader />
            <Card height="300px" marginTop="30px">
                <div style={{ display: 'grid', gridTemplateColumns: '45% 50%', paddingTop: '20px', marginLeft: '30px', borderRadius: '22px'}}>
                    <a href="/about">
                        <Button>Voltar</Button>
                    </a>
                    <TitlePage>Atividades</TitlePage>
                </div>
                <Line />
                <div style={{ display: 'grid', gridTemplateColumns: '60px 25% 65% auto', marginRight: '30px'}}>
                    <Image src={Task} alt="student-task"/>
                    <div style={{ display: 'grid' }}>
                        <span style={{ fontSize: '15px' }}>Prova 1</span>
                        <span style={{ fontSize: '10px' }}>Valor: 25 pontos</span>
                    </div>
                    <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Data limite: 10-04-2023 23:59</span>
                    <div style={{ paddingTop: '7px', display: 'flex', flexDirection: 'row-reverse'}}>
                        <ButtonSend>Enviar</ButtonSend>
                    </div>
                </div>
                <Line />
                <div style={{ display: 'grid', gridTemplateColumns: '60px 25% 65% auto', marginRight: '30px'}}>
                    <Image src={Task} alt="student-task"/>
                    <div style={{ display: 'grid' }}>
                        <span style={{ fontSize: '15px' }}>Prova 2</span>
                        <span style={{ fontSize: '10px' }}>Valor: 25 pontos</span>
                    </div>
                    <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Data limite: 10-04-2023 23:59</span>
                    <div style={{ paddingTop: '7px', display: 'flex', flexDirection: 'row-reverse'}}>
                        <ButtonSend background="#5E5BFF;">Enviar</ButtonSend>
                    </div>
                </div>
                <Line />
                <div style={{ display: 'grid', gridTemplateColumns: '60px 25% 65% auto', marginRight: '30px'}}>
                    <Image src={Group} alt="student-task"/>
                    <div style={{ display: 'grid' }}>
                        <span style={{ fontSize: '15px' }}>Trabalho em grupo</span>
                        <span style={{ fontSize: '10px', marginLeft: '2px' }}>Valor: 40 pontos</span>
                    </div>
                    <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Data limite: 10-04-2023 23:59</span>
                    <div style={{ paddingTop: '7px', display: 'flex', flexDirection: 'row-reverse'}}>
                        <ButtonSend background="#5E5BFF;">Enviar</ButtonSend>
                    </div>
                </div>
                <Line />
                <div style={{ display: 'grid', gridTemplateColumns: '60px 25% 65% auto', marginRight: '30px'}}>
                    <Image src={List} alt="student-task"/>
                    <div style={{ display: 'grid' }}>
                        <span style={{ fontSize: '15px' }}>Listas</span>
                        <span style={{ fontSize: '10px' }}>Valor: 10 pontos</span>
                    </div>
                    <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Data limite: 10-04-2023 23:59</span>
                    <div style={{ paddingTop: '7px', display: 'flex', flexDirection: 'row-reverse'}}>
                        <ButtonSend background="#5E5BFF;">Enviar</ButtonSend>
                    </div>
                </div>
                <Line />
            </Card>
        </Sidebar>
    )
}

export default Discipline;