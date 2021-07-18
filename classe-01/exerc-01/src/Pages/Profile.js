import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


export default function Perfil() {
    return(
        <div>
             <h1>Este é o seu perfil</h1>
            <div className="profile">
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            </div>
        </div>
    )
};

