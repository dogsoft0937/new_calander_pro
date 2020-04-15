import React,{useState} from 'react';
import styled from 'styled-components';
import {Profile} from "../images/Icon";
import useInput from "../Hooks/useInput";
import {AuthToken} from './Auth';
const Wrapper = styled.div`  
    background: ${props=>props.theme.gra_Bg};
`;
const HeaderItem = styled.div`
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
    width: 100%;
    display: flex;
    padding:10px 8% 50px 5px ;
    justify-content:flex-end;
`;

const Button2 = styled.button`
    &:not(last-child){margin-right:5px;};
    color:${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background : ${props => props.theme.bg};
    font-size:20px;
    padding:0.25em 1em;
    border-radius:3px;
    cursor:pointer;
`; 

const Image=styled.svg`
    border-radius:50%;
    width:150px;
    height:150px;
    margin-bottom:30px;
`;
const P=styled.p`
    text-align:center;
`;

export default (props)=> {
    const [openModal,setOpen]=useState(false);
    const [Bdivision,setDivision]=useState("");

    const username=useInput("");
    const password=useInput("");
    const confirmPassword=useInput("");
    const profilename=useInput("");
    const reset=()=>{
        username.reset("");
        password.reset("");
        confirmPassword.reset("");
        profilename.reset("");
    }
    const handleClickOpen =(e)=>{
        console.log(e.target.name)
        if(e.target.name==="login"){ setDivision("login")}
        else if(e.target.name==="register") {setDivision("register")}
        setOpen(!openModal);
    }
    const handleClose=()=>{
        setOpen(!openModal);
        reset();
    }
    const loginProcess=(e)=>{
        if(username.value!==""&&password.value!==""){
            props.successAuth();
            setOpen(!openModal);
        }
    }
    const Logout=()=>{
        reset();
        props.successAuth();
    }


    const RegisterProcess=()=>{
        if(username.value!==""&&password.value!==""&&confirmPassword.value!==""){
            props.successAuth();
            setOpen(!openModal);
        }
    }
    
    return (
        <>
        <Wrapper>
            <HeaderItem>
                {!props.Auth ? <><Button2 name="login" onClick={handleClickOpen}>Login</Button2>
                <Button2 name="register" onClick={handleClickOpen}>Reigster</Button2></>
                :<Button2 onClick={Logout}>Log out</Button2>
                }
            </HeaderItem>
            <P>
                <Image><Profile size={150}/></Image>
            </P>
            <AuthToken openModal={openModal} 
            handleClose={handleClose} 
            username={username}
            password={password}
            confirmPassword={confirmPassword}
            loginProcess={loginProcess}
            Bdivision={Bdivision}
            RegisterProcess={RegisterProcess}
            />
        </Wrapper>
        </>
    );
}