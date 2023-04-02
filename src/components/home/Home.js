import React from 'react'
import './Home.css';
import {useState, useEffect} from 'react';
import Cards from './components/Cards';
import './Home.css'
import { useParams } from "react-router-dom";



export default function Home() {
// const [location, setLocation] = useState({title:"",description:"",cover:"", tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}}); // charger moins de chose que cardspage
  return (
    <div className="body-home">
            <div className="background_title">
                <div className="title_img">
                    <img src="../homebackgroundimg.png" alt="bgdimg"/>
                    <h2 className="title_home">Chez vous, partout et ailleurs</h2>
                </div>
                <div className="bgd"></div>
            </div>


            <div className="background">
                <div className="location-card-info">
                 
                  
                </div>
            </div>

        </div>
    );
}
