import { StyledHeader, StyledHref } from './styled';
import Book from '../../assets/images/book.png';
import HomePage from '../../assets/images/home-page.png';
import PassFail from '../../assets/images/pass-fail.png';
import YearView from '../../assets/images/year-view.png';

// todo: criar uma class
const array = [
    {field: "Logo", logo: "None", redirectTo: "/home"},
    {field: "Pagina Inicial", logo: HomePage, redirectTo: "/home"},
    {field: "Frequencia", logo: YearView, redirectTo: "/frequency"},
    {field: "Notas", logo: PassFail, redirectTo: "/grades"},
    {field: "Disciplinas", logo: Book, redirectTo: "/subjects"},
];


const Header = () => (
    <StyledHeader>
        {array.map((item => (
            <StyledHref href={item.redirectTo}>
                <img src={item.logo} alt="img" style={{ width: "40px", height: "40px" }}/>
                <h3>{item.field}</h3>
            </StyledHref>
        )))}
    </StyledHeader>
)

export default Header;