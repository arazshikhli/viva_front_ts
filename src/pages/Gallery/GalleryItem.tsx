import { IResponseDataType } from "../../types"
import styles from './styles.module.css'
export const GalleryItem = (item: IResponseDataType) => {
    return <>
        <span>AlbumId: {item.albumId}</span>
        <span>thumbnailUrl: {item.thumbnailUrl}</span>
        <div className={styles.imageContainer} style={{
            backgroundImage: `url(${item.url})`
        }}></div>
    </>
}