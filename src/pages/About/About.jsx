import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar';
import Calendar from '../../assets/Calendar.png';
import Draw from '../../assets/draw.png';
import Frequency from '../../assets/frequency.png';
import { Card, TextTitle, TitlePage } from './styled';

const ListDegress = [
    {   nomeDiciplina: 'IHC',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        seeMore: '/atividades',
        nota: 'Notas',
        pontoDistribuido: 'Pontos distribuidos: 60',
        pontuacaoAtual: 'Pontuacao atual: 45',
        seeMoreNotas: '/atividades',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 12/30',
        frequenciaAtual: 'Frequencia atual: 2/30',
        seeMoreFrequencia: '/frequencia'
    },
    {   nomeDiciplina: 'IHC',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        seeMore: '/atividades',
        nota: 'Notas',
        pontoDistribuido: 'Pontos distribuidos: 60',
        pontuacaoAtual: 'Pontuacao atual: 45',
        seeMoreNotas: '/atividades',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 12/30',
        frequenciaAtual: 'Frequencia atual: 2/30',
        seeMoreFrequencia: '/frequencia'
    },
    {   nomeDiciplina: 'IHC',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        seeMore: '/atividades',
        nota: 'Notas',
        pontoDistribuido: 'Pontos distribuidos: 60',
        pontuacaoAtual: 'Pontuacao atual: 45',
        seeMoreNotas: '/atividades',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 12/30',
        frequenciaAtual: 'Frequencia atual: 2/30',
        seeMoreFrequencia: '/frequencia'
    },
];


const About = () => {
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
                            <span style={{ textAlign: 'end'}}>{disciplina.seeMore}</span>
                        </div>
                        <div style={{ display: 'grid' }}>
                            <TextTitle>
                                {disciplina.nota}
                            </TextTitle>
                            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                                <img style={{ marginLeft: '2%'}} src={Draw} alt='calendar' />
                                <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '2%'}}>{disciplina.pontoDistribuido}</span>
                            </div>
                            <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '9%'}}>{disciplina.pontuacaoAtual}</span>
                            <span style={{ textAlign: 'end'}}>{disciplina.seeMoreNotas}</span>
                        </div>
                        <div style={{ display: 'grid' }}>
                            <TextTitle>
                                {disciplina.frequencia}
                            </TextTitle>
                            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                                <img style={{ marginLeft: '2%'}} src={Frequency} alt='calendar' />
                                <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '2%'}}>{disciplina.frequenciaRegistrada}</span>
                            </div>
                            <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '9%'}}>{disciplina.frequenciaAtual}</span>
                            <span style={{ textAlign: 'end'}}>{disciplina.seeMoreFrequencia}</span>
                        </div>
                    </div>
                </Card>
            ))}
        </Sidebar>
    );
};

export default About;