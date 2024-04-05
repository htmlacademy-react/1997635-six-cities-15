import { getImagesFromGallery } from '../../utils';
import GalleryItem from './gallery-item';

type GalleryProps = {
  images: [string];
}

function Gallery ({images}: GalleryProps) : JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {getImagesFromGallery(images).map((image) => <GalleryItem key={image} src={image}/>)}
      </div>
    </div>
  );
}

export default Gallery;
