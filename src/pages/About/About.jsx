import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar';
import { Card } from './styled';

const ListDegress = [
    {   nomeDiciplina: 'IHC',
        icon: '',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        seeMore: '/atividades',
        nota: 'Notas',
        iconNota: '',
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
        icon: '',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        seeMore: '/atividades',
        nota: 'Notas',
        iconNota: '',
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
        icon: '',
        horario: 'Quarta-feira',
        horas: '08:40 - 10:20 AM',
        seeMore: '/atividades',
        nota: 'Notas',
        iconNota: '',
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
                <span style={{ 
                    fontSize: '24px', 
                    fontWeight: '700', 
                    textAlign: 'center', 
                    display: 'flex', 
                    justifyContent: 'center',
                    borderRadius: '22px',
                    paddingTop: '56px'
                }}>
                    Disciplinas matriculadas
                </span>
            </Card>
            { ListDegress.map(disciplina => (
                <Card height="100px" marginTop="30px">
                    <div style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%'}}>
                        <div>
                            <span>{disciplina.nomeDiciplina}</span>
                            <span>{disciplina.icon}</span>
                            <span>{disciplina.horario}</span>
                            <span>{disciplina.horas}</span>
                            <span>{disciplina.seeMore}</span>
                        </div>
                        <div>
                            <span>{disciplina.nota}</span>
                            <span>{disciplina.iconNota}</span>
                            <span>{disciplina.pontoDistribuido}</span>
                            <span>{disciplina.pontuacaoAtual}</span>
                            <span>{disciplina.seeMoreNotas}</span>
                        </div>
                        <div>
                            <span>{disciplina.frequencia}</span>
                            <span>{disciplina.iconFrequencia}</span>
                            <span>{disciplina.frequenciaRegistrada}</span>
                            <span>{disciplina.frequenciaAtual}</span>
                            <span>{disciplina.seeMoreFrequencia}</span>
                        </div>
                    </div>
                </Card>
            ))}
        </Sidebar>
    );
};

export default About;