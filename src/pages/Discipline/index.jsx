import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DisciplineHeader from "../../components/DisciplineHeader";
import { 
    Card, 
    Line, 
    TitlePage, 
    Button ,
} from './styled';

const Discipline = () => {
    return (
        <Sidebar>
            <Navbar />
            <DisciplineHeader />
            <Card height="418px" marginTop="30px">
                <div style={{ display: 'grid', gridTemplateColumns: '45% 50%', paddingTop: '20px', marginLeft: '30px'}}>
                    <a href="/about">
                        <Button>Voltar</Button>
                    </a>
                    <TitlePage>Atividades</TitlePage>
                </div>
                <Line />
                <span>Prova 1</span>
                <span>Valor</span>
                <span>Data limite</span>
                <button>Enviar</button>
                <Line />
                <span>Prova 2</span>
                <span>Valor</span>
                <span>Data limite</span>
                <button>Enviar</button>
                <Line />
                <span>Trabalho em grupo</span>
                <span>Valor</span>
                <span>Data limite</span>
                <button>Enviar</button>
                <Line />
                <span>Listas</span>
                <span>Valor</span>
                <span>Data limite</span>
                <button>Enviar</button>
                <Line />
            </Card>
        </Sidebar>
    )
}

export default Discipline;