import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <div>
            <h1>Faça seu login</h1>
            <div className="login">
            <Link to="/home">Home</Link>
            <Link to="/perfil">Perfil</Link>
            </div>
        </div>
    )
}