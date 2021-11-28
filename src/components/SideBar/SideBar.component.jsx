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
      <header className='logo'>bluecube</header>
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
