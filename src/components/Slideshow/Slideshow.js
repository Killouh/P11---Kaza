import React, { useState } from 'react';
import './Slideshow.css'
import leftChevron from '../../assets/chevron-left.png'
import rightChevron from '../../assets/chevron-right.png'

export default function Slideshow(props) {

    const [slideIdx, setSlideIdx] = useState(0);
    const imgSize = () => {
        const slideshowImg = document.querySelector('.slideshow_container_img');
        if (!slideshowImg) {
            return 0;
        }

        return slideshowImg.width;
    }


    const onNext = () => {
        if (slideIdx === props.img.length - 1) {
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }

    const onPrev = () => {
        if (slideIdx === 0) {
            setSlideIdx(props.img.length - 1)
        } else {
            setSlideIdx(slideIdx - 1)
        }
    }
    let slideshowControls = null;
    if (props.img.length > 1) {
        slideshowControls = (
            <div className={'slideshow_controls'}>
                <img src={leftChevron} alt="chevron-gauche" className={'chevron'} onClick={onPrev} />
                <img src={rightChevron} alt="chevron-droite" className={'chevron'} onClick={onNext} />
            </div>
        );
    }

    let slideshowIndex = null
    if (props.img.length > 1){
        slideshowIndex =(
        <div className={'slideshow_idx'}>{slideIdx + 1} / {props.img.length}</div>
        )
    }

    return (
        <div className="slideshow">
            <div className="slideshow_container" style={{ transform: `translateX(-${slideIdx * imgSize()}px)` }}>
                {props.img.map((picture) => < img alt="slideshow" className='slideshow_container_img' src={picture} key={picture} />)}
            </div>
            {slideshowControls}
            {slideshowIndex}  
        </div>
    );
}
