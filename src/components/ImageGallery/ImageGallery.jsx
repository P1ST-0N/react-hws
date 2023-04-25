import PropTypes from 'prop-types';
// import { Image}
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