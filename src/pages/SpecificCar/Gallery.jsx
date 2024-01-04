import { useEffect, useState } from "react"
import classes from './Gallery.module.css'


function Gallery({imgArray})
{   
    const [selectedImg, setSelectedImg] = useState(0)

    useEffect(() => {
        const onImageChange = (e) => {
            if (e.code === 'ArrowRight')
                setSelectedImg(curSelectedImg => curSelectedImg >= imgArray.length - 1 ? 0 : curSelectedImg + 1)
            else if (e.code === 'ArrowLeft')
                setSelectedImg(curSelectedImg => curSelectedImg === 0 ? imgArray.length - 1 : curSelectedImg - 1)
        }
        window.addEventListener('keydown', onImageChange)
        return () => {
            window.removeEventListener('keydown', onImageChange)
        }
    }, [imgArray.length])
    

    return (
        <div className={classes.gallery}>
            <div className={classes.selected}>
                <img src={imgArray[selectedImg]} />
            </div>
            <div className={classes['images-box']}>
                {imgArray.map((img, index) => <img width="100" height="60" key={img} src={img} onClick={() => setSelectedImg(index)} />)}
            </div>
        </div>
    )
}

export default Gallery