import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DisciplineHeader from "../../components/DisciplineHeader";
import Task from '../../assets/task.png';

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
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
    {
        icon: '',
        date: '11-03-2023',
        present:'Falta',
    },
];

const Frequency = () => {
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
                                <span style={{ fontSize: '10px'}}>{frequency.present}</span>
                            </div>
                            <Line marginLeft="0px"/>
                        </div>
                    ))}
                </div>
            </Card>
        </Sidebar>
    )
}

export default Frequency;