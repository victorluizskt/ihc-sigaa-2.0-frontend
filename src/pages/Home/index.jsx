import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Card } from "./styled";

const Home = () => (
    <>
        <Sidebar>
            <Navbar />
            <Card>
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
                    borderRadius: '22px', 
                    textAlign: 'center', 
                    display: 'flex', 
                    height: '25px',
                    marginTop: '10px',
                    borderRadius: '8px',
                    width: '60%',
                    margin: '0 auto'
                }}/>
            </Card>
        </Sidebar>
    </>
)

export default Home;