import React from "react";
import styled, { keyframes } from "styled-components";
import { Loading_logo } from "../images/Icon";

const Animation = keyframes`
    0%{
        transform:rotate(72deg);
        opacity:0;
    }
    25%{
        transform:rotate(144deg);
        opacity:1;
    }
    50%{
        transform:rotate(216deg);
        opacity:0;
    }
    75%{
        transform:rotate(288deg);
        opacity:1;
    }
    100%{
        transform:rotate(360deg);
        opacity:0;
    }
    
`;

const Loader = styled.div`
  animation: ${Animation} 3s linear infinite;
`;
export default (props) => (
  <Loader>
    <Loading_logo size={100} />
    {props.test}
  </Loader>
);