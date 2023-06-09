import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DisciplineHeader from "../../components/DisciplineHeader";
import Task from '../../assets/task.png';
import CEFET from '../../assets/cefet.png';

import {
    Card,
    Button,
    TitlePage,
    Line,
} from './styled';

// passar para um arquivo de mock dps
const FrequencyList = [
    {
        icon: '',
        date: '11-03-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '13-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '18-03-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '20-03-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '21-04-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '22-04-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '01-05-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '10-05-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '20-05-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '25-05-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '01-06-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '10-06-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '15-06-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '20-06-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '01-07-2023',
        present:'Presente',
    },
    {
        icon: '',
        date: '07-07-2023',
        present:'Falta',
    },
];

const Frequency = () => {
    const calculateFrequency = (present) => {
        return present === "Presente" ? "#00b327" : '#F00';
    };

    return (
        <Sidebar>
            <Navbar />
            <DisciplineHeader />
            <Card height="380px" marginTop="30px">
                <div style={{ display: 'grid', gridTemplateColumns: '45% 50%', paddingTop: '20px', marginLeft: '30px', borderRadius: '22px'}}>
                    <a href="/about">
                        <Button>Voltar</Button>
                    </a>
                    <TitlePage>Frequencia</TitlePage>
                </div>
                <Line />
                <div style={{ display: 'grid', gridTemplateRows: '23% 23%', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
                    {FrequencyList.map(frequency => (
                        <div style={{ marginLeft: '30px', display: 'grid', gridTemplateRows: '0px 40px 15px', marginTop: '15px'}}>
                            <img  src={Task} alt="icon"/>
                            <div style={{ display: 'grid', marginLeft: '30px' }}>
                                <span style={{ fontSize: '15px' }}>{frequency.date}</span>
                                <span style={{ fontSize: '10px', color: `${calculateFrequency(frequency.present)}`}}>{frequency.present}</span>
                            </div>
                            <Line marginLeft="0px"/>
                        </div>
                    ))}
                </div>
            </Card>
            <div style={{ display: 'grid', marginTop: '30px', justifyContent: 'center'}}>
                <img style={{ marginLeft: '144px' }} src={CEFET} alt="cefet-mg" />
                <span style={{ textAlign: 'center'}}>SIGAA | Diretoria de Tecnologia da Informação</span>
            </div>
        </Sidebar>
    )
}

export default Frequency;