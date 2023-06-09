import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DisciplineHeader from "../../components/DisciplineHeader";
import Task from '../../assets/task.png';
import Group from '../../assets/group.png';
import List from '../../assets/list.png';
import Total from '../../assets/total.png';
import CEFET from '../../assets/cefet.png';

import { 
    Card, 
    Line, 
    TitlePage, 
    Button,
    Image,
} from './styled';
import { useContext } from "react";
import { DisciplineContext } from "../../context/disciplineContext";

const Grades = () => {
    const {value} = useContext(DisciplineContext);
    const calculateNotas = (nota1, nota2) => {
        const percentage = (nota1 / nota2) * 100;
        console.log(percentage);
        if(percentage >= 60) return "#00b327";
        return '#F00';
    };

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
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% 29% auto', marginRight: '30px'}}>
                <Image src={Task} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Prova 1</span>
                    <span style={{ fontSize: '10px' }}>Valor: 25 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: </span>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px', color:`${calculateNotas(value.nota1, 25)}` }}>{value.nota1}</span>
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% 29% auto', marginRight: '30px'}}>
                <Image src={Task} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Prova 2</span>
                    <span style={{ fontSize: '10px' }}>Valor: 25 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: </span>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px', color:`${calculateNotas(value.nota2, 25)}`}}>{value.nota2}</span>
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% 29% auto', marginRight: '30px'}}>
                <Image src={Group} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Trabalho em grupo</span>
                    <span style={{ fontSize: '10px', marginLeft: '2px' }}>Valor: 40 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: </span>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px', color:`${calculateNotas(value.nota3, 40)}` }}>{value.nota3}</span>
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% 29% auto', marginRight: '30px'}}>
                <Image src={List} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Listas</span>
                    <span style={{ fontSize: '10px' }}>Valor: 10 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: </span>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px', color:`${calculateNotas(value.nota4, 10)}` }}>{value.nota4}</span>           
            </div>
            <Line />
            <div style={{ display: 'grid', gridTemplateColumns: '60px 65% 29% auto', marginRight: '30px'}}>
                <Image src={Total} alt="student-task"/>
                <div style={{ display: 'grid' }}>
                    <span style={{ fontSize: '15px' }}>Total</span>
                    <span style={{ fontSize: '10px' }}>100 pontos</span>
                </div>
                <span style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px' }}>Nota: </span>
                <span 
                    style={{ textAlign: 'end', fontSize: '10px', paddingTop: '14px', color:`${calculateNotas(
                        value.nota1 
                        + value.nota2 
                        + value.nota3 
                        + value.nota4 , 100)}` 
                    }}
                >
                    {value.nota1 + value.nota2 + value.nota3 + value.nota4}
                </span>
            </div>
        </Card>
        <div style={{ display: 'grid', marginTop: '30px', justifyContent: 'center'}}>
            <img style={{ marginLeft: '144px' }} src={CEFET} alt="cefet-mg" />
            <span style={{ textAlign: 'center'}}>SIGAA | Diretoria de Tecnologia da Informação</span>
        </div>
    </Sidebar>
    )
}

export default Grades;