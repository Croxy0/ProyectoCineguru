import React from "react";
import styled from "styled-components";
import logo from "../asset/logo.png"
import { useNavigate } from "react-router-dom";
export default function Header(props){
        const navigate=useNavigate
    return (
        <Container>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={()=>navigate(props.login ?"/Iniciar Sesion" : "Registrase")}>{props.login ? "Iniciar Sesion" : "Registrarse"}
            </button>        
        </Container>
    );
}

const Container =styled.div``;