import React, { useState } from 'react';
import styled from 'styled-components';
import {Right_button,Left_button} from "../images/Icon";
import Calendar from './Calendar';
import Loader from './Loader';


const Year = styled.span`
    position:absolute;
    font-wieght:600;
    font-size:25px;
    top:-40px;
`;
const Welcome_msg = styled.span`
    font-weight:600;
    font-size:50px;
`;
const Calander=styled.div`

`;
const NewWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:100%;
    margin-top:15%;
`;
// const Button=styled.div`
//     position:absolute;
//     curosr:pointer;
//     &:not(last-child){left:-50px};
// `;
// const Wrapper=styled.div`
//     display:flex;
//     max-width:50%;
//     justify-content:center;
//     text-align:center;
//     align-items:center;
// `;

function MainContent(props) {
    const [Loading,setLoading]= useState(false);
    const year_data="{year_data}";
    const about_data="{about_data}";
    setTimeout(()=>{setLoading(true)},3000);
    return (
        <>
        {props.Auth&&Loading ? 
        // <Wrapper>
        //     <Year>{year_data}</Year>
        //     <Lbutton><Left_button size="30"/></Lbutton>
        //     <Calander>{calander_data[2]}</Calander>
        //     <Rbutton><Right_button size="30"/></Rbutton>
        //     <Button><Left_button size="30"/><Right_button size="30"/></Button>
        // </Wrapper>
        // <Wrapper><Calendar/></Wrapper>
        <Calendar/>
        : 
        (Loading ? 
        <NewWrapper>
            <Welcome_msg>
                {about_data}
            </Welcome_msg>
        </NewWrapper>:
        <NewWrapper>
            <Loader/>
        </NewWrapper>
        )
        }
        </>
    );
}
export default MainContent;