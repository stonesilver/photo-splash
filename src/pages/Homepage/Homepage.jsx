import { useState, useEffect, useCallback } from 'react';
import LeftNavButton from '../../components/LeftNavButton/LeftNavButton.component.';
import { icons, categoriesArray, notificationArray } from '../../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryBtn from '../../components/CategoryBtn/CategoryBtn.component';
import ImageCard from '../../components/ImageCard/ImageCard.component';
import NotificationItem from '../../components/NotificationItem/NotificationItem.component';
import { useClickOutsideHook } from '../../Hooks/clickOutsideHook';
import Search from '../../components/Search/Search.component';
import './Homepage.styles.scss';

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [hideMobileSearch, setHideMobileSearch] = useState(false);
  const { visible, setVisible, ref, ref1 } = useClickOutsideHook(false);
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [nothingFound, setNothingFound] = useState(1);
  // function to toggle the hamburger menu
  const toggleHamburger = () => {
    setToggle((prevState) => !prevState);
  };

  // function to toggle the notification dropdown
  const toggleNotification = () => {
    setVisible((prevState) => !prevState);
  };

  // function to toggle the mobile search
  const toggleMobileSearch = () => {
    setHideMobileSearch((prevState) => !prevState);
  };

  // initial search string on first load
  const searchField = 'male';

  const fetchData = useCallback(async (text) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      const { results, total } = await res.json();
      setData(results);
      setNothingFound(total);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    return setLoading(false);
  }, []);

  useEffect(() => {
    fetchData(searchField);
  }, [fetchData]);

  return (
    <div className='homepage'>
      <main className='container'>
        <div className='left'>
          <div className='mobileToggle'>
            <input
              type='checkbox'
              checked={toggle}
              onChange={toggleHamburger}
              name='checkbox'
              id='toggleHamburger'
            />
            <div className='hamburgerContainer'>
              <span className='hambuger'></span>
              <span className='hambuger'></span>
              <span className='hambuger'></span>
            </div>
          </div>
          <header className='logo'>bluecube</header>
          <div className={`content ${toggle ? 'mobile-on' : ''}`}>
            <div className='main'>
              <LeftNavButton text='Home' />
              <LeftNavButton text='Message' icon='file' />
            </div>
            <div className='share'>
              <header className='share-header'>SHARE</header>
              {icons.map(({ text, icon }) => (
                <LeftNavButton key={text} text={text} icon={icon} />
              ))}
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='top-nav'>
            <header className='mobile-logo'>
              <span className='text'>bluecube</span>
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
              <div className='loading'>
                Nothing Found. Enter a New Search Query
              </div>
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
      </main>
    </div>
  );
};

export default Homepage;
