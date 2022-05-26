import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({largeImageURL, webformatURL, onModalOpen }) => {
    // const onClick = modalImg => onModalOpen(modalImg, );
    return (
        <li className={s.ImageGalleryItem} data-url={largeImageURL}  onClick={onModalOpen} >
            <img
                className={s.GalleryItemImage}
                alt="foto"
                src={webformatURL}
            />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    }

export default ImageGalleryItem;