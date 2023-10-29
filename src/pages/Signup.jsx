import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function Singup() {
    return <Container>
        <BackgroundImage />
        <Header />
        <div className="body flex column a-center.j-center">
            <div className="text flex column"></div>                 
                <h1>CineGurú: Tu Portal de Películas en un Clic</h1>
        </div>
        <div className="form">
            <imput type="email" placeholder="Correo Electronico" name="email" />
            <imput type="password" placeholder="Contraseña" name="password" />
            <button>Crear Cuenta</button>
        </div>
        <button>Iniciar Sesion</button>
    </Container>
};

const Container = styled.div``; 