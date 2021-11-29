import { useState, useEffect, useCallback } from 'react';
import SideBar from '../../components/SideBar/SideBar.component';
import Maincontent from '../../components/Maincontent/Maincontent.component';
import './Homepage.styles.scss';

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [nothingFound, setNothingFound] = useState(1);
  const [error, setError] = useState(false)
  const [param, setParam] = useState('')

  // initial search string on first load
  const searchField = 'male';

  const fetchData = useCallback(async (text) => {
    try {
      setLoading(true);
      setParam(text)
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      const { results, total } = await res.json();
      setData(results);
      setNothingFound(total);
      setError(false)
    } catch (error) {
      setLoading(false);
      setError(true)
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
        <SideBar />
        <Maincontent
          fetchData={fetchData}
          data={data}
          nothingFound={nothingFound}
          setData={setData}
          loading={loading}
          error={error}
          param={param}
        />
      </main>
    </div>
  );
};

export default Homepage;
