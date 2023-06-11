import { StyledHeader, StyledHref } from './styled';
import Book from '../../assets/images/book.png';
import HomePage from '../../assets/images/home-page.png';
import PassFail from '../../assets/images/pass-fail.png';
import YearView from '../../assets/images/year-view.png';
import StudentHeader from '../StudentHeader';

// todo: criar uma class
const array = [
    {logo: "None", redirectTo: "/home", marginPx: "200px"},
    {logo: HomePage, redirectTo: "/home"},
    {logo: YearView, redirectTo: "/frequency"},
    {logo: PassFail, redirectTo: "/grades"},
    {logo: Book, redirectTo: "/subjects"},
];


const Header = () => (
    <>
        <StudentHeader />
        <StyledHeader>
            {array.map((item => (
                <StyledHref href={item.redirectTo}>
                    <img 
                        src={item.logo} 
                        alt="img" 
                        style={{ width: "30px", height: "30px", marginBottom: `${item.marginPx ?? "20px"}`, marginLeft: "10px" }}
                    />
                </StyledHref>
            )))}
        </StyledHeader>
    </>
)

export default Header;