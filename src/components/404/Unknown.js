import React from "react";
import './Unknown.css';
import { Link} from "react-router-dom";

// -------------------------------

export default function NoMatch () {
    return (
        <div className="unknown_container">
            <h1 className="unknown_title"> 404</h1>
            <p className="unknown_text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backhome" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}