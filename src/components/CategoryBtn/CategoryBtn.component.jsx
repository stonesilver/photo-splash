import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CategoryBtn.styles.scss';

const CategoryBtn = ({ item }) => {
  return (
    <div className='CategoryBtn'>
      <span className='text'>{item}</span>
      <FontAwesomeIcon className='chevron-down' icon='chevron-down' />
    </div>
  );
};

export default CategoryBtn;
