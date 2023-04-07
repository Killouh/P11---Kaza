import React from 'react';
import './Cards.css';
import data from "../../../data/data.json";
import {useState, useEffect} from 'react';
import { useParams} from "react-router-dom";


export default function LocationCard(props) {
    const [location, setLocation] = useState({title:"",description:"",cover:"", tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}}); // Version page detail, revoir les données appellées
    let { id } = useParams();

    useEffect (function (){
        let locationDetails = data.find(location => location.id === id); // voir fonctions flechée
        setLocation(locationDetails) // voir setlocation/state
    },[id]);
    return (

        <div>
        <h1>{location.title}</h1>
        <p>{location.description}</p>
        <img src={location.cover} alt={location.title} />
      </div>
    )
}