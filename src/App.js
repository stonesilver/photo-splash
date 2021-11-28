import Homepage from './pages/Homepage/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFile,
  faHome,
  faChartBar,
  faBullseye,
  faBirthdayCake,
  faNetworkWired,
  faChild,
  faUsers,
  faSearch,
  faBell,
  faCaretDown,
  faChevronDown,
  faMapMarkerAlt,
  faHeart,
  faThumbsDown,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import './App.scss';

library.add(
  faFile,
  faHome,
  faChartBar,
  faBullseye,
  faBirthdayCake,
  faNetworkWired,
  faChild,
  faUsers,
  faSearch,
  faBell,
  faCaretDown,
  faChevronDown,
  faMapMarkerAlt,
  faHeart,
  faThumbsDown,
  faCommentAlt
);

function App() {
  return (
    <div className='App'>
      <Homepage />
    </div>
  );
}

export default App;
