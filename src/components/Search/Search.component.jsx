import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search.styles.scss';

const Search = ({ setData, fetchData, mobile }) => {
  const [searchInput, setSearchInput] = useState('');

  // function to run when form is submitted
  const formSubmit = (event) => {
    event.preventDefault();

    // conditional statement to prevent the form from submitting if the input field is empty
    if (!searchInput) return;
    setData([]);
    fetchData(searchInput);
  };

  // function to set the input value to state
  const searchInputOnChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className={` ${mobile ? 'mobi-search' : 'web-search'}`}>
      <form className='form' onSubmit={formSubmit}>
        <input
          type='search'
          name='search'
          value={searchInput}
          onChange={searchInputOnChange}
          id='search'
          placeholder='Find Something....'
        />
        <FontAwesomeIcon icon='search' className='search' />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
