import Header from "../../components/Header";

const Subjects = () => (
    <>
        <Header />
        <table style={{border: "1"}}>
        <tr>
            <td>Nome</td>
            <td>Idade</td>
            <td>Profissão</td>
        </tr>
        <tr>
            <td>Ted</td>
            <td>22</td>
            <td>Estudante</td>
        </tr>
        <tr>
            <td>Ralf</td>
            <td>26</td>
            <td>Designer</td>
        </tr>
    </table>
    </>
);

export default Subjects;