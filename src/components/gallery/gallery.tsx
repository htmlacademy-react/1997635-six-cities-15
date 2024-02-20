import { GalleryImages } from '../../const';
import GalleryItem from './gallery-item';

function Gallery () {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {GalleryImages.map((image) => <GalleryItem key={image.src} src={image.src} alt={image.alt}/>)}
      </div>
    </div>
  );
}

export default Gallery;
