import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <h1>Página Inicial</h1>
            <div className="home">
            <Link to="/login">Login</Link>
            <Link to="/perfil">Perfil</Link>
            </div>
        </div>
    )
}