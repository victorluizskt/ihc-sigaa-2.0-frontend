import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import News from '../../assets/news.png';
import { Card, Line } from "./styled";

const ListNews = [
    { icon: News, nomeDisciplina: 'IHC', descricao: 'Introdução à Avaliação de IHC e Design da Solução (25/04/2023 - 25/04/2023)'},
    { icon: News, nomeDisciplina: 'IHC', descricao: 'Qualidade em IHC e Abordagens Teóricas (20/04/2023 - 20/04/2023)'},
    { icon: News, nomeDisciplina: 'IHC', descricao: 'Introdução à Avaliação de IHC e Design da Solução (25/04/2023 - 25/04/2023)'}

]

const Home = () => (
    <>
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
                { ListNews.map(item => (
                    <div style={{ display: 'grid', gridTemplateRows: '18px 10px', marginTop: '5px' }}>
                        <div>
                        <img src={item.icon} alt="News" style={{ marginLeft: '30px', marginBottom: '-10px'}}/>
                        <span style={{ marginLeft: '5px' ,fontSize: '15px'}}>Disciplina: {item.nomeDisciplina}</span>
                        </div>
                        <span style={{ marginLeft: '59px', fontSize: '10px'}}>Novo topico cadastrado: {item.descricao}</span>
                        <Line />
                    </div>
                ))}
            </Card>
        </Sidebar>
    </>
)

export default Home;