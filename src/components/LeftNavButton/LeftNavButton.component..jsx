import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LeftNavButton.styles.scss';

const LeftNavButton = ({ icon, text }) => {
  return (
    <div className={`${text === 'Home' ? 'select' : ''} leftNavButton`}>
      <FontAwesomeIcon
        className={text === 'Home' ? 'home icon' : 'icon'}
        icon={icon}
      />{' '}
      <span className='text'>{text}</span>
    </div>
  );
};

LeftNavButton.defaultProps = {
  icon: 'home',
};

export default LeftNavButton;
