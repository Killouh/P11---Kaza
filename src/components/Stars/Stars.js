import React from 'react';
import './Stars.css';
import fullStar from '../../assets/stars.png';
import emptyStar from '../../assets/star-empty.png';

const ColoredStar = () => {
    return <img src={fullStar} alt="stars" />
}

const EmptyStar = () => {
    return <img src={emptyStar}alt="stars" />
}

export default function Stars(props) {

    return (
        <div className="stars">
            {Array.from({length: parseInt(props.rating)}, (v, idx) => <ColoredStar key={'colored-' + idx}/>)}
            {Array.from({length: 5 - parseInt(props.rating)}, (v, idx) => <EmptyStar key={'empty-' + idx}/>)}
        </div>
    )
};

