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
                        <div>PARTE 1</div>
                        <div>PARTE 2</div>
                        <div>PARTE 3</div>
                    </div>
                </Card>
            ))}
        </Sidebar>
    );
};

export default About;