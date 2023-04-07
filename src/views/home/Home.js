import React from 'react'
import './Home.css';
import { useState, useEffect } from 'react';
import data from "../../data/data.json";
import { Link } from "react-router-dom";
// import Cards from './components/Cards';



export default function Home() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        setLocation(data);
    }, []);
    return (
        <div className="body-home">
            <div className="background_title">
                <div className="title_img">
                    <img className="img_home" src="homebackgroundimg.png" alt="bgdimg" />
                    <h2 className="title_home">Chez vous, partout et ailleurs</h2>
                </div>
            </div>

            <div className="background">
                <div className="location-card-info">
                    {location.map(location => (
                        <div className="location-card-container" key={location.id}>
                            <Link to={`http://localhost:3000/location/${location.id}`}>
                                <img className="location-card-img" src={location.cover} alt={location.title} />
                                <h2 className="location-card-title" >{location.title}</h2>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    );
}
