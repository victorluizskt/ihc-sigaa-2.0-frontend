import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import News from '../../assets/news.png';
import CEFET from '../../assets/cefet.png';

import { Card, Line } from "./styled";
import { useState } from "react";

const ListNews = [
    { icon: News, nomeDisciplina: 'IHC', descricao: 'Introdução à Avaliação de IHC e Design da Solução (25/04/2023 - 25/04/2023)'},
    { icon: News, nomeDisciplina: 'Inteligencia Computacional I', descricao: 'Modelo Fuzzy de inferência TSK (14/03/2023 - 17/03/2023)'},
    { icon: News, nomeDisciplina: 'Psicologia Aplicada às Organizações', descricao: 'Unidade 1 - Sentidos e Significados do trabalho - História do Trabalho (03/03/2023 - 03/03/2023)'},
    { icon: News, nomeDisciplina: 'Psicologia Aplicada às Organizações', descricao: 'Não haverá aula (10/03/2023 - 10/03/2023)'},
    { icon: News, nomeDisciplina: 'IHC', descricao: 'Projeto Final (27/06/2023 - 27/06/2023)'},
]


const Home = () => {
    const [news, setNews] = useState(ListNews);

    const handleClickFilter = (e) => {
        const filtro = e.target.value.toLowerCase();
        const dadosFiltrados = ListNews.filter(item => item.nomeDisciplina.toLowerCase().includes(filtro));
        setNews(dadosFiltrados);
    }

    return (
        <Sidebar>
            <Navbar />
            <Card height="20%">
                <span style={{ 
                    fontSize: '24px', 
                    fontWeight: '700', 
                    textAlign: 'center', 
                    display: 'flex', 
                    justifyContent: 'center',
                    paddingTop: '26px',
                    borderRadius: '22px'
                }}>
                    Procure por notícias
                </span>
                <span
                    style={{ 
                        fontSize: '12px', 
                        textAlign: 'center', 
                        display: 'flex', 
                        justifyContent: 'center',
                        paddingTop: '5px',
                        borderRadius: '22px',
                        marginBottom: '10px'
                    }}>
                    Você poderá realizar buscas sobre artigos e notícias cadastradas pelos professores em suas disciplinas
                </span>
                <input 
                    onChange={e => handleClickFilter(e)}
                    style={{
                    textAlign: 'center', 
                    display: 'flex', 
                    height: '25px',
                    marginTop: '10px',
                    borderRadius: '8px',
                    width: '60%',
                    margin: '0 auto'
                }}/>
            </Card>
            <Card height="50%" marginTop="40px">
                <span style={{ 
                    fontSize: '24px', 
                    fontWeight: '700', 
                    textAlign: 'center', 
                    display: 'flex', 
                    paddingTop: '26px',
                    borderRadius: '22px',
                    marginLeft: '30px',
                    marginBottom: '10px',
                }}>
                    Últimas notícias cadastradas
                </span>
                { news.length > 0 ? (
                    news.map(item => (
                        <div style={{ display: 'grid', gridTemplateRows: '18px 10px', marginTop: '5px' }}>
                            <div>
                            <img src={item.icon} alt="News" style={{ marginLeft: '30px', marginBottom: '-10px'}}/>
                            <span style={{ marginLeft: '5px' ,fontSize: '15px'}}>Disciplina: {item.nomeDisciplina}</span>
                            </div>
                            <span style={{ marginLeft: '59px', fontSize: '10px'}}>Novo topico cadastrado: {item.descricao}</span>
                            <Line />
                        </div>
                    ))
                ) : (
                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <span style={{
                        fontSize: '20px', 
                        fontWeight: '700', 
                    }}>Não há resultados para o filtro utilizado.</span>
                </div>)}
            </Card>
            <div style={{ display: 'grid', marginTop: '30px', justifyContent: 'center'}}>
                <img style={{ marginLeft: '144px' }} src={CEFET} alt="cefet-mg" />
                <span style={{ textAlign: 'center'}}>SIGAA | Diretoria de Tecnologia da Informação</span>
            </div>
        </Sidebar>
    )
}

export default Home;