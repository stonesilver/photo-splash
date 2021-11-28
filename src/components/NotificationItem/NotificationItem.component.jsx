import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NotificationItem.styles.scss';

const NotificationItem = ({ notification, image, time, icon, color }) => {
  return (
    <div className='NotificationItem'>
      <div className='img-container'>
        <img src={image} alt='avatar' className='notification-img' />
      </div>
      <div className='activity'>
        <span className='activity-notification'>{notification}</span>
        <span className='notification-time'>{`About ${time} minutes ago`}</span>
      </div>
      <FontAwesomeIcon
        className='noty-icon'
        icon={icon}
        style={{ color: color }}
      />
    </div>
  );
};

export default NotificationItem;
