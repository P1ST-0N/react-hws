import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map(img => (
                <ImageGalleryItem img={img} key={img.id} />
            ))}
        </ul>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};