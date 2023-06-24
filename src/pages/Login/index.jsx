import React, { useState } from 'react'
import Button from "../../components/Button";
import Field from "../../components/Field";
import Logo from "../../assets/logo-notfound.png";
import { mockUsers } from '../../api/data';
import { useNavigate } from 'react-router-dom';
import { StyledLoginContainer, Line } from './styled';

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        cpf: null,
        password: null,
    });

    const handleLogin = () => {
        let success = mockUsers.filter(item => item.cpf == user.cpf && item.password == user.password);
        if(success.length > 0) {
            const userJSON = JSON.stringify(user);
            localStorage.setItem('user', userJSON);
            navigate('/home')
        }
    }

    console.log(user);

    return (
        <div style={{ backgroundColor: "#F3F3F3" }}>
            <StyledLoginContainer>
                <img style={{ marginLeft: '118px' }} src={Logo} alt="logo-marca" />
                <Line /> 
                <Field title="Usuario:" setUser={setUser} user={user}/>
                <Field title="Senha:" type="password" setUser={setUser} user={user}/>
                <a>
                    <Button title="Entrar" action={handleLogin}/>
                </a>
                <a href="/recoverPassword">
                    <Button styleButton="76px" title="Esqueceu sua senha?" action={() => {console.log('oi')}}/>
                </a>
                <Line /> 
            </StyledLoginContainer>
        </div>
    )
}
    


export default Login;