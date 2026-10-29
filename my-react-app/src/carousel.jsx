import { useEffect } from 'react';
import { useState } from 'react';
import './carousel.css';
function Carousel(){
    const [image , setImage] = useState([]);
    const [index , setIndex] = useState(0);
    useEffect(() => {
    const fetchBanners = async() =>{
        try{
            const response = await fetch('http://localhost:3000/products/carousel');
            const data = await response.json();
            if(response.ok){
            const bannerArray = Array.isArray(data) ? data : data.rows;

                    if (bannerArray && Array.isArray(bannerArray)) {
                        const urls = bannerArray.map(item => item.image_url);
                        setImage(urls);
                    } else {
                        console.error('Data received is not an array:', data);
                    }
            }
        }catch(err){
            console.error('failed to load image', err)
        }
    };
    fetchBanners();
    },[]);
    const handleNext = () => {
        setIndex((prevIndex) => 
            prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const handlePrev = () => {
        setIndex((prevIndex) => 
            prevIndex === 0 ? image.length - 1 : prevIndex - 1
        );
    };
    return(
        <div className='carousel-container'>
        <div className='carousel'>
            <img src={image[index]} alt="slide" className='carousel-image'/>
            <div className="carousel-buttons">
                <button onClick={handlePrev}>{'<'}</button>
                <button onClick={handleNext}>{'>'}</button>
            </div>
        </div>
        </div>
    );
}
export default Carousel;