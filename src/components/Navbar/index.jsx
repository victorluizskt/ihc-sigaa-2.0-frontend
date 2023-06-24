import { IoIosPerson } from 'react-icons/io'

const Navbar = () => {
    const savedUserJSON = localStorage.getItem('user');
    const arrayObject = JSON.parse(savedUserJSON);
    
    return (
        <div style={{ width: '100%', height: '50px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '50% 50%'}}>
                <div>
                    <IoIosPerson />
                    <span style={{ marginLeft: '10px', fontSize: '15px'}}>{arrayObject[0].name}</span>
                </div>
                <span style={{ marginLeft: '10px', fontSize: '12px', textAlign: 'end'}}>Semestre atual: 2023.1</span>
                <span style={{ marginLeft: '25px', fontSize: '12px'}}>Engenharia da Computacao</span>
            </div>
        </div>
    )
}
export default Navbar;