import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar';
import Calendar from '../../assets/Calendar.png';
import Draw from '../../assets/draw.png';
import Frequency from '../../assets/frequency.png';
import CEFET from '../../assets/cefet.png';
import { Card, TextTitle, TitlePage, Button} from './styled';

const ListDegress = [
    {   nomeDiciplina: 'Inteligencia Computacional I',
        horario: 'Quinta-feira',
        horas: '13:00 - 14:40 AM',
        nota: 'Notas',
        pontoDistribuido: 'Pontos distribuidos: 80',
        pontuacaoAtual: '60',
        seeMoreFrequency: '/frequencia',
        seeMoreNotas: '/atividades',
        seeMoreAboutDegree: '/disciplina',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 24/30',
        frequenciaAtual: '15/30',
        seeMore: 'Ver mais'
    },
    {   nomeDiciplina: 'IHC',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        nota: 'Notas',
        pontoDistribuido: 'Pontos distribuidos: 100',
        pontuacaoAtual: '99',
        seeMoreFrequency: '/frequencia',
        seeMoreNotas: '/atividades',
        seeMoreAboutDegree: '/disciplina',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 26/30',
        frequenciaAtual: '24/30',
        seeMore: 'Ver mais'
    },
    {   nomeDiciplina: 'Psicologia Aplicada às Organizações',
        horario: 'Sexta-feira',
        horas: '07:00 - 08:40 AM',
        nota: 'Notas',
        pontoDistribuido: '100',
        pontuacaoAtual: '55',
        seeMoreFrequency: '/frequencia',
        seeMoreNotas: '/atividades',
        seeMoreAboutDegree: '/disciplina',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 30/30',
        frequenciaAtual: '2/30',
        seeMore: 'Ver mais'
    },
];


const About = () => {
    const calculateFrequency = (frequency) => {
        const calculte = frequency.split("/");
        console.log(calculte);
        const percentage = (calculte[0] / calculte[1]) * 100;
        if(percentage >= 75) return "#00b327";
        return '#F00';
    };

    const calculateNotas = (nota1, nota2) => {
        const nota2Split = nota2.split(": ")[1];
        const percentage = (nota1 / nota2Split) * 100;
        console.log(nota2Split);
        if(percentage >= 60) return "#00b327";
        return '#F00';
    };

    return (
        <Sidebar>
            <Navbar />
            <Card height="148px">
                <TitlePage>
                    Disciplinas matriculadas
                </TitlePage>
            </Card>
            {ListDegress.map(disciplina => (
                <Card height="100px" marginTop="30px">
                    <div style={{ display: 'grid', gridTemplateColumns: '1% 33% 33% 33%', height: '100%', borderRadius: '22px'}}>
                        <div style={{ backgroundColor: '#C8E6FA', height: '100%', borderRadius: '20px 0px 0px 20px'}}/>
                        <div style={{ display: 'grid'}}>
                            <TextTitle>
                                {disciplina.nomeDiciplina}
                            </TextTitle>
                            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                                <img style={{ marginLeft: '2%'}} src={Calendar} alt='calendar' />
                                <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '2%'}}>{disciplina.horario}</span>
                            </div>
                            <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '9%'}}>{disciplina.horas}</span>
                            <a href={disciplina.seeMoreAboutDegree} style={{ textAlign: 'end'}} >
                                <Button>{disciplina.seeMore}</Button>
                            </a>
                        </div>
                        <div style={{ display: 'grid' }}>
                            <TextTitle>
                                {disciplina.nota}
                            </TextTitle>
                            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                                <img style={{ marginLeft: '2%'}} src={Draw} alt='calendar' />
                                <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '2%'}}>{disciplina.pontoDistribuido}</span>
                            </div>
                            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                                <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '9%'}}>Pontuacao atual: </span>
                                <span style={{ color: `${calculateNotas(disciplina.pontuacaoAtual, disciplina.pontoDistribuido)}`, fontSize: '14px', marginLeft: '1%'}}>{disciplina.pontuacaoAtual}</span>
                            </div>
                            <a href={disciplina.seeMoreNotas} style={{ textAlign: 'end'}} >
                                <Button>{disciplina.seeMore}</Button>
                            </a>
                        </div>
                        <div style={{ display: 'grid', borderRadius: '22px' }}>
                            <TextTitle>
                                {disciplina.frequencia}
                            </TextTitle>
                            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                                <img style={{ marginLeft: '2%'}} src={Frequency} alt='calendar' />
                                <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '2%'}}>{disciplina.frequenciaRegistrada}</span>
                            </div>
                            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                                <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '9%'}}>Frequencia atual: </span>
                                <span style={{ color: `${calculateFrequency(disciplina.frequenciaAtual)}`, fontSize: '14px', marginLeft: '1%'}}>{disciplina.frequenciaAtual}</span>
                            </div>
                            <a href={disciplina.seeMoreFrequency} style={{ textAlign: 'end', borderRadius: '0px 0px 11px'}} >
                                <Button>{disciplina.seeMore}</Button>
                            </a>
                        </div>
                    </div>
                </Card>
            ))}
            <div style={{ display: 'grid', marginTop: '30px', justifyContent: 'center'}}>
                <img style={{ marginLeft: '144px' }} src={CEFET} alt="cefet-mg" />
                <span style={{ textAlign: 'center'}}>SIGAA | Diretoria de Tecnologia da Informação</span>
            </div>
        </Sidebar>
    );
};

export default About;