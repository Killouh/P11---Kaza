import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data.json";
import './CardsPage.css';

// ------- COMPONENTS -------------
import AccordionLocation from '../../components/AccordionLocation/AccordionLocation';
import Avatar from '../../components/Avatar/Avatar';
import Tag from '../../components/Tag/Tag';
import Slideshow from '../../components/Slideshow/Slideshow';
import Stars from '../../components/Stars/Stars';







export default function LocationPage() {
    const [location, setLocation] = useState({title:"",description:"",cover:"", tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}}); // Version page detail, revoir les données appellées
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect (function (){
      const  locationDetails = data.find(location => location.id === id); // voir fonctions flechée
        setLocation(locationDetails) // voir setlocation/state

      // Vérification de l'existence de l'ID dans le tableau de données
        if (!locationDetails) {
          navigate('/404');
        }
    },[id, navigate]);
 
return (
<div className="body_location_page">
            <div className="slideshow_location">
                <Slideshow className="slideshow_location_img"  img={location.pictures}/>
            </div>

            <div className="presentation">
                <div className="location_header">
                    <div>
                        <h2 className="title_locationpage">{location.title}</h2>
                        <p className="subtitle_locationpage">{location.location}</p>
                    </div>

                    <div className="main-container-tag">
                        {location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
                    </div>
                </div>

                <div className="location_subheader">
                    <div>
                        <Avatar name={location.host.name} picture={location.host.picture}/>
                    </div>

                    <div className="main-container-stars">
                        <Stars rating={location.rating} key={location.id}/>
                    </div>
                </div>
            </div>

            <div className="main-container-accordion">
                <div className="accordion-container-left">
                    <AccordionLocation
                        title="Description"
                        content={location.description}
                    />
                </div>
                <div className="accordion-container-right">
                    <AccordionLocation
                        title="Equipement"
                        content={
                            <ul>
                                {location.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
                            </ul>
                        }
                    />

                </div>
            </div>

        </div>
    );
}

