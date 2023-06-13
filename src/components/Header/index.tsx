import { StyledHeader, StyledHref } from './styled';
import HomePage from '../../assets/images/home-page.png';
import Grades from '../../assets/images/notebook.png';
import StudentHeader from '../StudentHeader';
import Logout from '../../assets/images/logout.png';

// todo: criar uma class
const array = [
    {logo: HomePage, redirecTo: "/home", marginTopVh: "28vh"},
    { logo: Grades, redirectTo: "/subjects", marginTopVh: "29vh" },
    { logo: Logout, redirectTo: "/", marginTopVh: "40vh" },
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
                        style={{ 
                            width: "30px", 
                            height: "30px", 
                            marginLeft: "10px",
                            marginTop: `${item.marginTopVh}`
                        }}
                    />
                </StyledHref>
            )))}
        </StyledHeader>
    </>
)

export default Header;