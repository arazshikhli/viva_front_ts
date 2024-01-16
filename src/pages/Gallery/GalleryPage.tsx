import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import Slider from "react-slick"
import { IResponseDataType } from '../../types'


export const GalleryPage = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // centerMode: true,
        // arrows: true
        adaptiveHeight: false,
        centerPadding: '1000px',
        accessibility: true

    };
    const [images, setImages] = useState<IResponseDataType[]>();
    useEffect(() => {
        axios.get<IResponseDataType[]>('https://jsonplaceholder.typicode.com/photos?_limit=20').then((response) => {
            console.log(response.data)
            setImages(response.data)
            console.log("Images: ", images)
        })
    }, [images])
    return <div className={styles.container}>
        <h3 className={styles.title}>Gallery Page</h3>
        <div className={styles.innerContainer}>
            {images ? (<>
                {images.map((image) =>
                    <div className={styles.item}

                    >
                        <div className={styles.imageContainer} style={{
                            backgroundImage: `url(${image.url})`
                        }}></div>
                        <span>albumId: {image.albumId}</span>
                        <span>thumbnailUrl: {image.thumbnailUrl}</span>

                    </div>
                )}
            </>) : ('loading...')}
        </div>
        {images ? (<>
            <Slider {...settings}>
                {images.map((image) => <div className={styles.item}>
                    <div className={styles.sliderImage}><img src={image.url} alt="" width={'600px'} height={'600px'} /></div>
                    <span>{image.id}</span>
                </div>)}
            </Slider>
        </>) : ('loading')}
    </div>
}