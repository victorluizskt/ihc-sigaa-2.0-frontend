import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar';
import Calendar from '../../assets/Calendar.png';
import Draw from '../../assets/draw.png';
import Frequency from '../../assets/frequency.png';
import CEFET from '../../assets/cefet.png';
import { Card, TextTitle, TitlePage, Button} from './styled';

const ListDegress = [
    {   nomeDiciplina: 'IHC',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        nota: 'Notas',
        pontoDistribuido: 'Pontos distribuidos: 60',
        pontuacaoAtual: 'Pontuacao atual: 45',
        seeMoreFrequency: '/frequencia',
        seeMoreNotas: '/atividades',
        seeMoreAboutDegree: '/disciplina',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 12/30',
        frequenciaAtual: 'Frequencia atual: 2/30',
        seeMore: 'Ver mais'
    },
    {   nomeDiciplina: 'IHC',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        nota: 'Notas',
        pontoDistribuido: 'Pontos distribuidos: 60',
        pontuacaoAtual: 'Pontuacao atual: 45',
        seeMoreFrequency: '/frequencia',
        seeMoreNotas: '/atividades',
        seeMoreAboutDegree: '/disciplina',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 12/30',
        frequenciaAtual: 'Frequencia atual: 2/30',
        seeMore: 'Ver mais'
    },
    {   nomeDiciplina: 'IHC',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        nota: 'Notas',
        pontoDistribuido: 'Pontos distribuidos: 60',
        pontuacaoAtual: 'Pontuacao atual: 45',
        seeMoreFrequency: '/frequencia',
        seeMoreNotas: '/atividades',
        seeMoreAboutDegree: '/disciplina',
        frequencia: 'Frequencia',
        iconFrequencia: '',
        frequenciaRegistrada: 'Frequencia registrada: 12/30',
        frequenciaAtual: 'Frequencia atual: 2/30',
        seeMore: 'Ver mais'
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
                            <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '9%'}}>{disciplina.pontuacaoAtual}</span>
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
                            <span style={{ color: '#A098AE', fontSize: '14px', marginLeft: '9%'}}>{disciplina.frequenciaAtual}</span>
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