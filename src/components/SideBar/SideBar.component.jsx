import { icons } from '../../utils/data';
import LeftNavButton from '../../components/LeftNavButton/LeftNavButton.component.';
import { useClickOutsideHook } from '../../Hooks/clickOutsideHook';
import './SideBar.styles.scss';

const SideBar = () => {
  const { visible, setVisible, ref, ref1 } = useClickOutsideHook(false);

  // function to toggle the hamburger menu
  const toggleHamburger = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <div className='left'>
      <div className='mobileToggle'>
        <input
          ref={ref1}
          type='checkbox'
          checked={visible}
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
      <header className='logo'>
        <img
          alt='brand-logo'
          className='brand-logo'
          src='https://img.icons8.com/external-kmg-design-flat-kmg-design/25/000000/external-cube-graphic-design-kmg-design-flat-kmg-design.png'
        />
        <span className='brand-text'>bluecube</span>
      </header>
      <div ref={ref} className={`content ${visible ? 'mobile-on' : ''}`}>
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
  );
};

export default SideBar;
