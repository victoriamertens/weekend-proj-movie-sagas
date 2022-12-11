import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Details.css';

function Details() {
  const { id } = useParams();
  const reduxStore = useSelector((store) => store);
  const details = reduxStore.details;
  const genres = reduxStore.genres;
  //invoke imports
  const dispatch = useDispatch();
  const history = useHistory();
  //to have the GET run on pageload once
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    dispatch({ type: 'GET_MOVIE_DETAILS', payload: id });
  };

  const returnPage = () => {
    history.push('/');
  };

  //conditional to control render timing
  //logic here is if variable details is undefined then axios GET request hasn't happened yet
  //therefore it renders the Loading... message
  //when the redux store updates, the page re-renders and will load the pull page details.
  const loading = !details;
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div class="details">
      <div class="text">
        <h2>{details.title}</h2>

        <p>{details.description}</p>
        <h3>Genres:</h3>
        <ul>
          {genres.map((genre) => {
            return <li>{genre.name}</li>;
          })}
        </ul>
        <button onClick={returnPage}>Return to Main Page</button>
      </div>
      <div class="poster">
        <img src={details.poster} alt={details.title} />
      </div>
    </div>
  );
}
export default Details;
