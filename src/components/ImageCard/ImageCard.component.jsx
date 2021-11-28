import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageCard.styles.scss';

const ImageCard = ({ location, alt, image, name, age }) => {
  return (
    <div className='photo-card'>
      <div className='preview'>
        <span className='span'></span>
        <span className='span'></span>
        <span className='span'></span>
        <span className='span'></span>
      </div>
      <div className='img-container'>
        <img className='card-img' src={image} alt={alt} />
      </div>
      <div className='person-details'>
        <span className='name'>
          {name}, <span>{age}</span>
        </span>
        <div className='location'>
          <FontAwesomeIcon className='map-marker-alt' icon='map-marker-alt' />
          <span className='text'>{location}</span>
        </div>
        <div className='person-btn'>
          <button className=' btn-btn like'>
            <FontAwesomeIcon className='heart btn-icon' icon='heart' />
          </button>
          <button className=' btn-btn dislike'>
            <FontAwesomeIcon
              className='thumbs-down btn-icon'
              icon='thumbs-down'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
