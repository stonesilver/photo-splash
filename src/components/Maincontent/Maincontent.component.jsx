import { useState } from 'react';
import { categoriesArray, notificationArray } from '../../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryBtn from '../../components/CategoryBtn/CategoryBtn.component';
import ImageCard from '../../components/ImageCard/ImageCard.component';
import NotificationItem from '../../components/NotificationItem/NotificationItem.component';
import { useClickOutsideHook } from '../../Hooks/clickOutsideHook';
import Search from '../../components/Search/Search.component';
import './Maincontent.styles.scss';

const Maincontent = ({ fetchData, data, nothingFound, setData, loading }) => {
  const [hideMobileSearch, setHideMobileSearch] = useState(false);
  const { visible, setVisible, ref, ref1 } = useClickOutsideHook(false);

  // function to toggle the notification dropdown
  const toggleNotification = () => {
    setVisible((prevState) => !prevState);
  };

  // function to toggle the mobile search
  const toggleMobileSearch = () => {
    setHideMobileSearch((prevState) => !prevState);
  };
  return (
    <div className='right'>
      <div className='top-nav'>
        <header className='mobile-logo'>
          <span className='text'>
            <img
              alt='brand-logo'
              className='brand-logo'
              src='https://img.icons8.com/external-kmg-design-flat-kmg-design/25/000000/external-cube-graphic-design-kmg-design-flat-kmg-design.png'
            />
            bluecube
          </span>
        </header>
        <Search setData={setData} fetchData={fetchData} mobile={false} />
        <div className='mobile-search' onClick={toggleMobileSearch}>
          <FontAwesomeIcon icon='search' />
        </div>
        <div className='notification'>
          <span ref={ref1} onClick={toggleNotification}>
            <FontAwesomeIcon icon='bell' />
          </span>

          <span className='count'>3</span>
          {visible && (
            <div ref={ref} className='dropdown'>
              {notificationArray.map(
                ({ id, notification, image, time, icon, color }) => (
                  <NotificationItem
                    key={id}
                    id={id}
                    notification={notification}
                    image={image}
                    time={time}
                    icon={icon}
                    color={color}
                  />
                )
              )}
            </div>
          )}
        </div>
        <div className='user'>
          <div className='user-image'>
            <img className='avatar' src='/images/user.jpg' alt='avatar' />
            <span className='online'></span>
          </div>
          <span className='username'>Abigal</span>
          <FontAwesomeIcon className='caret-down' icon='caret-down' />
        </div>
      </div>
      <div className='mob-search'>
        {hideMobileSearch && (
          <Search setData={setData} fetchData={fetchData} mobile={true} />
        )}
      </div>
      <div className='categories'>
        <div className='categories-container'>
          {categoriesArray.map((item) => (
            <CategoryBtn key={item} item={item} />
          ))}
        </div>
      </div>
      <div className='main-content'>
        {loading && <div className='loading'>Loading...</div>}
        {!nothingFound && (
          <div className='loading'>Nothing Found. Enter a New Search Query</div>
        )}
        <div className='main-content-container'>
          {data.length &&
            data.map(
              ({
                user: { first_name, location },
                id,
                alt_description,
                urls: { thumb, small },
              }) => (
                <ImageCard
                  key={id}
                  location={location}
                  alt={alt_description}
                  image={small}
                  thumb={thumb}
                  name={first_name}
                  age={28}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
