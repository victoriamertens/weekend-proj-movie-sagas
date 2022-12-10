import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getDetails();
  }, []);
  const getDetails = () => {
    dispatch({ type: 'GET_MOVIE_DETAILS', payload: id });
  };

  return <p>Testing details page, {id}</p>;
}
export default Details;
